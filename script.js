//Exercício MAP

function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value === 'User'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios))


//Exercício SET com uso do Spread

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet];

}

console.log(valoresUnicos(meuArray))



////// Exercícios map, filter, reduce


//// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando
// o parâmetro this de um objeto criado por você, e depois sem ele.


const nums = [1, 2]

const catuai = {
    value: 1,
}

const bourbon = {
    value: 4,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('this is catuai', mapWithThis(nums, catuai))
console.log('this is bourbon', mapWithThis(nums, bourbon))



// function map Without This

const myArray = [1, 2, 3, 4, 5, 6, 7, 10, 20]

function times(number){  

    return myArray.map((item) => item * number)
}

console.log(times(2))
console.log(times(6))


//// Filter

// Filtre e retorne todos os números pares de um array.


function evens(value) {
    return value % 2 === 0
}


let arrayEvens = myArray.filter(evens)

console.log('these numbers are even: ', arrayEvens)


///// Reduce

// 1. Some todos os números de um array

function soma(array){
    return array.reduce(function (prev, current){
        return prev + current;
    });
}

console.log('reduce', soma(meuArray))

// 2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
// Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const pricesList = [
    {
        product: 'apple',
        price: 1
    },
    {
        product: 'lettuce',
        price: 2
    },
    {
        product: 'pen',
        price: 3
    },
]

function total(prices, availableCash) {
    return prices.reduce(function(prev, current){
        return prev  - current.price; 
    }, availableCash)

}

console.log('reduce 2', total(pricesList, 100))
