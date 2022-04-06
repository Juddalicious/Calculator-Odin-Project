const output = document.querySelector('#output');
const nine = document.querySelector('#nine');
const eight = document.querySelector('#eight');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const AC = document.querySelector('#AC');
const plus = document.querySelector('#plus');

let memory = 0;

plus.addEventListener('click', () => {memory = output.textContent; output.textContent = `` });
plus.addEventListener('mouseover', () => plus.style.opacity = '0.1');
plus.addEventListener('mouseout', () => plus.style.opacity = '0');

console.log(memory.value)

AC.addEventListener('click', () => output.textContent = ``);
AC.addEventListener('mouseover', () => AC.style.opacity = '0.1');
AC.addEventListener('mouseout', () => AC.style.opacity = '0');

nine.addEventListener('click', () => output.textContent = `${output.textContent}9`);
nine.addEventListener('mouseover', () => nine.style.opacity = '0.1');
nine.addEventListener('mouseout', () => nine.style.opacity = '0');

eight.addEventListener('click', () => output.textContent = `${output.textContent}8`);
eight.addEventListener('mouseover', () => eight.style.opacity = '0.1');
eight.addEventListener('mouseout', () => eight.style.opacity = '0');

seven.addEventListener('click', () => output.textContent = `${output.textContent}7`);
seven.addEventListener('mouseover', () => seven.style.opacity = '0.1');
seven.addEventListener('mouseout', () => seven.style.opacity = '0');

six.addEventListener('click', () => output.textContent = `${output.textContent}6`);
six.addEventListener('mouseover', () => six.style.opacity = '0.1');
six.addEventListener('mouseout', () => six.style.opacity = '0');

five.addEventListener('click', () => output.textContent = `${output.textContent}5`);
five.addEventListener('mouseover', () => five.style.opacity = '0.1');
five.addEventListener('mouseout', () => five.style.opacity = '0');

four.addEventListener('click', () => output.textContent = `${output.textContent}4`);
four.addEventListener('mouseover', () => four.style.opacity = '0.1');
four.addEventListener('mouseout', () => four.style.opacity = '0');

three.addEventListener('click', () => output.textContent = `${output.textContent}3`);
three.addEventListener('mouseover', () => three.style.opacity = '0.1');
three.addEventListener('mouseout', () => three.style.opacity = '0');

two.addEventListener('click', () => output.textContent = `${output.textContent}2`);
two.addEventListener('mouseover', () => two.style.opacity = '0.1');
two.addEventListener('mouseout', () => two.style.opacity = '0');

one.addEventListener('click', () => output.textContent = `${output.textContent}1`);
one.addEventListener('mouseover', () => one.style.opacity = '0.1');
one.addEventListener('mouseout', () => one.style.opacity = '0');

zero.addEventListener('click', () => output.textContent = `${output.textContent}0`);
zero.addEventListener('mouseover', () => zero.style.opacity = '0.1');
zero.addEventListener('mouseout', () => zero.style.opacity = '0');

point.addEventListener('click', () => output.textContent = `${output.textContent}.`);
point.addEventListener('mouseover', () => point.style.opacity = '0.1');
point.addEventListener('mouseout', () => point.style.opacity = '0');




const add = function(a,b) {
return a + b;
};

const subtract = function(a,b) {
return a - b;
};

const sum = function() {

};

const multiply = function(a,b) {
return a * b;
};

const power = function(a,b) {
    let answer = a;
    for (i = 1; i < b ; i++) {
    answer *= a;
}
return answer;
};

const factorial = function() {

};