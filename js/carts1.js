let all_prod=document.querySelector("#all_prod")
let emptyFavorit=document.querySelector("#emptyFavorit")
let emptyCart=document.querySelector("#emptyCart")
let totalPrice=document.querySelector("#totalPrice")

function add_products(){
    let stored_products = JSON.parse(localStorage.getItem("ProductsInCart"))||[]
    let x=stored_products.map((item)=>{
        return `
        <div id="prod">
                <img src="${item.imageUrl}" alt="image">
                <div id="prod_content">
                    <div>
                        <h3 id="prod_title">${item.title}</h3>
                        <p id="prod_category">Category: ${item.category}</p>
                        <span style="display:flex";>
                        <p style="margin-right:20px;" id="prod_price">Price: ${item.price} $ </p>
                        <p id="prod_price">Total Price: ${item.price*item.number} $</p>
                        </span>
                    </div>
                    <div id="prod_icons">
                        
                        <i class="fa-solid fa-circle-minus update_btn" onClick="minus_product(${item.id})"></i>
                        <span id="product_num">${item.number}</span>
                        <i class="fa-solid fa-circle-plus update_btn" onClick="plus_product(${item.id})"></i>
                        <button class="remove_from_cart2" id="removeBtn2"
                        onClick="removeFromCart(${item.id}, this)" 
                        >Remove From Cart</button>
                    </div>
                </div>
            </div>
        `
    })
    all_prod.innerHTML=x.join("")
}
add_products()

let shopping_cart_num2=document.querySelector(".shopping_cart_num")

function plus_product(id) {
    let storageProducts = JSON.parse(localStorage.getItem("ProductsInCart"));
    let product = storageProducts.find((item) => item.id === id);
    if (product) {
        product.number++;
    }
    localStorage.setItem("ProductsInCart", JSON.stringify(storageProducts));
    let numOfProduct=localStorage.getItem("numOfProducts")
        numOfProduct++
        localStorage.setItem("numOfProducts",numOfProduct)
        shopping_cart_num2.innerHTML=localStorage.getItem("numOfProducts")
        let tPrice=document.querySelector("#tPrice")
let allProducts= JSON.parse(localStorage.getItem("ProductsInCart"))
let sumPrice=0
allProducts.forEach((item) => {
    sumPrice+=(item.price)*(item.number)
});
tPrice.innerHTML=sumPrice;

    add_products()
}

function minus_product(id) {
    let storageProducts = JSON.parse(localStorage.getItem("ProductsInCart"));
    let product = storageProducts.find((item) => item.id === id);
    if (product) {
        product.number--;
    }
    localStorage.setItem("ProductsInCart", JSON.stringify(storageProducts));
    localStorage.setItem("ProductsInCart", JSON.stringify(storageProducts));
    let numOfProduct=localStorage.getItem("numOfProducts")
        numOfProduct--
        localStorage.setItem("numOfProducts",numOfProduct)
        shopping_cart_num2.innerHTML=localStorage.getItem("numOfProducts")

        let itemInCart = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
        let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : []
    if(numOfProduct==0){
        let filterdItems = itemInCart.filter((item) => item.id !== id);
        localStorage.setItem("ProductsInCart", JSON.stringify(filterdItems));
        addedItem = filterdItems;
        checkEmptyStatus()
        add_products()
    }
    let choosen_Item=itemInCart.find((item)=>item.id===id)
    if(choosen_Item.number==0){
    let filterdItems = itemInCart.filter((item) => item.id !== id);
        localStorage.setItem("ProductsInCart", JSON.stringify(filterdItems));
        addedItem = filterdItems;
    }
    let tPrice=document.querySelector("#tPrice")
let allProducts= JSON.parse(localStorage.getItem("ProductsInCart"))
let sumPrice=0
allProducts.forEach((item) => {
    sumPrice+=(item.price)*(item.number)
});
tPrice.innerHTML=sumPrice;

    add_products()
}

let all_favorit=document.querySelector("#All_favorit")
function add_favorit(){
    let stored_products2 = JSON.parse(localStorage.getItem("ProductsInFavorit"))||[]
    let y=stored_products2.map((item)=>{
        return `
        <div class="favorit_prod">
            <img src="${item.imageUrl}" alt="product image">
            <div class="favorit_cont">
                <h3>${item.title}</h3>
                <p>category: <span>${item.category}</span></p>
                <i class="fa fa-heart heart2" data-toggle="tooltip" title="remove from cart !!" onClick="removeFromFavorit(${item.id})"></i>
            </div>
        </div>
        `
    })
    all_favorit.innerHTML=y.join("")
}
add_favorit()


function removeFromCart(id, btn) {
    if (localStorage.getItem("username")) {
        let itemInCart = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
        let filterdItems = itemInCart.filter((item) => item.id !== id);
        localStorage.setItem("ProductsInCart", JSON.stringify(filterdItems));
        addedItem = filterdItems;
        
        let choosen_Item=itemInCart.find((item)=>item.id===id)
        let numberOfProd=choosen_Item.number
        let numOfProduct=localStorage.getItem("numOfProducts")
        numOfProduct-=numberOfProd
        localStorage.setItem("numOfProducts",numOfProduct)
        let tPrice=document.querySelector("#tPrice")
let allProducts= JSON.parse(localStorage.getItem("ProductsInCart"))
let sumPrice=0
allProducts.forEach((item) => {
    sumPrice+=(item.price)*(item.number)
    
});
tPrice.innerHTML=sumPrice;

        
        add_products();
        checkEmptyStatus()
        shopping_cart_num2.innerHTML=localStorage.getItem("numOfProducts")
        if (addedItem.length === 0) {
            cart_div1.style.display = "none";
        }

    } else {
        let x = confirm("You Don't Make An Account !! Do You Want to Go to Register Page ?");
        if (x) {
            window.location = "register.html";
        }
    }
}

let tPrice=document.querySelector("#tPrice")
let allProducts= JSON.parse(localStorage.getItem("ProductsInCart"))
let sumPrice=0
allProducts.forEach((item) => {
    sumPrice+=(item.price)*(item.number)
});
tPrice.innerHTML=sumPrice;
let pInCart=localStorage.getItem("ProductsInCart")

function removeFromFavorit(id, btn) {
    if (localStorage.getItem("username")) {
        let itemInVavorit = JSON.parse(localStorage.getItem("ProductsInFavorit")) || []
        let unRemovingItem=itemInVavorit.filter((item)=>item.id!==id)
        localStorage.setItem("ProductsInFavorit", JSON.stringify(unRemovingItem))
        addedFavorit=unRemovingItem
        if (btn) {
            btn.style.display = "none";
            btn.parentElement.querySelector("#add_to_favorit").style.display = "block";
        }
        favorit_num.innerHTML=addedFavorit.length
        add_favorit()
        checkEmptyStatus()
        favorit_num.innerHTML = (JSON.parse(localStorage.getItem("ProductsInFavorit")).length)
    } else {
        let x = confirm("You Don't Make An Account !! Do You Want to Go to Register Page ?")
        if (x) {
            setTimeout(() => {
                window.location = "register.html"
            }, 500);
        }
    }
}
function checkEmptyStatus() {
    let cartItems = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
    let favoriteItems = JSON.parse(localStorage.getItem("ProductsInFavorit")) || [];

    if (!all_prod.innerHTML) {
        emptyCart.style.display = "block";
        all_prod.style.display = "none";
        totalPrice.style.display = "none";
    }
    if (!all_favorit.innerHTML) {
        emptyFavorit.style.display = "block";
        all_favorit.style.display = "none";
    }
}
checkEmptyStatus()