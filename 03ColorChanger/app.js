

let canvas = document.getElementById("canvas")
let btn = document.getElementById("button");

btn.addEventListener("click",function(e){
     let str = "0123456789ABCDEF";
     let code = ""
     for(let i=0;i<6;i++){
        code = code + str[Math.floor(Math.random()*16)]
     }
     let hexcode = '#'+code;
      
     canvas.style.backgroundColor = hexcode;
})

