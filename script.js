const btn=document.getElementById("btn");
const eye=document.getElementById("eye");
const parolInput=document.getElementById("parol-input");
const modmeInput=document.getElementById("modme-input");
const error=document.getElementById("error");


eye.addEventListener("click", ()=>{
    if(parolInput.type == "password"){
        parolInput.type = "text";
    } else {
        parolInput.type = "password";
    }
});


parolInput.addEventListener("input",()=>{
    if(modmeInput.value.length>4 && parolInput.value.length>3){
        btn.disabled=false;
        btn.style.backgroundColor="orangered"
    }else{
        btn.disabled=true;
        btn.style.backgroundColor="#f69e86"
    }
})


btn.addEventListener("click",()=>{
    if(parolInput.value=="1234" && modmeInput.value=="mars23"){
        let user={
            ism:"Qudratilla Abdullayev",
            coin:1200,
            guruh: "nf 2514"
        }
        localStorage.setItem("user",JSON.stringify(user))
    window.location="./profile.html"; 
    }else{
        error.style.display="block";x``
    }
})