import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './home/HomeScreen'
import ListaContatosScreen from './listaContatos/ListaContatosScreen'
import SosScreen from './sos/SosScreen'
import RastreioScreen from './rastreio/RastreioScreen'
import DicasScreen from './dicas/DicasScreen'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={headerStyle} initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name='ListaContatos'
                    component={ListaContatosScreen}
                    options={{
                        title: 'Lista de Contatos'
                    }}
                />
                <Stack.Screen name='SOS' component={SosScreen} />
                <Stack.Screen name='Rastreio' component={RastreioScreen} />
                <Stack.Screen name='Dicas' component={DicasScreen} options={{ title: 'Dicas' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const headerStyle = {
    headerStyle: {
        backgroundColor: '#24CBAF'
    },
    headerTintColor: 'white'
}
