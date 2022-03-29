import React from 'react'
import { View, Text } from 'react-native'

export default ({ route }) => {
    const { id, nome, telefone } = route.params
    return (
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Telefone: {telefone}</Text>
        </View>
    )
}
