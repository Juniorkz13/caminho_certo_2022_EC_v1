const getDicas = async () => {
    const response = await fetch('https://api-caminho-certo.tarleylana.repl.co/api/dicas')
    return response.json()
}

const getDicaPorID = async (id) => {
    const response = await fetch(`https://api-caminho-certo.tarleylana.repl.co/api/dicas/${id}`)
    return response.json()
}

export { getDicas, getDicaPorID }
