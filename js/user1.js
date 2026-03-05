let LogOutBtn1=document.querySelector("#logOutBtn")
let user_ul=document.querySelector("#user_ul")
let user = document.getElementById("user")
let product_nums2 = document.querySelector(".shopping_cart_num")
let favorit_num2 = document.getElementById("favorit_num")
let thereUeser2 = localStorage.getItem("username")
let thereProducts2 = localStorage.getItem("ProductsInCart")
let tereFavorit2 = localStorage.getItem("ProductsInFavorit")
let numperOfProd=document.querySelector(".shopping_cart_num")
let cartdiv1=document.querySelector("#cart_div1")

LogOutBtn1.addEventListener("click",function(){
    setTimeout(() => {
        window.location="login.html"
    }, 800);
})
if(thereUeser2){
    LogOutBtn1.computedStyleMap.display="block"
    user_ul.remove()
    LogOutBtn1.style.display = "block"
    user.style.display = "block"
    user.innerHTML = "Hello, " + thereUeser2
    
}
if (thereProducts2) {
    product_nums2.innerHTML = (JSON.parse(localStorage.getItem("ProductsInCart")).length)
}
if (tereFavorit2) {
    favorit_num2.innerHTML = (JSON.parse(localStorage.getItem("ProductsInFavorit")).length)
}
// //////////////////////////////////

// let links1=document.getElementById("user_ul")
// let user=document.getElementsByClassName("user")

// if(localStorage.getItem("username")){
//     links1.style.display="none"
//     user.innerHTML=localStorage.getItem("username")
// }else{
    // LogOutBtn1.remove()
//     links1.style.display="block"
    // links1.style.display="flex"
// }
// ///////////////////////////////
numperOfProd.innerHTML=localStorage.getItem("numOfProducts")


// //////////////////////////
let home_img=document.querySelector(".home_img")
home_img.addEventListener("click",function(){
    setTimeout(() => {
        window.location="index.html"
    }, 500);
})
