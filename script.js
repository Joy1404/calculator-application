let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        appear(value);
    });
});

let evaluate = document.querySelector('.result');
    evaluate.addEventListener('click', result);


let clear = document.querySelector('.clear');
    clear.addEventListener('click', clearDisplay);


let backspace = document.querySelector(".backspace");
    backspace.addEventListener('click', lastCharacter);


function appear(value) {
    let display = document.getElementById('display');
    let lastCharacter = display.value.slice(-1);
    let operators = ["+", "-", "*", "/", "%"];
    if (operators.includes(lastCharacter) && operators.includes(value)) {
        return;
    }
    display.value += value;
}

function result() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression!');
        display.value = '';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function lastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}






// function appear(value) {
//     let display = document.getElementById('display');
//     let lastCharacter = display.value.slice(-1);
//     let operators=["+", "-", "*",  "/", "%" ];
//     if(operators.includes(lastCharacter) && operators.includes(value)){
//         return;
//     }
//     display.value += value;
// }
// function result(){
//     const display =document.getElementById('display');
//     try{
//         const result = display.value;
//         display.value = eval(result);
//     }
//     catch(e){
//         alert('Invalid expression!');
//         display.value = '';
//     }
// }

// function clearDisplay(){
//     const display = document.getElementById('display');
//     display.value = '';
// }
// function lastCharacter(){
//     const display = document.getElementById('display');
//     const value = display.value;
//     if(value.length > 0){
//         display.value = value.slice(0, -1);
//     }
// }