import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const peliculas = [
    {
        id: 1,
        nombre: 'Bella y la Bestia',
        director: 'Disney',
        año: 1972,
        imagen: require('../../assets/peli1.jpg'),
    },
    {
        id: 2,
        nombre: 'Nemo',
        director: 'Disney',
        año: 1994,
        imagen: require('../../assets/peli2.jpg'),
    },
    {
        id: 3,
        nombre: 'UP',
        director: 'Disney',
        año: 1994,
        imagen: require('../../assets/peli3.jpg'),
    },
];

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    peliculaContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    nombrePelicula: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    directorPelicula: {
        fontSize: 18,
        marginBottom: 3,
    },
    añoPelicula: {
        fontSize: 16,
        color: 'gray',
    },
    imagenPelicula: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});

export class Guerras extends React.Component {
    render() {
        return (
            <ScrollView style={estilos.container}>
                {peliculas.map(pelicula => (
                    <View key={pelicula.id} style={estilos.peliculaContainer}>
                        <Image source={pelicula.imagen} style={estilos.imagenPelicula} />
                        <Text style={estilos.nombrePelicula}>{pelicula.nombre}</Text>
                        <Text style={estilos.directorPelicula}>Director: {pelicula.director}</Text>
                        <Text style={estilos.añoPelicula}>Año: {pelicula.año}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}
