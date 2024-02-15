// Функция для вычисления факториала числа
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Вычисляем факториал числа 5
let num = 5;
let result = factorial(num);

// Вывод результата
console.log(`Факториал числа ${num} равен ${result}`);
