const output = document.querySelector('#output');
const smlOutput = document.querySelector('#small-output');
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
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const times = document.querySelector('#times');
const divides = document.querySelector('#divide');
const power_of = document.querySelector('#power');
const equals = document.querySelector('#equals');

let memory;
let clearPrompt = false;
let plusPrompt = false;
let smlOutputArray;
let operator;

equals.addEventListener('click', () => {
    smlOutputArray = smlOutput.textContent.split('');
    if (smlOutputArray.includes('+')) {
        output.textContent = (smlOutput.textContent) ? add(Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2)), Number(output.textContent)) : add(Number(memory), Number(output.textContent));
        smlOutput.textContent = ``;
        clearPrompt = true;
    } else if (smlOutputArray.includes('*')) {
        output.textContent = (smlOutput.textContent) ? multiply(Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2)), Number(output.textContent)) : multiply(Number(memory), Number(output.textContent));
        smlOutput.textContent = ``;
        clearPrompt = true;
    } else if (smlOutputArray.includes('/')) {
        output.textContent = (smlOutput.textContent) ? divide(Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2)), Number(output.textContent)) : divide(Number(memory), Number(output.textContent));
        smlOutput.textContent = ``;
        clearPrompt = true;
    } else if (smlOutputArray.includes('^')) {
        output.textContent = (smlOutput.textContent) ? power(Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2)), Number(output.textContent)) : power(Number(memory), Number(output.textContent));
        smlOutput.textContent = ``;
        clearPrompt = true;
    } else if (smlOutputArray.includes('-')) {
        output.textContent = (smlOutput.textContent) ? subtract(Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2)), Number(output.textContent)) : subtract(Number(memory), Number(output.textContent));
        smlOutput.textContent = ``;
        clearPrompt = true;
    } 
});
equals.addEventListener('mouseover', () => {
    equals.style.background = 'black';
    equals.style.opacity = '0.2'
});
equals.addEventListener('mouseout', () => equals.style.opacity = '0');

plus.addEventListener('click', () => {
    smlOutputArray = smlOutput.textContent.split('');
    operator = "+";
    if (smlOutputArray.includes('*')) {
        complexTimes();
    } else if (smlOutputArray.includes('/')) {
        complexDivide();
    } else if (smlOutputArray.includes('^')) {
        complexPower();
    } else if (smlOutputArray.includes('-')) {
        complexMinus();
    } else {
        memory = output.textContent;
        output.textContent = ``;
        smlOutput.textContent = `${Number(memory)+Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2))} + `;
    };
});
plus.addEventListener('mouseover', () => plus.style.opacity = '0.1');
plus.addEventListener('mouseout', () => plus.style.opacity = '0');

minus.addEventListener('click', () => {
    smlOutputArray = smlOutput.textContent.split('');
    operator = "-";
    if (smlOutputArray.includes('+')) {
        complexAdd();
    } else if (smlOutputArray.includes('*')) {
        complexTimes();
    } else if (smlOutputArray.includes('/')) {
        complexDivide();
    } else if (smlOutputArray.includes('^')) {
        complexPower();
    } else {
        memory = output.textContent;
        output.textContent = ``;
        smlOutput.textContent = (smlOutput.textContent == '') ? `${Number(memory)} - ` : `${Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2))-Number(memory)} - `;
    };
});
minus.addEventListener('mouseover', () => minus.style.opacity = '0.1');
minus.addEventListener('mouseout', () => minus.style.opacity = '0');

times.addEventListener('click', () => {
    smlOutputArray = smlOutput.textContent.split('');
    operator = "*";
    if (smlOutputArray.includes('+')) {
        complexAdd();
    } else if (smlOutputArray.includes('/')) {
        complexDivide();
    } else if (smlOutputArray.includes('^')) {
        complexPower();
    } else if (smlOutputArray.includes('-')) {
        complexMinus();
    } else {
        memory = output.textContent;
        output.textContent = ``;
        smlOutput.textContent = (smlOutput.textContent == '') ? `${Number(memory)} * ` : `${Number(memory)*Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2))} * `;
    };
});
times.addEventListener('mouseover', () => times.style.opacity = '0.1');
times.addEventListener('mouseout', () => times.style.opacity = '0');

divides.addEventListener('click', () => {
    smlOutputArray = smlOutput.textContent.split('');
    operator = "/";
    if (smlOutputArray.includes('+')) {
        complexAdd();
    } else if (smlOutputArray.includes('*')) {
        complexTimes();
    } else if (smlOutputArray.includes('^')) {
        complexPower();
    } else if (smlOutputArray.includes('-')) {
        complexMinus();
    } else {
        memory = output.textContent;
        output.textContent = ``;
        smlOutput.textContent = (smlOutput.textContent == '') ? `${Number(memory)} / ` : `${Number(memory)/Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2))} / `;
    };
});
divides.addEventListener('mouseover', () => divides.style.opacity = '0.1');
divides.addEventListener('mouseout', () => divides.style.opacity = '0');

