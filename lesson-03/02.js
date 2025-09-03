// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

let number1 = 881


function isEven() {
    let parity
    if(number1 %2 !== 0){
        parity = false
    } else {
        parity = true
    }
    console.log(parity)
    return parity
}

isEven()
