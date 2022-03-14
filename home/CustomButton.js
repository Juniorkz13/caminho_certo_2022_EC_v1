import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default ({ title = '', color = '#24CBAF', onPress }) => (
    <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 3
    },
    buttonText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }
})
