let header = `Create by js`
let showheader = `<h2>${header}</h2><ol>`;
const arraylist = ["arrOne","arrTwo","arrther"];
for(let one = 0 ; one < arraylist.length;one++){
    showheader+= `<li>${arraylist[one]}</h2>`;
}
showheader += `</ol>`;
document.getElementById("one").innerHTML= showheader;



// let love = document.getElementById("love");
// let checklove = love.getElementsByTagName("p");
// document.getElementById("showlove").innerHTML= checklove[2].innerHTML;



// let classlove = document.getElementsByClassName("love");
// document.getElementById("showlove").innerHTML=classlove[0].innerHTML +"love";




// let getloveclass= document.querySelector(".love");
// document.getElementById("showlove").innerHTML = getloveclass.innerHTML;

let num = 12345;
let binary = num.toString(2); 
console.log(binary); 


let one = 10000;
let two = 20000;


function countall (...numcheck){
    let checkme = 0 ;
    for(let check of numcheck){
        checkme +=check
    }
    return checkme;
}
alert(countall(12,12,12,12,12,12))