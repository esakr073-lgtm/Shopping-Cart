let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let registBtn=document.getElementById("regBtn")

regBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value===""||email.value===""||password.value===""){
        alert("Please Fill All Data !!")
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        alert("Account Created Successfully")
        setTimeout(() => {
            window.location="login.html"
        }, 800);
    }
})
