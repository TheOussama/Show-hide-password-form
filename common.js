let iconLock = document.querySelector("#pwdIcon");
let pwd = document.querySelector("#pwd");
function show(icon,input){
  if (input.type ==="password"){
    input.type = "text";
    iconLock.classList.remove("fa-lock");
    iconLock.classList.add("fa-lock-open");
  }else{
    input.type="password";
    iconLock.classList.add("fa-lock");
    iconLock.classList.remove("fa-lock-open");
  }
}

iconLock.addEventListener("click",()=>{
 show(iconLock,pwd)
})