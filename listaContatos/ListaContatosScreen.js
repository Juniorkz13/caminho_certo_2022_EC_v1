import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'

import foto from '../assets/filha.png'
import CardContato from './CardContato'

const lista = [
    {
        id: 1,
        nome: 'Maria',
        telefone: '99999999',
        tipo: 'Filha',
        foto: foto
    },
    {
        id: 2,
        nome: 'João',
        telefone: '88888888',
        tipo: 'Filho',
        foto: foto
    },
    {
        id: 3,
        nome: 'José',
        telefone: '77777777',
        tipo: 'Filho',
        foto: foto
    }
]

export default ({ navigation }) => {
    const itemLista = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('SOS', { ...item })}
        >
            <CardContato {...item} />
        </TouchableOpacity>
    )

    return (
        <View>
            <FlatList
                style={styles.lista}
                data={lista}
                renderItem={itemLista}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    lista: {
        width: '100%',
        padding: 20
    }
})
