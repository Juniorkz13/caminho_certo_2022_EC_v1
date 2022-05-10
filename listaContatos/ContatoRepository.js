import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

const key = 'contatos'

// AsyncStorage.clear()

const adicionar = async (tipo, nome, telefone, foto) => {
    const listaContatos = await buscarTodos()
    console.log('Contatos do banco:', JSON.stringify(listaContatos))

    const contato = {
        id: uuid.v4(),
        tipo,
        nome,
        telefone,
        foto
    }

    listaContatos.push(contato)

    console.log('Nova lista:', JSON.stringify(listaContatos))
    await AsyncStorage.setItem(key, JSON.stringify(listaContatos))
}

const buscarTodos = async () => {
    try {
        return (await AsyncStorage.getItem(key).then(JSON.parse)) || []
    } catch (error) {
        console.log('Erro ao buscar contatos:', error)
    }
}

const removerTodos = async () => {
    await AsyncStorage.removeItem(key)
}

const removerPorId = async (id) => {
    try {
        const listaContatos = await buscarTodos()
        const novaLista = listaContatos.filter((c) => c.id !== id)
        await AsyncStorage.setItem(key, JSON.stringify(novaLista))
    } catch (error) {
        console.log('Erro ao remover contato:', error)
    }
}

const alterar = async (contato) => {
    const listaContatos = await buscarTodos()
    const antigoContato = listaContatos.find((c) => c.id === contato.id)

    if (antigoContato) {
        antigoContato.nome = contato.nome
        antigoContato.tipo = contato.tipo
        antigoContato.telefone = contato.telefone
        antigoContato.foto = contato.foto

        await AsyncStorage.setItem(key, JSON.stringify(listaContatos))
    }
}

export { adicionar, buscarTodos, removerPorId, removerTodos, alterar }
