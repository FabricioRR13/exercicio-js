//FILTER
//Filter número maiores que 2

// const numeros = [1,2,3,4,5,6];

// const numerosMaioresQueDois = numeros.filter(numero => numero > 2);
// console.log (numerosMaioresQueDois);


//Filtrar nomes


// let nomes = ["Ana", "Bruno", "Carlos", "Eva","Fernando"];

// let nomesLongos = nomes.filter(nome => nome.length > 5);
// console.log(nomesLongos);


//Filtrando números pares
// let numeros = [1,2,3,4,5,6,7,8,9,10];


// let pares = numeros.filter(numero => numero %2 ===0);
// console.log(pares);

// let pessoas = [
//     {nome: "Lucas", idade : 17},
//     {nome : "Mariana", idade: 22},
//     {nome: "Juliana", idade:15},
//     {nome: "Pedro", idade:33},
// ];

// let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
// console.log(adultos);

//--------------------------------------------------------------------------//---------------------------------------------------------------

//FIND
//RETORNA O PRIMEIRO ELEMENTO DA LISTA CORRESPONDENTE A CONDIÇÃO.

//PROCURAR UM PRODUTO PELO PREÇO.
// const produtos = [
//     {id: 1, nome: "teclado", preco: 100},
//     {id: 2, nome: "mousa", preco: 50},
//     {id: 3, nome: "Monitor", preco: 700}

    
// ]
// const produtoCaro = produtos.find(produto => produto.preco ===700);
// console.log(produtoCaro);

//encontrar numeros maior que 10

// let numeros = [5,8,12,20,3,15];

// let encontrado = numeros.find(numero=> numero>10);
// console.log(encontrado);


// //Buscar por um nome pela primeira letra
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Cátia"];
// let nomeEncontrado = nomes.find(nome=> nome.startsWith("C"));
// console.log(nomeEncontrado)

// let pessoas = [
//     {nome: "lucas",idade:22},
//     {nome: "juliana", idade:35},
//     {nome: "mariana, idade:17"},
//     {nome: "Pedro", idade:"15"}
// ];

// let adulto = pessoas.find(pessoa=> pessoa.idade >= 18);
// console.log(adulto)



//________------------------------__________________---------------------//______________________-----------------------___________________---------------------


//map
//Percorrer um array e retorna um novo array modificado.

//Multiplicar todos os números por 2
// const numeros = [1,2,3,4,5];

// const numerosDobrados = numeros.map(numeros => numeros * 2);
// console.log(numerosDobrados);

//Criando um array de nomes a partit de objetos

// let pessoas = [
//     {nome: "carlos", idade: 25},
//     {nome:"Ana", idade: 30},
//     {nome:"Bruno", idade: 20},
// ];

// let nomes = pessoas.map(pessoa =>pessoa.nome);
// console.log(nomes);


//Criando frases com infomações de objetos

// let pessoas = [
//     {nome: "carlos", idade: 25},
//     {nome:"Ana", idade: 30},
//     {nome:"Bruno", idade: 20},
// ]

// let menssagem = pessoas.map(pessoa=>`${pessoa.nome} tem ${pessoa.idade} anos.`)
// console.log(menssagem);

//Deixando nomes = ["ana", "bruno", "carlos"];

// const nomes = ["ana", "bruno", "carlos"];

// const nomesMaiusculo = nomes.map(nome => "Colaborador: " + nome.toUpperCase())
// console.log(nomesMaiusculo)


//--------------------------------//--------------------------------------------------------------------------

//REDUCE

//SOMAR TODOS OS NUMEROS DO ARRAY

// const numeros = [1,2,3,4,5];

// const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// console.log(soma);


//Maior número em um array

// const numeros = [10,5,8,20,3]

// const maiorNumero = numeros.reduce((max, numero) => {
//     if (numero > max) {
//         return numero
//     }else{
//         return max;
//     }
// }, numeros[0]);
// console.log(maiorNumero)


//contar a frequencia de palavra

// const palavras = ["maça", "banana", "laranja", "banana", "maça"];

// const contagem = palavras.reduce((acumulador, palavra) => {
//     acumulador[palavra] = (acumulador[palavra] || 0) + 1
//     return acumulador;
// }, {})

// console.log(contagem);


//calcular media de notas com auxilio do reduce

// const notas = [7,8,9,6,10];

// const media = nota.reduce((total, nota) => total + nota, 0) / notas.length;
// console.log(media);


//------------------------------------------------------------------

//uso combinado

// const usuarios = [
//     {id: 1, nome:"alice", idade:25},
//     {id: 2, nome:"bob", idade:30},
//     {id: 3, nome:"carol", idade:25}


// ]
// //filtar usuarios com idade maior que 21.
// const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21);

// //Encontrar o primeiro usuario com idade maior que 21
// const usuario = usuarios.find(usuario => usuario.idade > 21);

// //Criar um array apenas com nomes dos usuarios
// const nomeUsuarios = usuarios.map(usuarios => usuario.nome);

// //Somar todas as idade dos usuarios usando reduca
// const somaIdade = usuarios.reduce((total, usuario) => total+ usuario.idade, 0)


// console.log("maiores de idade: " + maioresDeIdade);
// console.log("Primeiro maior de idade: " , usuario);
// console.log("Nomes de usuar: " , nomeUsuarios);
// console.log("Soma de idade: " , somaIdade)



