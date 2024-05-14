import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#B881CB',
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 100,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  sub: {
    textAlign: 'center',
    paddingBottom: 50,
    fontSize: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    width: '40%',
  },
  buttonSeparator: {
    width: '1%', 
  },
  movieImage: {
    height: 150,
    marginBottom: 10,
    marginTop: -100
  }
});

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/guerra4.jpg')} style={styles.movieImage} />
        <View style={styles.header}>
          <Text style={styles.title}>Geopolítica y Religión</Text>
        </View>
        <Text style={styles.sub}>Explora el impacto de los intereses geopolíticos y religiosos en los conflictos mundiales a lo
            largo de la historia y en el mundo contemporáneo.</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Guerras"
            onPress={() => this.props.navigation.navigate('Guerras')}
            color="purple"
          />
          <View style={styles.buttonSeparator} />
          <Button
            style={styles.button}
            title="Camara"
            onPress={() => this.props.navigation.navigate('Camera')}
            color="purple"
          />
        </View>
        <View style={styles.buttonContainer}>
        <Button
            title="SQLite"
            onPress={() => this.props.navigation.navigate('SQLite')}
            color= "purple"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Religions y Guerres"
            onPress={() => this.props.navigation.navigate('Ver')}
            color="purple"
          />
        </View>
      </View>
    );
  }
}
