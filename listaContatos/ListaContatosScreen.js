import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Button, Paragraph, Dialog, Provider, Portal, TextInput } from 'react-native-paper'

import foto from '../assets/filha.png'
import CardContato from './CardContato'
import * as ContatoRepository from './ContatoRepository'

export default ({ navigation }) => {
    const [lista, setListaContatos] = useState([])
    const [visible, setVisible] = useState(false)
    const [tipo, setTipo] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')

    useEffect(() => {
        carregarContatos()
    }, [])

    const carregarContatos = async () => {
        const contatos = await ContatoRepository.buscarTodos()
        setListaContatos(contatos)
    }

    const addContato = async () => {
        try {
            await ContatoRepository.adicionar(tipo, nome, telefone, foto)
            setVisible(false)
            setTipo('')
            setNome('')
            setTelefone('')
            const contatos = await ContatoRepository.buscarTodos()
            setListaContatos(contatos)
        } catch (error) {
            console.log('Erro ao adicionar contato:', error)
        }
    }

    const removerContato = async (id) => {
        try {
            await ContatoRepository.removerPorId(id)
            const contatos = await ContatoRepository.buscarTodos()
            setListaContatos(contatos)
        } catch (error) {
            console.log('Erro ao remover contato:', error)
        }
    }

    const itemLista = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SOS', { ...item })}>
            <CardContato {...item} onDelete={() => removerContato(item.id)} />
        </TouchableOpacity>
    )

    return (
        <Provider>
            <View>
                <FlatList
                    style={styles.lista}
                    data={lista}
                    renderItem={itemLista}
                    keyExtractor={(item) => String(item.id)}
                />
                <Button mode='text' icon='plus' color='#24CBAF' onPress={() => setVisible(true)}>
                    Adicionar Contato
                </Button>
            </View>
            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title style={styles.titulo}>Informe o novo contato</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode='outlined'
                            label='Tipo'
                            placeholder='Filho(a), Neto(a), etc'
                            value={tipo}
                            onChangeText={(text) => setTipo(text)}
                            outlineColor='#24CBAF'
                            activeOutlineColor='#24CBAF'
                        />
                        <TextInput
                            mode='outlined'
                            label='Nome'
                            placeholder='Nome do contato'
                            value={nome}
                            onChangeText={(text) => setNome(text)}
                            outlineColor='#24CBAF'
                            activeOutlineColor='#24CBAF'
                        />
                        <TextInput
                            mode='outlined'
                            label='Telefone'
                            placeholder='(31) 9 9999-9999'
                            value={telefone}
                            onChangeText={(text) => setTelefone(text)}
                            keyboardType='phone-pad'
                            outlineColor='#24CBAF'
                            activeOutlineColor='#24CBAF'
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button icon='cancel' color='#24CBAF' onPress={() => setVisible(false)}>
                            Cancelar
                        </Button>
                        <Button icon='check' color='#24CBAF' onPress={addContato}>
                            Salvar
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Provider>
    )
}

const styles = StyleSheet.create({
    lista: {
        width: '100%',
        padding: 20
    },
    titulo: {
        fontSize: 20,
        color: '#24CBAF'
    }
})
