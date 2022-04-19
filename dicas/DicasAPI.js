const getDicas = async () => {
    const response = await fetch(
        'https://api-caminho-certo.tarleylana.repl.co/api/dicas'
    )
    const dicas = await response.json()
    return dicas
}

const getDicaPorID = async (id) => {
    const response = await fetch(
        `https://api-caminho-certo.tarleylana.repl.co/api/dicas/${id}`
    )
    const dicasPorID = await response.json()
    return dicasPorID
}

export { getDicas, getDicaPorID }
