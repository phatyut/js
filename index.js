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