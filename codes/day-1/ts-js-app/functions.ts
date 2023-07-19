//function declaration
function add(a: number, b: number): number {
    return a + b
}
//function expression
const subtract = function (a: number, b: number): number {
    return a - b
}
//function expression with arrow function style
const multiply = (a: number, b: number): void => console.log(a * b)
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error('divisor can not be zero')
    } else if (a > b)
        return a / b
    else
        return b / a
}