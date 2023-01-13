console.log("Hello world!")
document.getElementById('count').innerText = 5;

let saveEl = document.getElementById('1st')

function countdown(){
    document.getElementById('count').innerText = "Start";
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log('GO');
}

countdown()

let dcLaps = document.getElementById('laps')

let lapsCompleted = 0
function incrementLap(){
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted)
    dcLaps.innerText = lapsCompleted;
    console.log('Hello' + lapsCompleted);
    return lapsCompleted;
    
}



function reset(){
    lapsCompleted = 0;
    dcLaps.innerText = lapsCompleted
    console.log(lapsCompleted + "Hey");
}



function save(){
    console.log('Saved!')
    let totalLaps = lapsCompleted + " - ";
    saveEl.textContent += totalLaps;
}
