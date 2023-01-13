let count = 0;
console.log(count)
let countEl = document.getElementById('num')
document.getElementById('num').innerText = count

var myAge = 18;
console.log(myAge)

function increment(){
    count = count+1
    console.log(count)
    document.getElementById('num').innerText = count
    // return count
}

function decrement(){
    if (count == 0) {
        return
    }else{
        count = count-1
        console.log(count)
        document.getElementById('num').innerText = count
    }
}

function reset(){
    count = 0;
    document.getElementById('num').innerText = count;
}

let saveEl = document.getElementById('save-el')

function save(){
    console.log("Save kiya gya!");
    let totalCount = count + ' - ';
    saveEl.textContent += totalCount;
    console.log(totalCount)
    count = 0;
    countEl.textContent = count;
}
