// проверить строку - палиндром ли она

const pal = 'Abccba'
const noPal = 'Abcsf'

const func = (word) => {
    let newWord = word.toLowerCase()
    let revWord = newWord.split('').reverse().join('')
    console.log(newWord)
    console.log(revWord)
    if (newWord === revWord) {
        console.log('yes')
    }
    else {
        console.log('no')
    }

}

// func(pal)


function hello_hell () {
    p1 = 'hello'
    console.log(p1)
    var p1
}

// hello_hell()
// hello


var p1 = 1
var p2 = 2   // можно

// let p2 = 1
// let p2 = 2   // нельзя


function sum (a, b) {
    return a + b;
}

const sum_1 = (a, b) => {
    return a + b;
}


// 
const massive = [1, 2, 6, 10]
const massive2 = massive
massive2.push(100)
// console.log(massive2)    // [ 1, 2, 6, 10, 100 ]
// console.log(massive)     // [ 1, 2, 6, 10, 100 ]

const massive3 = massive.slice()
massive3.push(100)
// console.log(massive3)    // [ 1, 2, 6, 10, 100 ]
// console.log(massive)     // [ 1, 2, 6, 10 ]

const Human = {
    username: 'Oleg',
    password: '0000'
}

const Oleg = Human

delete Oleg.password

Oleg['new_password'] = '123'

// console.log(Oleg)    // { username: 'Oleg', new_password: '123' }
// console.log(Human)   // { username: 'Oleg', new_password: '123' }

const Vasya = {...Human}  // копируем

Vasya['username'] = 'Vasya'

// console.log(Vasya)    // { username: 'Vasya', new_password: '123' }
// console.log(Human)   // { username: 'Oleg', new_password: '123' }


const obj1 = {
    name: 'Max'
}

const obj2 = {
    lastName: 'Cool'
}

const unitedObject = {...obj1, ...obj2}
// console.log(unitedObject) // { name: 'Max', lastName: 'Cool' }


let arr = [12, 2, 40]
let arr2 = arr.map( (item) => {
    return item * 2
})

arr2.push(10)
// console.log(arr)    // [ 12, 2, 40 ]
// console.log(arr2)   // [ 24, 4, 80, 10 ]

// map - цикл, который перебирает наш массив

let arr3 = [12, 2, 40]
let arr4 = arr.map( (item) => {
    return [item, 'hello']
})

// console.log(arr4)   // [ [ 12, 'hello' ], [ 2, 'hello' ], [ 40, 'hello' ], 10 ]

let arrr2 = arr.filter( (item) => {
    return (
        item > 6
    )
})

// console.log(arrr2)    // [ 12, 40 ]

let arrr3 = arr.reduce( (item) => {
    return (
        item > 6
    )
})

// console.log(arrr2)    // [ 12, 40 ]


let summ = arr.reduce((curent_sum, item) => {
    return curent_sum + item
},
)
let max = arr.reduce((current_max, item) =>{
    if (item > current_max){
        return item
    }
    else {
        return current_max
    }
})

// console.log(arr)
// console.log(summ)
// console.log(max)

const arrr1 = [4, 9, 0, 1]

arrr1.sort((a, b) => a - b)
// console.log(arrr1)


function sort_arr(arr) {
    for (let i = 0; i<arr.length; i++) {
        for (let j = 0; j<arr.length ; j++ ){
            if (arr[j] > arr[j+1]){
                let t = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = t}
        }
    }
    return arr   
}


function my_function(n) {
    if (n == 1) return 1
    // Дано натуральное число n. Напишите рекурсивную функцию, которая   возвращает строку чисел от 1 до n, разделенных пробелом.
    return my_function(n-1) + " " + n.toString()
}
// console.log(my_function(8))



let show_elems = function () {
    let arr = [1, 2, 3]
    let i = 0
    while (i<arr.length) {
        console.log(arr[i])
        i++
    }
}

// let timeout = setTimeout(show_elems, 5000)

let show_text = function () {
    let text = 'text'
    console.log()
}

// let interval = setInterval(show_text, 5000)


