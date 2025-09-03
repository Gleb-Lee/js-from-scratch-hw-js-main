// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let number1 = 3
let number2 = 67
let number3 = 578



function findLargest() {
    let largestNum = Math.max(number1, number2, number3)
    console.log(largestNum)
    return largestNum
}

findLargest()