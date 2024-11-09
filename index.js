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