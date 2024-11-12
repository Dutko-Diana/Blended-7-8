//index


// task-1

// const btn = document.querySelector('button');
// const input = document.querySelector('#input');

// btn.addEventListener('click', () => {
//     input.value = 'Bye!';
// })

// task-2

// const btn = document.querySelector('button');
// const input = document.querySelector('#input');

// btn.addEventListener('click', handlerClick);

// function handlerClick() {
//     alert(input.value);
// }


// task-3     <!-- Третє завдання 
    // При кліку на кнопку інпути обмінюються значеннями  -->

// const btn = document.querySelector("#js-btn")
// const firstInput = document.querySelector("#first-input")
// const secondInput = document.querySelector("#second-input")

// btn.addEventListener("click",handleClick)

// function handleClick(){
// const newInput = firstInput.value;
// firstInput.value = secondInput.value;
// secondInput.value = newInput;
// [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value]
// }

// task-4  При кліку на кнопку текст параграфів змінюється на їх порядковий номер -->


// const btn = document.querySelector("button")
// const paragraphs = document.querySelectorAll("p")

// btn.addEventListener("click", changeTextContent);

// function changeTextContent(){
//   paragraphs.forEach((item, index) =>{
//     item.textContent = index + 1;
//   })
// }


/**
 * П'яте завдання 
 * Вводимо число у input із id="test" число. 
   При кліку на кнопку у input із id = "result" повинен виводити квадрта цього числа
   Якщо ввели не число, показувати alert із текстом "Ввели не число" -->

    <input type="text" value="" placeholder="Введіть число" id="test" />
    <input id="result" value="Результат" disabled />
    <button>Click me</button>
 */

// const inputTest = document.querySelector("#test");
// const inputResult = document.querySelector("#result");
// const btn = document.querySelector("button");

// btn.addEventListener("click", squareNumber);

// function squareNumber() {
//     if (isNaN(inputTest.value)) {
//         alert(`Ввели не число: ${inputTest.value}`);
//         return;
//     }    
//     inputResult.value = inputTest.value ** 2;            
// }

/**
 * Шосте завдання 
 *   Напишіть інтерфейс, щоб створити список.
    Для кожного пункту:
    Запитуйте вміст у користувача за допомогою prompt. Створюйте пункт і додайте його до UL.
    Процес припиняється, коли користувач натискає ESC.
    Усі елементи мають створюватися динамічно. -->

    <!-- <h1>Створення списку</h1> -->
 */

// const title = document.querySelector("h1");

// let userInput = prompt("Напишіть пункт, який добавити в список");
// const list = document.createElement("ul");
// do {
//     if (userInput&&userInput.trim()!=="") {
//         const item = document.createElement("li");
//         item.textContent = userInput;
//         list.appendChild(item);
//     }
//     userInput = prompt("Напишіть новий пункт");
// } while (userInput);
// title.appendChild(list);


// task-7

// <!-- Сьоме завдання
//     Додайте усім посиланням подію - за наведенням на посилання в атрибут title запишеться її текст -->

//     <!-- <a href="#" title="">Перше посилання</a>
//     <a href="#" title="">Друге посилання</a>
//     <a href="#" title="">Третє посилання</a> -->

const links = document.querySelector("div");

links.addEventListener("mouseover", addTitle) 

function addTitle (event) {
   if (event.target.nodeName !== "A") {
      return;
   }
   event.target.title = event.target.textContent;
}