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

