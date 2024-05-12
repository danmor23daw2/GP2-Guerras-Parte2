import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const peliculas = [
    {
        id: 1,
        nombre: 'La guerra santa',
        director: 'La noción de la "Guerra Santa" en el Islam, conocida como yihad, abarca un concepto complejo que ha sido interpretado de diversas maneras a lo largo de la historia. Mientras algunos la entienden como un llamado a la lucha armada, es crucial destacar que existe una amplia gama de interpretaciones,\n y no todos los musulmanes la ven como una justificación para la violencia. La Doctrina Truman, anunciada en 1947, establecía el compromiso de Estados Unidos de contener la expansión del comunismo en todo el mundo. ',
        imagen: require('../../assets/guerra4.png'),
    },
    {
        id: 2,
        nombre: 'Guerra Fría',
        director: 'Aunque la Guerra Fría fue principalmente un conflicto ideológico y político entre Estados Unidos y la Unión Soviética, también hubo implicaciones religiosas. La Iglesia Católica desempeñó un papel en la resistencia contra el comunismo en Europa del Este, especialmente en países como Polonia con el movimiento sindical Solidaridad liderado por Lech Walesa. En los países del bloque comunista, la práctica religiosa estaba a menudo restringida y la ideología oficial del comunismo promovía un ateísmo estatal. La Iglesia Católica y otras instituciones religiosas fueron perseguidas en varios lugares, especialmente en la Unión Soviética y sus satélites.',
        imagen: require('../../assets/fria.jpg'),
    },
    {
        id: 3,
        nombre: 'Guerra en los Balcanes',
        director: 'Los conflictos en la antigua Yugoslavia fueron complejos y tenían diversas dimensiones, incluyendo las étnicas y religiosas. En algunos casos, como en Bosnia y Herzegovina, se produjeron enfrentamientos entre comunidades católicas, ortodoxas y musulmanas. Las disputas territoriales, especialmente en lugares como Kosovo y Bosnia y Herzegovina, fueron una causa importante. Grupos étnicos diferentes reclamaban territorios disputados, lo que llevó a conflictos violentos por el control y la autonomía.',
        imagen: require('../../assets/balca3.jpg'),
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
        backgroundColor: '#B881CB',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10

    },
    nombrePelicula: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    directorPelicula: {
        fontSize: 15,
        marginBottom: 60,
        marginLeft: 20,
        marginRight: 20
    },
    imagenPelicula: {
        width: 330,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 5,
        marginTop: 20,
        borderRadius: 5
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
                        <Text style={estilos.directorPelicula}>{pelicula.director}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}
