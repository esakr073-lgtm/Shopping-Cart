let username=document.getElementById("username")
let password=document.getElementById("password")
let loginBtn=document.getElementById("logBtn")

let storedName=localStorage.getItem("username")
let storedPassword=localStorage.getItem("password")

loginBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(storedName==null){
        let x=confirm("please make an account from Regester")
        if(x){
            window.location="register.html"
        }
    }
    else if(username.value===""||password.value===""){
        alert("Please Fill All Data !!")
    }else{
        if(username.value.trim()===storedName.trim()&&password.value.trim()===storedPassword.trim()){
            setTimeout(() => {
               window.location="index.html" 
            }, 1000);
        }else{
            alert("username or password is wrong try to fill them again !!")
        }
    }
})