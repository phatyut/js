const person ={
    name:"love",
    age:12,
    gender:"male",
    fullperson:()=>  (person.name + person.age + person.gender).toUpperCase()
}
console.log(person.fullperson())


// by use for loop
const animal ={
    names:'cat',
    gender:'female',
    eat:"rice"
};
let showtext = ''
for(let show in animal){
    showtext +=animal[show];
}
console.log(showtext)
// by use Object.values()
const pc={
    name:'dell',
    price:1000,
    model:'0021'
}

let check = Object.values(pc);
let checkall=check.toString();
console.log(checkall);




const classname={
    studentname:'yut',
    studentage:12,
    position:'it'
}
let showclass='';
for(let [one,two] of Object.entries(classname)){
    showclass+=one +two;
}
console.log(showclass);
let json = JSON.stringify(classname);
console.log(json)
// person.name="I love you";
// person.faverit="love so much"
// console.log(person.faverit)
// person.hand=5
// let checkperson=("hand" in person)
// console.log(checkperson)



function Animals (names,ages,gender,sound){
    this.animalnames= names;
    this.animalages=  ages;
    this.animalgender= gender;
    this.animalsound= sound;
    this.callAnimal= ()=>{
        return this.animalnames +'_'+this.animalages+'_'+this.animalgender+'_'+this.animalsound
    }
}
const cat = new Animals('Cat',12,'male','meuv');
const dog = new Animals ("Dog",100,'female','haha')
      dog.color='red';
dog.changename=function(name){
    this.animalnames=name
}
dog.changename('dog kiki');
dog.newsound = function(checksound){
    this.animalsound = checksound
}
dog.newsound("fooz fooz!")
console.log(dog.newsound );
console.log(dog.changename );
console.log(dog.color);
console.log(cat.callAnimal());
console.log(dog.callAnimal());