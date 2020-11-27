let expression = '';
let num = new Array();
let op = '';
let result = 0;
let isCalculated = false;

const saveValue = e => {
    const numTemp = e.target;
    const val = numTemp.getAttribute('data-num');

    if (val === '=') {
        calculateResult();
        expression = expression + ' ' + val;
    } else if (val === '1' || val === '2' || val === '3' || val === '4' || val === '5' || val === '6' || val === '7' || val === '8' || val === '9' || val === '0') {
        num.push(parseInt(val));
        expression = expression + ' ' + val;
    } else if (val === 'c') {
        result = 0;
        expression = '';
        num = new Array();
        op = '';
        isCalculated = false;
    } else {
        op = val;
        expression = expression + ' ' + val;
    }


    document.querySelector('.output').innerHTML = expression;

    if (isCalculated) {
        expression = expression + ' ' + result;
        document.querySelector('.output').innerHTML = expression;
    }
}

const calculateResult = _ => {
    isCalculated = true;

    switch (op) {
        case '+':
            result = num[0] + num[1];
            break;
        case '-':
            result = num[0] - num[1];
            break;
        case '*':
            result = num[0] * num[1];
            break;
        case '/':
            result = num[0] / num[1];
            break;
        default:
            break;
    }

    console.log(result);
}

window.addEventListener('load', () => {
    document.querySelectorAll('.btn').forEach(obj => {
        obj.addEventListener('click', saveValue)
    })
})