 
// selecting elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// creating object to call random functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// adding event listner to copy button
clipboardEl.addEventListener('click', () => {
     
    alert("Copied the text: " +  resultEl.innerText);

})

// adding evevnt listener to generate password
generateEl.addEventListener('click', () => {
     
    //checking input checked or not
    let length = Number(lengthEl.value);
    // console.log(number);
    let upper = uppercaseEl.checked;
    let lower = lowercaseEl.checked;
    let number = numbersEl.checked;
    let symbol = symbolsEl.checked;

    resultEl.innerHTML = generatePassword(lower, upper, number, symbol, length)

    
})

// function to generate password
function generatePassword(lower, upper, number, symbol, length) {
    
    let checkedlength = lower + upper + number + symbol ;   //counting how many are checked automatic type coercion
    let password = "";
    // console.log(lower);
     

    // filter out objects which are checked
    let arr = [{lower : lower},{upper : upper},{number : number}, {symbol : symbol}].filter((e)=>{
        if(Object.values(e)[0]==true){
            return e;
        }
    })
     if(checkedlength===0){
        return "";
     }

     
     for(let i=0;i<length;i=i+checkedlength){
        arr.forEach(e=>{
            let name = Object.keys(e)[0];
            password += randomFunc[name]();
        })
     }
     
     let finalPassword = password.slice(0,length);
     return finalPassword;
}

//function to get random lower case
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

//function to get random upper case
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

//function to get randomnumber
function getRandomNumber() {
    return Math.random() * 10
}

//function to get randomsymbol
function getRandomSymbol() {
  let symbol = "#$%@!~^&*()*/-_"
  let val = Math.floor(Math.random()*symbol.length)
  return symbol[val]

}
 
 