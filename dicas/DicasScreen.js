import React, { useState, useEffect } from 'react'
import * as DicasAPI from './DicasAPI'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomButton from '../home/CustomButton'

export default () => {
    const [dicas, setDicas] = useState([])

    useEffect(() => {
        carregarDicas()
    }, [])

    const carregarDicas = async () => {
        try {
            const dados = await DicasAPI.getDicas()
            setDicas(dados)
        } catch (error) {
            alert('Erro ao carregar dicas')
        }
    }
    return (
        <View>
            {dicas.length > 0 && (
                <Image
                    source={{ uri: dicas[0].imagemDica }}
                    style={styles.imagem}
                />
            )}
            {dicas.lenght > 0 && <Text>{dicas[0].textoDica}</Text>}
            <CustomButton title="SIM" />
            <CustomButton title="NÃO" />
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 300,
        height: 250
    }
})
