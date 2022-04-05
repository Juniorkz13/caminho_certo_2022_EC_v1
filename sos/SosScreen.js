import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomButton from '../home/CustomButton'

export default ({ navigation, route }) => {
    const { tipo, nome, telefone } = route.params
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: nome
        })
    }, [navigation, nome])
    return (
        <View style={styles.container}>
            <View style={styles.mapa}>
                <Image
                    source={require('../assets/mapaSample.png')}
                    style={styles.mapaSample}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title="localização" color="red" />
                <CustomButton title="discagem" color="red" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapa: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden'
    },
    mapaSample: {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        justifyContent: 'center',
        padding: 20
    }
})
