// Программа, которая приветствует пользователя и выводит текущее время

// Функция для получения текущего времени в формате "часы:минуты:секунды"
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Функция для приветствия пользователя
function greetUser(name) {
    return `Привет, ${name}!`;
}

// Получаем имя пользователя
const userName = prompt("Введите ваше имя:");

// Приветствуем пользователя и выводим текущее время
if (userName) {
    const greeting = greetUser(userName);
    const currentTime = getCurrentTime();
    alert(`${greeting}\nТекущее время: ${currentTime}`);
} else {
    alert("Пользователь не ввел имя. Программа завершена.");
}
