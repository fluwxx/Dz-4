//дз 1
var array = ['name', 'John', 'lastname', 'BLack', 'age', '23']
var obj = {}

for (var i = 0; i < array.length; i++){
    var key = array[i]
    var value = array[i + 1]
    obj[key] = value
}

console.log(obj)
//дз 2
function average(...numbers) {
    if (numbers.length === 0){
        return 0
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    return  sum / numbers.length
}

console.log( average(2,4,5,9,5,99,7))

//дз 3
function checkType(input) {
    console.log(typeof input )
}

checkType(5)
checkType('hello')
checkType(true)
//дз 4

var counterInput =
    document.getElementById('counter')
var minus =
    document.getElementById('minus')
var plus =
    document.getElementById('plus')

function minusCounter(){
    var value = +counterInput.value
    counterInput.value = value + 1
}
function plusCounter(){
    var value = +counterInput.value
    counterInput.value = value - 1
}
minus.addEventListener('click', plusCounter)
plus.addEventListener('click', minusCounter)