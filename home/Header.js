import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/logo.png'

export default () => (
    <View style={styles.container}>
        <View style={styles.titulo}>
            <Text style={styles.text}>Caminho </Text>
            <Text style={[styles.text, { color: 'rgb(22, 126, 109)' }]}>
                Certo
            </Text>
        </View>
        <Image source={logo} style={styles.image} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#24CBAF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        elevation: 10
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    },
    titulo: {
        flexDirection: 'row'
    }
})
