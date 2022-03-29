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

export default ({ navigation }) => {
    const itemLista = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SOS', { ...item })}
        >
            <Text style={styles.contato}>{item.nome}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
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
    container: {},

    lista: {
        width: '100%',
        padding: 20
    },

    contato: {
        backgroundColor: 'white',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#24CBAF',
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#24CBAF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})
