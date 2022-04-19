import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ conteudo, color }) => (
    <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.cardText}>{conteudo}</Text>
    </View>
)

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2
    },
    cardText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 30,
        color: 'black'
    }
})
