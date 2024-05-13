import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

const estils = StyleSheet.create({
    textPeu: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    peu: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'purple'
    },
});

export class VeureGuerresReligions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, value: 'Cruzadas (Cristianismo vs Islam)' },
                { id: 2, value: 'Guerras de Religión en Francia (Catolicismo vs Protestantismo)' },
                { id: 3, value: 'Inquisición (Persecución de no católicos por la Iglesia Católica)' },
                { id: 4, value: 'Guerras de religión en Europa Central (Catolicismo vs Protestantismo)' },
                { id: 5, value: 'Guerras Otomanas (Islam vs Cristianismo)' },
                { id: 6, value: 'Guerras de las Reformas (Cristianismo vs Protestantismo)' },
                { id: 7, value: 'Cruzada Albigense (Cristianismo vs Catarismo)' }
            ],
            editingItem: null,
            editValue: '',
        };
        this.db = SQLite.openDatabase("daw2.db");

        this.db.transaction(tx => {
            tx.executeSql(
                "create table if not exists items (id integer primary key not null, done int, value text);"
            );
        });

    }

    renderItem = ({ item }) => (
        <View style={styles.item}>
            {this.state.editingItem && this.state.editingItem.id === item.id ? (
                <View>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#DDD', padding: 5 }}
                        value={this.state.editValue}
                        onChangeText={text => this.setState({ editValue: text })}
                    />
                </View>
            ) : (
                <View>
                    <Text>{item.value}</Text>
                </View>
            )}
        </View>
    );

    render() {
        return (
            <View style={estils.peu}>
                <Text style={estils.textPeu}> SQLITE </Text>
                <FlatList
                    data={this.state.items}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EEE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
