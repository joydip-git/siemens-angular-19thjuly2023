//data types
//string, number, boolean and object, undefined, NaN
var numValue: number = 12
var strValue: string = 'siemens'
var boolValue: boolean = false

//numValue = 'siemens'

var objValue = {
    //value properties
    name: 'joydip',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ', ' + this.salary
    }
}

function add(a: number, b: number): number {
    return a + b
}
const res = add(12, 13)
//res = 30
console.log(typeof numValue)
console.log(typeof strValue)
console.log(typeof boolValue)
console.log(typeof objValue)
console.log(typeof add)

var expo = numValue.toExponential(2)
console.log(expo)