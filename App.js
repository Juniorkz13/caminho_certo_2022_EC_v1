import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './home/HomeScreen'
import ListaContatosScreen from './listaContatos/ListaContatosScreen'
import SosScreen from './sos/SosScreen'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#24CBAF'
                    },
                    headerTintColor: 'white'
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ListaContatos"
                    component={ListaContatosScreen}
                    options={{
                        title: 'Lista de Contatos'
                    }}
                />
                <Stack.Screen name="SOS" component={SosScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
