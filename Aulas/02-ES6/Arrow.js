/*
 * sintaxe basica da arrow function
 */
const nome_da_funcao = (parametros) => {
    // corpo_da_funcao
}

// parenteses eh obrigatorio se nao houver parametros
const msg = () => {
    return 'Ola!'
}

// parenteses eh opcional se tem um paramento apenas
const msg = (nome) => {
    return 'Ola ' + nome + '!'
}
const msg = nome => {
    return 'Ola ' + nome + '!'
}

// parenteses eh obrigatorio se houver mais de um parametro
const msg = (nome, sobrenome) => {
    return 'Ola ' + nome + ' ' + sobrenome + '!'
}

// parametro com valor padrao
const msg = (nome = 'Jose') => {
    return 'Ola ' + nome + '!'
}
console.log(msg()) // Ola Jose!
console.log(msg('Maria')) // Ola Maria!

// retorno implicito
const msg = (nome) => 'Ola ' + nome + '!'