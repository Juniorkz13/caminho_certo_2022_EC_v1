import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/logo.png'

export default () => (
    <View style={styles.container}>
        <Text style={styles.text}>Caminho Certo</Text>
        <Image source={logo} style={styles.image} />
    </View>
)

const styles = StyleSheet.create({
    container: {},
    text: {},
    image: {}
})
