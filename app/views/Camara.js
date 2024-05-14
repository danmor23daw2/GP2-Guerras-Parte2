import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { Camera } from 'expo-camera/legacy';
import * as MediaLibrary from 'expo-media-library';

export class Camara extends React.Component {
  cameraRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
      imageUri: null,
    };
  }

  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });

    if (status === 'granted') {
      const { status: mediaLibStatus } = await MediaLibrary.requestPermissionsAsync();
      if (mediaLibStatus === 'granted') {
        const { assets } = await MediaLibrary.getAssetsAsync({ first: 1 });
        if (assets.length > 0) {
          this.setState({ imageUri: assets[0].uri });
        }
      }
    }
  }

  ferFoto = async () => {
    if (this.cameraRef.current) {
      let photo = await this.cameraRef.current.takePictureAsync();
      console.log(photo.uri);
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      await MediaLibrary.createAlbumAsync('DAW2', asset, false);
      this.setState({ imageUri: photo.uri });
    }
  };

  render() {
    const { hasPermission } = this.state;

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} ref={this.cameraRef} />
        <Button title="Fes una foto" onPress={this.ferFoto} color="#B881CB" />
        {this.state.imageUri && (
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: this.state.imageUri }} style={{ width: 200, height: 200 }} />
          </View>
        )}
      </View>
    );
  }
}
