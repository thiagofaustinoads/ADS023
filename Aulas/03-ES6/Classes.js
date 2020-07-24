/*
 * sintaxe basica da classe
 */
class nome_da_classe {
    constructor(parametro) {
        this.propriedade = parametro;
    }    
}

// exemplo de classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}
let pessoa = new Pessoa('Jose')

/*
 * getters e setters
 */ 
class nome_da_classe {
    constructor(parametro) {
        this.propriedade = parametro
    }    
    
    get propriedade() {
        return this.propriedade
    }
    
    set propriedade(parametro) {
        this.propriedade = parametro
    }
}

// exemplo de getters e setters
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    get nome() {
        return this.nome
    }

    set nome(nome) {
        this.nome = nome
    } 
}
let pessoa = new Pessoa('Jose')
console.log(pessoa.nome)

/*
 * metodos
 */
class nome_da_classe {
    constructor(parametro) {
        this.propriedade = parametro
    }    
    nome_do_metodo() {
        // implementacao
    }
}

// exemplo de metodo
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
     return 'Ola!'
    }
}
let pessoa = new Pessoa('Jose')
console.log(pessoa.falar())

/*
 * heranca de classes
 */
class nome_da_classe_filha extends nome_da_classe_pai {
    constructor(parametro) {
        super(paraemtro)
        this.propriedade = parametro
    }    
}

// exemplo de heranca
class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome)
        this.cpf = cpf
    }
}
let pessoa = new PessoaFisica('Jose', '111.111.111-11')