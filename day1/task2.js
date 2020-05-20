
function reverseArray(array){
    console.log(array)
    let a = array.toString().split("").reverse()
    let result = a.join('').split(',').reverse()
    console.log(result)
}

reverseArray(['hell','high'])
