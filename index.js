const display = document.getElementById("display");
countE = false;
countO = false;
countError = false;
countPoint = false;

function appendToDisplay(input){
    if(countE == false){
        display.value += input;
    }
    else{
        display.value = "";
        display.value += input;
        countE = false;
    }
}
function operator(input){
    countE = false;
    if(countO == false){
        countO = true;
        display.value += input;
    }

}

function clearDisplay(){
    display.value = "";
}

function calculate(input){
    countE = true;
    countO = false;
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        countError = true;
    }
}