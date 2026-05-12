/*

Você está desenvolvendo uma API para um sistema educacional. O sistema recebe um array com as notas finais 
dos alunos de uma turma.

Porém, alguns problemas foram identificados:

    - Existem notas inválidas (menores que 0 ou maiores que 10)
    - A coordenação precisa de análises rápidas sobre o desempenho da turma

Dados de Entrada (exemplo)
const notas = [8, 7.5, 10, 4, 11, -2, 6, 8, 5.5, 7, 3];

Desafio
Utilizando métodos de array, implemente soluções para as seguintes demandas:
1. Remover notas inválidas
    Considerar apenas notas entre 0 e 10
2. Calcular a média da turma
    Utilizar apenas as notas válidas
3. Listar apenas as notas aprovadas
    Considerar aprovação ≥ 7
4. Verificar se todos os alunos foram aprovados
    Retornar true ou false
5. Verificar se existe pelo menos uma nota máxima (10)
6.   Ordenar as notas válidas em ordem decrescente

*/

//1. Remover notas inválidas Considerar apenas notas entre 0 e 10

const notas = [8, 7.5, 10, 4, 11, -2, 6, 8, 5.5, 7, 3];

const listaNotas = notas.filter(nota => nota >= 0 && nota <= 10)

console.log(listaNotas)

//2. Calcular a média da turma     Utilizar apenas as notas válidas
//Precisa criar uma função

function calcularMedia (listaNotas) { // soma
    const soma = listaNotas.reduce((acumulador, nota) => {
        return acumulador + nota; }, 0);
        return (soma / listaNotas.length).toFixed(2);
    }

console.log(calcularMedia(listaNotas))

//3. Listar apenas as notas aprovadas Considerar aprovação ≥ 7

const aprovadas = listaNotas.filter(nota => nota >=7)

console.log(aprovadas)

//4. Verificar se todos os alunos foram aprovados Retornar true ou false

const todosAprovados = listaNotas.every(nota => nota >=7)

console.log(todosAprovados)

//5. Verificar se existe pelo menos uma nota máxima (10)

const existeNotaMaxima = listaNotas.some(nota => nota === 10)
console.log(existeNotaMaxima)

// 6.   Ordenar as notas válidas em ordem decrescente
// precisa criar uma copia do array

function ordenarNotasValidas (listaNotas){
    return [...listaNotas].sort((a,b)=> (b-a))
}
console.log(ordenarNotasValidas(listaNotas))