// 1
let array = [2, 'a', 54, true, [7, 153], 'g', 'rt', 17];

function calculateAverage(array) {
    let sum = 0;
    let divider = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            divider++;
        }
    }
    return sum / divider;
}

console.log(calculateAverage(array));

//2
let x = Number(prompt('Enter x'));
let symbol = prompt('Enter math symbol');
let y = Number(prompt('Enter y'));

function doMath(x, symbol, y) {
    let result = 0;

    if (isNaN(x) || isNaN(y)) {
        result = 'x or(and) y is NaN'
    } else {
        switch (symbol) {
            case '+':
                result = x + y;
                break
            case '-':
                result = x - y;
                break
            case '*':
                result = x * y;
                break
            case '/':
                result = x / y;
                break
            case '%':
                result = x / y * 100;
                break
            case '^':
                result = x ** y;
                break
            default:
                result = 'Please enter one of the required symbols (+, -, *, /, %, ^)';
        }
    }

    return result;
}

console.log(doMath(x, symbol, y));

//3
function buildArrays() {
    let parentArrayLength = Number(prompt('Enter parent array length'));

    if (!isNaN(parentArrayLength)) {
        console.log('parentArrayLength: ' + parentArrayLength)
        let parentArray = [];

        for (let i = 0; i < parentArrayLength; i++) {
            let childArrayLength = Number(prompt('Enter child array length'));
            console.log('childArrayLength: ' + childArrayLength)

            if (!isNaN(childArrayLength)) {
                let childArray = [];

                for (let j = 0; j < childArrayLength; j++) {
                    let childArrayEl = prompt('Enter array element');
                    childArray.push(childArrayEl);
                }
                parentArray.push(childArray)

            } else {
               return 'Please enter child array length as a natural number';
            }
        }
        return parentArray;

    } else {
        return 'Please enter parent array length as a natural number';
    }
}

console.log(buildArrays());

//4
let stringArray = Array.from(prompt('Please enter your string'));
let symbolsArray = Array.from(prompt('Please enter your symbols to be deleted'));

function deleteSymbolsFromString(stringArray, symbolsArray) {
    stringArray = stringArray.filter((el) => !symbolsArray.includes(el))

    return stringArray.join('');
}

console.log(deleteSymbolsFromString(stringArray, symbolsArray))
