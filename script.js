// function on click me button --------------------

let a = Math.floor(Math.random() * 101);
console.log(a);


let score = 0;


// function on input button ------------------------

function runcode() {
    let input = document.getElementById("input");
    let output = document.getElementById("para");

    score++



    if (input.value > a) {
        output.innerHTML = "your number is bigger";
        if(input.value > 100){
            output.innerHTML = "wrong input";
        }
            
        }
    else if (input.value < a) {
        output.innerHTML = "your number is smaller";
        console.log(input.value)
        if(input.value < 0){
            output.innerHTML = "wrong input";
        }
    }
    else if (input.value == a) {
        console.log("yes you have done")
        output.innerHTML = "yes you have done " + " No of tries:" + score;
    }
   
    else{
        output.innerHTML = "Error";
    }

}