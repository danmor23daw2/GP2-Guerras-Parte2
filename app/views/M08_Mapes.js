import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

const mode = 'driving'; // 'walking';

export class M08_Mapes extends React.Component {
  constructor(props) {
    super(props);
    this.coords = [{
      lat: 41.390205,
      lng: 2.174007,
    }, {
      lat: 41.380205,
      lng: 2.175007,
    }];
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Mapa </Text>
        <MapView style={styles.mapStyle} initialRegion={{
          latitude: this.coords[0].lat,
          longitude: this.coords[0].lng,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
          <Marker
            coordinate={{
              latitude: this.coords[0].lat,
              longitude: this.coords[0].lng
            }}
            title={"sortida"}
            description={"punt A"}
          />
          <Marker
            coordinate={{
              latitude: this.coords[1].lat,
              longitude: this.coords[1].lng
            }}
            title={"arribada"}
            description={"punt B"}
          />
          <Polyline
            coordinates={[
              { latitude: 41.390205, longitude: 2.174007 },
              { latitude: 41.380205, longitude: 2.175007 },
            ]}
            strokeColor="#000"
            strokeWidth={6}
          />
        </MapView>
      </View>
    );
  }
}