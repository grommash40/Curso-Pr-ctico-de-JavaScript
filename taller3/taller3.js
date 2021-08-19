const arrayNumbers = [9,8,5,6,1,4,7,5,3,6,4,5,6,9,4,5,4,5,6];
function ordenar(array) {
    array = array.sort(
        function (a,b) {
        return a - b;
        }
    ); 
}
let elementArray = [];
let countArray = [1];
let counter = 0;
let pos = 0;

function moda(array){
    elementArray.push(array[0]);
    for(let i=0;i<array.length-1;i++){
        if (array[i] == array[i+1]) {
            countArray[counter] += 1;
        } else {
            counter += 1;
            countArray.push(1);
            elementArray.push(array[i+1]);
        }
    }

    let max=0;
    for(let i=0;i<countArray.length-1;i++){
        if(max<=countArray[i]) {
            max = countArray[i];
            pos = i;
        }
    }
    let moda = elementArray[pos];
    return moda;
}