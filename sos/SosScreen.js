import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import CustomButton from '../home/CustomButton'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import * as Linking from 'expo-linking'

export default ({ navigation, route }) => {
    const { tipo, nome, telefone } = route.params
    const [localizacao, setLocalizacao] = useState()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: nome
        })
    }, [navigation, nome, telefone])

    useEffect(() => {
        obterLocalizacao()
    }, [])

    obterLocalizacao = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('Permissão para acessar a localização negada')
            return
        }
        let localizacao = await Location.getCurrentPositionAsync({})
        setLocalizacao({
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude,
            latitudeDelta: parseFloat(0.001),
            longitudeDelta: parseFloat(0.001)
        })
    }

    enviarLocalizacao = () => {
        if (!localizacao) {
            alert('Não foi possível obter sua localização')
            return
        }
        const mensagem = `Olá ${nome}, eu estou neste local, preciso da sua ajuda URGENTE! https://www.google.com/maps/@${localizacao.latitude},${localizacao.longitude},18z`
        Linking.openURL(`whatsapp://send?phone='+55${telefone}'&text=${mensagem}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapa}>
                <MapView initialRegion={localizacao} style={styles.mapView}>
                    {localizacao && (
                        <Marker title='Você está aqui' coordinate={localizacao}></Marker>
                    )}
                </MapView>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title='localização' color='red' onPress={enviarLocalizacao} />
                <CustomButton
                    title='discar'
                    color='red'
                    onPress={() => Linking.openURL('tel:' + telefone)}
                />
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
    },

    mapView: {
        width: '100%',
        height: '100%'
    }
})
