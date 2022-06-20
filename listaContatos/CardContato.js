import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default ({ foto, tipo, nome, telefone, onDelete }) => (
    <View style={styles.card}>
        <Image source={{ uri: foto }} style={styles.imagem} />
        <View style={styles.cardBody}>
            <Text>{nome}</Text>
            <Text>{tipo}</Text>
            <Text>{telefone}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
            <MaterialIcons style={styles.icon} name='delete' size={30} color='black' />
        </TouchableOpacity>
        <MaterialIcons style={styles.icon} name='call' size={30} color='black' />
    </View>
)

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 2
    },
    imagem: {
        width: 70,
        height: 90,
        borderRadius: 15,
        margin: 10
    },
    cardBody: {
        flexGrow: 1
    },
    icon: {
        justifyContent: 'center',
        right: 10
    }
})
