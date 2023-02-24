
// selecting elements

let convert = document.querySelector("#convert-btn");  
let input = document.querySelector("input");
let camelCase = document.querySelector("#camel-case")
let pascalCase = document.querySelector('#pascal-case');
let snakeCase = document.querySelector("#snake-case")
let screamingSnakeCase = document.querySelector("#screaming-snake-case")
let kebabCase = document.querySelector("#kebab-case");
let screamingKebabCase = document.querySelector("#screaming-kebab-case");

 
// function to convert in camelcase
function changeCamelCase(text){
   let str = text.toLowerCase();
    
   return str.split(" ").reduce((acc,curr)=>
   acc+(curr.charAt(0).toUpperCase()+curr.slice(1))

   )
}

// function to convert in pascalcase

function changePascalCase(text){
    let str = text.toLowerCase();
    let arr = str.split(" ");
    let res = arr.map((e)=>e.charAt(0).toUpperCase()+e.slice(1))
    let sum = " ";
    for(let i=0;i<res.length;i++){
        sum = sum + res[i];
    }
    return sum;

}

// function to convert in snakecase

function changeSnakeCase(text){
    let str = text.toLowerCase();
    let arr = str.split(" ");
    return arr.join("_")


}

// function to convert in screamingsnakecase

function changeScreamingSnakeCase(text){
    return text.toUpperCase().split(" ").join("_")
}

// function to convert in kebabcase


function changeKebabCase(text){
    return text.toLowerCase().split(" ").join("-")
}

// function to convert in screamingkebabcase


function changeScreamingKebabCase(text){
    return text.toUpperCase().split(" ").join("-")
}


// function to convert

function changeCases(){
 let value = input.value;
//  console.log(value);
camelCase.innerHTML = changeCamelCase(value);
pascalCase.innerHTML = changePascalCase(value);
snakeCase.innerHTML = changeSnakeCase(value);
screamingSnakeCase.innerHTML = changeScreamingSnakeCase(value);
kebabCase.innerHTML = changeKebabCase(value);
screamingKebabCase.innerHTML = changeScreamingKebabCase(value)

}

// adding event listner 

convert.addEventListener("click",changeCases);