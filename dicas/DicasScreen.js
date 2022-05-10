import React, { useState, useEffect, useLayoutEffect } from 'react'
import * as DicasAPI from './DicasAPI'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomButton from '../home/CustomButton'

export default () => {
    const [indice, setIndice] = useState(1)
    const [dica, setDica] = useState({})

    useEffect(() => {
        carregarDica()
    }, [indice])

    const carregarDica = async () => {
        try {
            const dados = await DicasAPI.getDicaPorID(indice)
            if (dados !== null) {
                setDica(dados)
            } else {
                alert('Não temos mais dicas para hoje!')
                setIndice(1)
            }
        } catch (error) {
            alert('Erro ao carregar dicas')
        }
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: dica.imagemDica }} style={styles.imagem} />
            <Text style={styles.texto}>{dica.textoDica}</Text>
            <View style={styles.botoes}>
                <CustomButton title='SIM' onPress={() => setIndice(indice + 1)} />
                <CustomButton title='NÃO' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    imagem: {
        width: 300,
        height: 250
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: '100%'
    },

    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    }
})
