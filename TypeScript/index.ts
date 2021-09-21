class Pessoa {

    // private nome!:string
    // private idade!: number
    // private cpf!: number

    constructor (private nome:string, private idade:number, private cpf:string){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
    escreverPropriedades(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.cpf)
    }
    getNome(){
        return this.nome;
    }
    setNome(nome:string){
        this.nome = nome
    }
    getIdade(){
        return this.idade;
    }
    setIdade(idade:number){
        this.idade = idade;
    }
    getCpf(){
        return this.cpf;
    }
    setCpf(cpf:string){
        this.cpf = cpf;
    }
}

let pessoa = new Pessoa ("Mariane",32,"333.333.333-33");

pessoa.setNome("Marian");
console.log(pessoa.getNome());



class Carro {
marca!: string
modelo !:string
cor !: string


constructor(marca: string, modelo: string, cor: string){
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
}

escreverPropriedades(){
    console.log(this.marca)
    console.log(this.modelo)
    console.log(this.cor)
}


}

let carro = new Carro("Renalt", "Clio", "Preta");

carro.escreverPropriedades()
