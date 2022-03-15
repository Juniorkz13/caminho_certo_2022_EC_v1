import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Header from './Header'
import CustomButton from './CustomButton'

export default () => {
    const sos = () => {
        alert('Clicou no SOS')
    }

    const registro = () => {
        alert('Clicou no registro')
    }

    const rastreio = () => {
        alert('Clicou no rastreio')
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.buttonContainer}>
                <CustomButton title="SOS" color="red" onPress={sos} />
                <CustomButton title="Registro" onPress={registro} />
                <CustomButton title="Rastreio" onPress={rastreio} />
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
