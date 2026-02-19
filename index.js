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


// let one = 100;
// let show = '';
// for(let i = 10 ; i < one ; i +=10){
//         show +=i+ "</br>";
// }

// document.getElementById("showresult").innerHTML= show



// let show = "";
// let one = 0;
// while(one < 1000){
//     show+=one+"</br>";
//     one++;
// }
// document.getElementById("showresult").innerHTML = show;



let show  ="";
let number = 0 ;
do{
    show += number ;
    number++;
}while(number < 1000);
document.getElementById("showresult").innerHTML = number;