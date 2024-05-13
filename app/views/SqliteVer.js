import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
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
            items: [],
            editingItem: null,
            editValue: '',
        };
        this.db = SQLite.openDatabase("daw2.db");

        this.db.transaction(tx => {
            tx.executeSql(
                "create table if not exists items (id integer primary key not null, done int, value text);"
            );
        });

        this.fetchData();
    }

    fetchData() {
        this.db.transaction(
            tx => {
                tx.executeSql("select * from items", [], (_, { rows }) => {
                    const items = rows._array;
                    this.setState({ items });
                });
            }
        );
    }

    handleAddItem = () => {
        const newItem = `Item ${this.state.items.length + 1}`;
        this.db.transaction(
            tx => {
                tx.executeSql("insert into items (done, value) values (0, ?)", [newItem], () => {
                    this.fetchData();
                });
            }
        );
    }

    handleDeleteAll = () => {
        this.db.transaction(
            tx => {
                tx.executeSql("delete from items", [], () => {
                    this.fetchData();
                });
            }
        );
    }

    handleEditItem = () => {
        const { editingItem, editValue } = this.state;
        this.db.transaction(
            tx => {
                tx.executeSql("update items set value = ? where id = ?", [editValue, editingItem.id], () => {
                    this.setState({ editingItem: null, editValue: '' }, () => {
                        this.fetchData();
                    });
                });
            }
        );
    }

    handleDeleteItem = (id) => {
        this.db.transaction(
            tx => {
                tx.executeSql("delete from items where id = ?", [id], () => {
                    this.fetchData();
                });
            }
        );
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
                    <Button title="Guardar" onPress={this.handleEditItem} color="purple" />
                </View>
            ) : (
                <View>
                    <Text>{item.value}</Text>
                    <Button title="Editar" onPress={() => this.setState({ editingItem: item, editValue: item.value })} color="purple"/>
                    <Button title="Borrar" onPress={() => this.handleDeleteItem(item.id)} color="purple"/>
                </View>
            )}
        </View>
    );

    render() {
        return (
            <View style={estils.peu}>
                <Text style={estils.textPeu}> SQLITE </Text>
                <Button title="Añadir Registro" onPress={this.handleAddItem} color="#B881CB"/>
                <Button title="Borrar Todos los Registros" onPress={this.handleDeleteAll} color="#B881CB"/>
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