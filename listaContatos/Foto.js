import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'

export default () => {
    const [possuiPermissao, setPossuiPermissao] = useState(null)
    const [type, setType] = useState(CameraType.front)

    useEffect(() => {
        obterPermissaoCamera()
    }, [])

    async function obterPermissaoCamera() {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setPossuiPermissao(status === 'granted')
    }

    if (possuiPermissao === null) return <View />

    if (possuiPermissao === false)
        return <Text>É necessário a permissão para acessar a camera</Text>

    return (
        <Camera style={styles.camera} type={type}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        setType(type === CameraType.back ? CameraType.front : CameraType.back)
                    }}
                >
                    <Ionicons name='md-camera-reverse' size={24} color='white' />
                </TouchableOpacity>
            </View>
        </Camera>
    )
}

const styles = StyleSheet.create({
    camera: {
        height: 220,
        width: 220,
        borderRadius: 100,
        overflow: 'hidden',
        margin: 30
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    botao: {
        backgroundColor: 'transparent',
        margin: 20,
        alignSelf: 'flex-end',
        alignItems: 'center'
    }
})
