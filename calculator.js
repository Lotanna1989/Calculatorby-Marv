
let op = false;
function setValue(val, type='number') {
    
    if(type === 'number')
    {
        document.querySelector('.inp').value+=val;
        op=false;
    }

    if (type === 'operator' && op===false)
    {
        document.querySelector('.inp').value+=val;
        op=true;

    }
    
    // document.querySelector('.inp').value=val;
    // document.querySelector('.inp').value+=val;
   
}

function calculate() {
    var data=document.querySelector(".inp").value;
   let answer = eval(data);
   document.querySelector('.inp').value= answer;

}


function clearAll() {

    document.querySelector(".inp").value = "";
    
}
// let answer = eval(data); test this line on your console were u put calculations in the bracket and console do d job

function backspace() {
    let data = document.querySelector('.inp').value;
    let newdata = data.substring(0,data.length - 1);
    document.querySelector('.inp').value = newdata; 
    op=false;
}

function squareRoot() {
    let data = document.querySelector('.inp').value;
    let answer = Math.sqrt(Number(data));
    document.querySelector('.inp').value = answer
}