 let input = document.getElementById("input")
 let btn = document.getElementById("submit")
 let qrcode = document.getElementById("qrcode")

function generateQR(){
    clear()
    let data = input.value;
    if(data.trim()==''){
         setTimeout(()=>{
            alert("Enter Valid data To generate QR")
         },2000)
    }
     //This library exposes a class named QRCode to us and the constructor expects two parameters as follows:new QRCode(Target,Options); 
    else{
        let qr = new QRCode("qrcode",{  
            text: data,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            // correctLevel: QRCode.CorrectLevel.H,
          })
           
    }
     
}
function clear(){
    qrcode.innerHTML = "";
}
 btn.addEventListener("click",generateQR)