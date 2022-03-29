import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

import Header from './Header'
import CustomButton from './CustomButton'

export default ({ navigation, route }) => {
    const onClick = () => {
        alert('clicou')
    }

    const sos = () => {
        navigation.navigate('ListaContatos')
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#24CBAF" style="light" />
            <Header />
            <View style={styles.buttonContainer}>
                <CustomButton title="SOS" color="red" onPress={sos} />
                <CustomButton title="Registro" onPress={onClick} />
                <CustomButton title="Rastreio" onPress={onClick} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: 'white'
    }
})