power_of.addEventListener('click', () => {
    smlOutputArray = smlOutput.textContent.split('');
    operator = "^";
    if (smlOutputArray.includes('+')) {
        complexAdd();
    } else if (smlOutputArray.includes('*')) {
        complexTimes();
    } else if (smlOutputArray.includes('/')) {
        complexDivide();
    } else if (smlOutputArray.includes('-')) {
        complexMinus();
    } else {
        memory = output.textContent;
        output.textContent = ``;
        smlOutput.textContent = (smlOutput.textContent == '') ? `${Number(memory)} ^ ` : `${Number(memory)/Number(smlOutput.textContent.slice(0, smlOutput.textContent.length-2))} ^ `;
    };
});
power_of.addEventListener('mouseover', () => power_of.style.opacity = '0.1');
power_of.addEventListener('mouseout', () => power_of.style.opacity = '0');

AC.addEventListener('click', () => {
    output.textContent = `0`;
    smlOutput.textContent = ``;
    clearPrompt = false;
});
AC.addEventListener('mouseover', () => AC.style.opacity = '0.1');
AC.addEventListener('mouseout', () => AC.style.opacity = '0');

nine.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `9`: output.textContent = `${output.textContent}9`;
    clearPrompt = false;
});

nine.addEventListener('mouseover', () => nine.style.opacity = '0.1');
nine.addEventListener('mouseout', () => nine.style.opacity = '0');

eight.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `8`: output.textContent = `${output.textContent}8`;
    clearPrompt = false;
});
eight.addEventListener('mouseover', () => eight.style.opacity = '0.1');
eight.addEventListener('mouseout', () => eight.style.opacity = '0');

seven.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `7`: output.textContent = `${output.textContent}7`;
    clearPrompt = false;
});
seven.addEventListener('mouseover', () => seven.style.opacity = '0.1');
seven.addEventListener('mouseout', () => seven.style.opacity = '0');

six.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `6`: output.textContent = `${output.textContent}6`;
    clearPrompt = false;
});
six.addEventListener('mouseover', () => six.style.opacity = '0.1');
six.addEventListener('mouseout', () => six.style.opacity = '0');

five.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `5`: output.textContent = `${output.textContent}5`;
    clearPrompt = false;
});
five.addEventListener('mouseover', () => five.style.opacity = '0.1');
five.addEventListener('mouseout', () => five.style.opacity = '0');

four.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `4`: output.textContent = `${output.textContent}4`;
    clearPrompt = false;
});
four.addEventListener('mouseover', () => four.style.opacity = '0.1');
four.addEventListener('mouseout', () => four.style.opacity = '0');

three.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `3`: output.textContent = `${output.textContent}3`;
    clearPrompt = false;
});
three.addEventListener('mouseover', () => three.style.opacity = '0.1');
three.addEventListener('mouseout', () => three.style.opacity = '0');

two.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `2`: output.textContent = `${output.textContent}2`;
    clearPrompt = false;
});
two.addEventListener('mouseover', () => two.style.opacity = '0.1');
two.addEventListener('mouseout', () => two.style.opacity = '0');

one.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `1`: output.textContent = `${output.textContent}1`;
    clearPrompt = false;
});
one.addEventListener('mouseover', () => one.style.opacity = '0.1');
one.addEventListener('mouseout', () => one.style.opacity = '0');

zero.addEventListener('click', () => {
    (output.textContent == '0' || clearPrompt) ? output.textContent = `0`: output.textContent = `${output.textContent}0`;
    clearPrompt = false;
});
zero.addEventListener('mouseover', () => zero.style.opacity = '0.1');
zero.addEventListener('mouseout', () => zero.style.opacity = '0');

point.addEventListener('click', () => output.textContent = `${output.textContent}.`;
point.addEventListener('mouseover', () => point.style.opacity = '0.1');
point.addEventListener('mouseout', () => point.style.opacity = '0');




const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const divide = function (a, b) {
    return a / b;
};

const multiply = function (a, b) {
    return a * b;
};

const power = function (a, b) {
    let answer = a;
    for (i = 1; i < b; i++) {
        answer *= a;
    }
    return answer;
};

const factorial = function () {

};


function complexAdd() {
    smlOutput.textContent = `${add( Number(smlOutput.textContent.slice(0,smlOutput.textContent.length-2)), Number(output.textContent))} ${operator} `;
    output.textContent = ``;
    memory = smlOutput.textContent;
    clearPrompt = true;
}


function complexMinus() {
    smlOutput.textContent = `${subtract( Number(smlOutput.textContent.slice(0,smlOutput.textContent.length-2)), Number(output.textContent))} ${operator} `;
    output.textContent = ``;
    memory = smlOutput.textContent;
    clearPrompt = true;
}

function complexDivide() {
    smlOutput.textContent = `${divide( Number(smlOutput.textContent.slice(0,smlOutput.textContent.length-2)), Number(output.textContent))} ${operator} `;
    output.textContent = ``;
    memory = smlOutput.textContent;
    clearPrompt = true;
}

function complexPower() {
    smlOutput.textContent = `${power( Number(smlOutput.textContent.slice(0,smlOutput.textContent.length-2)), Number(output.textContent))} ${operator} `;
    output.textContent = ``;
    memory = smlOutput.textContent;
    clearPrompt = true;
}

function complexTimes() {
    smlOutput.textContent = `${multiply( Number(smlOutput.textContent.slice(0,smlOutput.textContent.length-2)), Number(output.textContent))} ${operator} `;
    output.textContent = ``;
    memory = smlOutput.textContent;
    clearPrompt = true;
}
