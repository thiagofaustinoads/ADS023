/*
 * sintaxe basica do objeto JS
 */
const nome_do_objeto = { campo: valor }

// exemplo de objeto JS
const pessoa = { nome: 'Jose', sobrenome: 'Silva' }
console.log(pessoa.nome)

/*
 * desestruturacao do objeto JS
 */
const { campo } = nome_do_objeto

// exemplo de desestruturacao
const pessoa = { nome: 'Jose', sobrenome: 'Silva' }
const { nome } = pessoa
console.log(nome) // Jose

/*
 * propagacao de objeto JS
 */
const nome_do_objeto_propagado = { campo: valor }
const nome_do_objeto = { ...nome_do_objeto_propagado }

// exemplo de propagacao
const pessoa = { nome: 'Jose' }
let pessoaFisica = {
    ...pessoa, // objeto propagado para outro objeto
    cpf: '111.111.111-11'
}
let listaPessoa = [...pessoa] // objeto propagado para um array