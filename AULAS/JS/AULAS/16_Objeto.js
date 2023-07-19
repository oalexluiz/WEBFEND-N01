const Pessoa = {
    nome: "João", // Propriedade "nome" com valor "João"
    idade: 25, // Propriedade "idade" com valor 25
    profissao: "Engenheiro", // Propriedade "profissao" com valor "Engenheiro"
    saudacao: function() { // Método "saudacao" que imprime uma saudação com nome e idade
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  };
  
  console.log(pessoa.nome); // Saída: João
  console.log(pessoa["idade"]); // Saída: 25
  
  pessoa.saudacao(); // Saída: Olá, meu nome é João e tenho 25 anos.

  function Carro(marca, modelo, ano) { // Definição da função construtora "Carro"
    this.marca = marca; // Propriedade "marca" do objeto criado pela função construtora
    this.modelo = modelo; // Propriedade "modelo" do objeto criado pela função construtora
    this.ano = ano; // Propriedade "ano" do objeto criado pela função construtora
    this.ligar = function() { // Método "ligar" do objeto criado pela função construtora
      console.log(`O ${this.modelo} está ligado.`);
    };
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2022); // Criação de uma instância do objeto "Carro" chamada "meuCarro"
  console.log(meuCarro.marca); // Saída: Toyota
  meuCarro.ligar(); // Saída: O Corolla está ligado.

  const pessoa = {
    nome: "Maria",
    idade: 30
  };
  
  pessoa.profissao = "Advogada";
  console.log(pessoa.profissao); // Saída: Advogada
  
  delete pessoa.idade;
  console.log(pessoa.idade); // Saída: undefined

  const pessoas = [
    {
          nome: "João",
          idade: 25 
      },
    { 
          nome: "Maria",
          idade: 30 },
    {
          nome: "Pedro",
          idade: 20
      },
  ];
  
  console.log(pessoas); // Saída: [ { nome: 'João', idade: 25 }, { nome: 'Maria', idade: 30 }, { nome: 'Pedro', idade: 20 } ]
  console.log(pessoas[0].nome); // Saída: João
  console.log(pessoas[1].idade); // Saída: 30
