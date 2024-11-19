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

// const links = document.querySelector("div");

// links.addEventListener("mouseover", addTitle) 

// function addTitle (event) {
//    if (event.target.nodeName !== "A") {
//       return;
//    }
//    event.target.title = event.target.textContent;
// }



/*
   Восьме завдання 
   Дані span. По першому натисканні на кожен span він фарбується червоним фоном, 
   по другому фарбується назад і так далі кожен клік відбувається чергування фону. 
   Зробіть так, щоб було дві функції: одна фарбує в червоний колір, 
   інша в зелений і вони змінювали одна одну через removeEventListener.     
      <span>1</span>
      <span>2</span>
      <span>3</span>
*/

// const spanEl = document.querySelectorAll("span");
// spanEl.forEach((elem) => {   
//    elem.addEventListener("click", paintOverRed);  
// });
// function paintOverRed(event) {      
//    event.target.style.background = "red";    
//    event.target.removeEventListener("click", paintOverRed);             
//    event.target.addEventListener("click", paintOverGreen);   
// }
// function paintOverGreen(event) {   
//    event.target.style.background = "green";   
//    event.target.removeEventListener("click", paintOverGreen);             
//    event.target.addEventListener("click", paintOverRed);   
// }

/*Дев'яте завдання 

  Даний ol, у ньому декілька li. Під ol зробіть кнопку, 
  за натисканням на яку до кінця ul буде додаватися новий li з текстом 'пункт'. 
  Зробіть так, щоб при натисканні на кожен li, йому в кінець додавався '!'. 
  Це мусить працювати і для знову доданих li. 
  Завдання вирішіть за допомогою делегування (тобто подія має бути навішана на ol).  -->
    <!--     
      <ol id="ol">
        <li>пункт</li>
        <li>пункт</li>
        <li>пункт</li>
      </ol>
      
      <button id="btn">Додати li</button> -->
 */

// const btnEl = document.querySelector(`#btn`);
// const listEl = document.querySelector(`#ol`);

// btnEl.addEventListener(`click`, addItem);
// listEl.addEventListener(`click`, UpdateTextItem);

// function addItem() {
//    const itemEl = document.createElement("li"); 
//    itemEl.textContent = "пункт";
//    listEl.appendChild(itemEl);
// }

// function UpdateTextItem(evt) {
//    evt.target.textContent += `!`;
// }


/**
 * <!-- Десяте завдання  
    Реалізуйте поведінку поведінку кнопок натискання на них 
      (одна з них блокує інпут за допомогою атрибута disabled, а інша розблокує) -->
    <!-- <button class="lock">Заблокувати</button>
      <button class="unlock">Розблокувати</button>
      <input type="text" id="input">     -->
 */

// const btnLockEl = document.querySelector(`.lock`);
// const btnUnlockEl = document.querySelector(`.unlock`);
// const inputEl = document.querySelector(`#input`);

// btnLockEl.addEventListener(`click`, inputDisable);
// btnUnlockEl.addEventListener(`click`, inputEnable);

// function inputDisable() {
//    inputEl.disabled = "disabled";
// }

// function inputEnable() {
//    inputEl.disabled = "";
// }


/**
 * <!-- Одинадцяте завдання 
    В інпути вводимо число, при натисканні на кнопку у span із id = "result" 
    виводимо результат додавання двох чисел.  -->

    <!-- <input type="text" value="" id="input1">
	+
	<input type="text" value="" id="input2">
	=
	<span id = "result">?</span>
	<br>
	<br>
	<button id="btn">Введіть, що додати</button> -->   
 */

// const inputOneEl = document.querySelector(`#input1`);
// const inputTwoEl = document.querySelector(`#input2`);
// const resEl = document.querySelector(`#result`);
// const btnEl = document.querySelector(`#btn`);

// btnEl.addEventListener(`click`, sum);

// function sum() {      
//    resEl.textContent = (+inputOneEl.value + +inputTwoEl.value);
// }
   

/**
 * <!-- Дванадцяте завдання 
    
    Додайте всім інпутам наступну подію - втрата фокусу кожен інпут виводить
    своє value в абзац з id="test".  -->

    <!-- <input type="text" value="1">
    <input type="text" value="2">
    <input type="text" value="3">
    <p id="test"></p> -->
 */
// const textEl = document.querySelector(`#test`);
// const inputList = document.querySelectorAll(`input`);
// inputList.forEach(evt => evt.addEventListener(`blur`, updateTextContentTest));

// function updateTextContentTest(evt) {
//    textEl.textContent += evt.target.value;
// }


/**
 * <!-- Тринадцяте завдання 
    У інпут вводимо літеру або число. У span із id="show" виводимо код клавіші, яку натиснули -->
    <!-- 
  <input placeholder="Введіть текст">
	<br><br>
	<div>Код клавіші, яку натиснули: <span id="show">?</span></div> -->
 */
// const showEl = document.querySelector(`#show`);
// const inputEl = document.querySelector(`input`);

// inputEl.addEventListener(`keypress`, ShowKeyPress);

// function ShowKeyPress(e) {
//    showEl.textContent = `${e.type} key=${e.key} code=${e.code} ${e.shiftKey ? ' shiftKey' : ''} ${e.ctrlKey ? ' ctrlKey' : ''} ${e.altKey ? ' altKey' : ''} ${e.metaKey ? ' metaKey' : ''} ${e.repeat ? ' (repeat)' : ''}`;
// }



/**
 * <!-- Чотирнадцяте завдання 
    У інпут вводимо літеру або число. У span із id="show" виводимо значення клавіші, яку натиснули
    (наприклад, натиснули t і має отримати у span літеру t) -->

    <!-- <input on placeholder="Введіть текст">
      <br><br>
      <div>Наатиснуто клавішу: <span id="show">?</span></div> -->
 */

// const inputEl = document.querySelector(`input`);
// const showEl = document.querySelector(`#show`);

// inputEl.addEventListener(`keypress`, showKey);

// function showKey(e) {
//    showEl.textContent = e.key;
// }