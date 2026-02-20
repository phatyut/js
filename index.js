<<<<<<< HEAD
const cars = [];

function renderCars() {
    let text = '';
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("one").innerHTML = text;
}

// Initial render
renderCars();

function seedata() {
    const input = document.getElementById("userinput");
    const newItem = input.value
    if (newItem) {
        cars.push(newItem);
        renderCars();  
        input.value = "";
    }
}

document.getElementById("additems").addEventListener("click", seedata);




let  personname =["nary","yut","check","titi","dara"];
let toshow= "";
let i = 0 ;
while(i<personname.length){
    toshow += personname[i] + "</br>";
    i++;
}
document.getElementById("showresult").innerHTML= toshow;

=======
const number = mulArgument(12,23,34,45,56,67,12,23,34,45,56,67);
document.getElementById("check").innerHTML=  number;

function mulArgument(){
    let start = 0 ;
    for(let i  = 0 ; i < arguments.length ; i++){
        start += arguments[i];
    }
    return start;
}

const result = function(a,b){
    return  a+ b;

}
console.log(result(12,23));
>>>>>>> e5d965209ca585a8f5016c905cd0020e677816c9
