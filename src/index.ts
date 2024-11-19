// Listas ?

// Array - Conjunto de elementos de mesmo tipo de única dimensão
let numeros: number[] = [1, 2, 3, 4, 5, 6];

let matrizNumeros: number[][] = [
  [1, 2, 3, 4, 5, 6],
  [1, 5, 5, 6, 67, 1],
];

// Array de um array de números - multidimensional
let matrizEscalar: number[][] = [
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 2],
];

numeros.push(10);
// numeros.push("10") // entrada inválida

// Lista - Conjunto de elementos de tipos diferentes
let elementos: (number | string | boolean)[] = [
  1,
  "cezar",
  "cezar.mezzalira@email.com",
  true,
  "4699981470",
];

// [id, nome, email, ativo, celular]
let matriz: (number | string | boolean)[][] = [
  [1, "Cezar", "cezar.mezzalira@email.com", true, "4699981470"],
  [2, "Gustavo", "gustavo@email.com", true, "4612312321321"],
];

// Tupla - conjunto de valores finito com tipos definidos
let cadastros: [number, string, string, boolean, string] = [
  1,
  "Cezar",
  "cezar.mezzalira@email.com",
  true,
  "4699981470",
];

const linha = "00000000000000|00000000000000000|100,25|100,25|S|AAAAMM";

const campos = linha.split("|");

console.log(linha);
console.log(campos);

// Tuplas são imutáveis
// [cnpj, nome_empresa, receita_bruta, receita_tributacao, valido, data]
const valores: [string, string, number, number, boolean, string] = [
  campos[0],
  campos[1],
  parseFloat(campos[2]),
  parseFloat(campos[3]),
  campos[4] === "S" ? true : false,
  campos[5],
];
console.log(valores);

// Criar uma matriz de 10 produtos que contenha o seguinte layout:
// id do tipo number, nome do tipo texto, quantidade em estoque do tipo float,
// ativo do tipo boolean, data de criacao do tipo texto,
// data ultima atualizacao do tipo texto.
// A matriz deve conter os tipos corretamente, sendo na prática uma lista de tuplas.
// Exemplo de uma linha da matriz:
// [1, "MacBook", 10.5, true, "20240101", "20241118"]

const matrizProdutos: [number, string, number, boolean, string, string][] = [];

matrizProdutos.push([1, "MacBook", 10.0, true, "20240101", "20241118"]);
matrizProdutos.push([2, "MacBook Pro", 10.0, true, "20240101", "20241118"]);
matrizProdutos.push([3, "Apple Pencil", 15, false, "20240101", "20241118"]);

console.log(matrizProdutos)
