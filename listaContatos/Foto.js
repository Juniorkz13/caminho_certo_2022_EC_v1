import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'

export default ({ setFotoBase64 }) => {
    const [possuiPermissao, setPossuiPermissao] = useState(null)
    const [type, setType] = useState(CameraType.front)
    const camera = useRef()

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

    async function tirarFoto() {
        const cameraPictureOptions = {
            quality: 0.1,
            base64: true
        }
        const data = await camera.current.takePictureAsync(cameraPictureOptions)
        setFotoBase64('data:image/jpg;base64,' + data.base64)
    }

    return (
        <Camera ref={camera} style={styles.camera} type={type}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.disparo} onPress={tirarFoto}>
                    <Ionicons name='md-camera' size={24} color='white' />
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100,
        padding: 10,
        elevation: 2,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },

    disparo: {
        backgroundColor: '#000',
        borderRadius: 100,
        padding: 10,
        elevation: 2
    },

    botao: {
        backgroundColor: '#000',
        borderRadius: 100,
        padding: 10,
        elevation: 2
    }
})
