import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CustomButton from '../home/CustomButton'
import CardRastreio from './CardRastreio'

const rastreio = [
    {
        id: 1,
        conteudo:
            'O rastreio é composto de várias perguntas sobre diferentes fatores de risco.',
        color: '#fff'
    },
    {
        id: 2,
        conteudo:
            'Sempre que sua resposta apresentar um fator de risco, receberá uma orientação em vídeo.',
        color: '#fff'
    }
]

export default () => {
    const itemLista = ({ item }) => <CardRastreio {...item} />

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={rastreio}
                    renderItem={itemLista}
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
            <View>
                <CustomButton title="continuar" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 20
    }
})
