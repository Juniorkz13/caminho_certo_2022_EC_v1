import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Constants from 'expo-constants'
import foto from '../assets/filha.png'

const lista = [
    {
        id: 1,
        nome: 'Maria',
        telefone: '99999999',
        foto: foto
    },
    {
        id: 2,
        nome: 'João',
        telefone: '88888888',
        foto: foto
    },
    {
        id: 3,
        nome: 'José',
        telefone: '77777777',
        foto: foto
    }
]

export default () => {
    const itemLista = ({ item }) => (
        <Text>{item.nome + ' ' + item.telefone}</Text>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Contatos</Text>
            <FlatList
                data={lista}
                renderItem={itemLista}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})
