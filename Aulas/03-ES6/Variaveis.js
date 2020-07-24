/*
 * var possui escopo da funcao
 */
var x = 10
function f(y) {
    if (x > y) {
        var z = y
    }

    console.log(z) // acessivel em qualquer parte da funcao
}

/*
 * let possui escopo do bloco
 */
let j = 10
for (let i = 0; i < j; i++) {
    if (i % 2 == 0) {
        let k = true
    }

    console.log(k) // inacessivel pois soh existe no bloco if
}

/*
 * const possui escopo do bloco e eh imutavel
 */
const a // precisa ser inicializada

const b = 0
b = 1 // nao pode ser modificada

const c = {
    str: 'texto',
    num: 1
}
c.str = 'outro' // pode-se alterar as propriedades de um objeto

const d = ['Item 1', 'Item 2']
d.push('Item 3') // pode-se alterar os elementos de um array