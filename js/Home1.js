// let links = document.getElementById("user_ul")
let LogOutBtn = document.getElementById("logOutBtn")
let user1 = document.getElementById("user")

let thereUeser = localStorage.getItem("username")
let thereProducts = localStorage.getItem("ProductsInCart")
let tereFavorit = localStorage.getItem("ProductsInFavorit")
if(!(localStorage.getItem("numOfProducts"))||(localStorage.getItem("numOfProducts"))<0){
localStorage.setItem("numOfProducts", 0 ) 
}
if (localStorage.getItem("username")) {
    // links.remove()
    LogOutBtn.style.display = "block"
    user1.style.display = "flex"
    user1.innerHTML = "Hello, " + localStorage.getItem("username")
}

// //////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
let all_products = document.querySelector(".all_products")
let products = [
    {
        id: 1,
        title: "Black Watch",
        price: 399,
        category: "watches",
        imageUrl: "images/black-watch.jpg",
        number:1
    }, {
        id: 2,
        title: "iphone 17 Pro Max",
        price: 1599,
        category: "Phones",
        imageUrl: "images/iphone-17.jpg",
        number:1
    }, {
        id: 3,
        title: "Black Suit",
        price: 199,
        category: "Suit",
        imageUrl: "images/black-suit.jpeg",
        number:1
    }, {
        id: 4,
        title: "Orange Shoes",
        price: 99,
        category: "Shoes",
        imageUrl: "images/orange-shoes.png",
        number:1
    }, {
        id: 5,
        title: "Golden Watch",
        price: 599,
        category: "watches",
        imageUrl: "images/golden-watch.jpg",
        number:1
    }, {
        id: 6,
        title: "MacBook Pro 1",
        price: 1299,
        category: "laptop",
        imageUrl: "images/mac1.jpg",
        number:1
    }, {
        id: 7,
        title: "Samsung Galagy s24",
        price: 1499,
        category: "Phones",
        imageUrl: "images/samsong galaxy s25 ultra.jpg",
        number:1
    }, {
        id: 8,
        title: "Red Shoes",
        price: 99,
        category: "Shoes",
        imageUrl: "images/red-shoes.png",
        number:1
    }, {
        id: 9,
        title: "Silver Watch",
        price: 499,
        category: "watches",
        imageUrl: "images/silver-watch.jpg",
        number:1
    }, {
        id: 10,
        title: "Blue Suit ",
        price: 199,
        category: "Suit",
        imageUrl: "images/blue-suit.jpg",
        number:1
    }, {
        id: 11,
        title: "Precision 5540",
        price: 999,
        category: "watches",
        imageUrl: "images/pres-5540.jpg",
        number:1
    }, {
        id: 12,
        title: "Black Shoes",
        price: 199,
        category: "Shoes",
        imageUrl: "images/black-shoes.png",
        number:1
    }, {
        id: 13,
        title: "oppo reno 12 pro",
        price: 999,
        category: "watches",
        imageUrl: "images/oppo.jpg",
        number:1
    }, {
        id: 14,
        title: "White Shoes",
        price: 199,
        category: "Shoes",
        imageUrl: "images/white-shoes.png",
        number:1
    }, {
        id: 15,
        title: "White Suit",
        price: 199,
        category: "Suit",
        imageUrl: "images/white-suit.jpeg",
        number:1
    }
]
function add_products(list = products) {
    let addedItems = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
    let addedFavorit = localStorage.getItem("ProductsInFavorit") ? JSON.parse(localStorage.getItem("ProductsInFavorit")) : [];
    let z = list.map((item) => {
        let isInCart = addedItems.find((cartItem) => cartItem.id === item.id);
        let isInFavorit = addedFavorit.find((cartItem) => cartItem.id === item.id);
        return `
        <div class="product_div">
            <img src="${item.imageUrl}" alt="product image">
            <div class="product_info">
                <h3>${item.title}</h3>
                <p id="prod_category">category: ${item.category}</p>
                <p id="prod_price">price: ${item.price}$</p>
                <div class="product_icons">
                    <i class="far fa-heart" id="add_to_favorit"
                        onClick="addToFavorit(${item.id}, this)" 
                        style="display: ${isInFavorit ? 'none' : 'block'}; color: white;">
                    </i>
                    <i class="fas fa-heart" id="remove_from_favorit"
                        onClick="removeFromFavorit(${item.id}, this)" 
                        style="display: ${isInFavorit ? 'block' : 'none'}; color: red;">
                    </i>
                    
                    <button class="add_to_cart" 
                        onClick="addToCart(${item.id}, this)" 
                        style="display: ${isInCart ? 'none' : 'block'}">
                        Add to Cart
                    </button>
                    
                    <button class="remove_from_cart" 
                        onClick="removeFromCart(${item.id}, this)" 
                        style="display: ${isInCart ? 'block' : 'none'}">
                        Remove From Cart
                    </button>
                </div>
            </div>
        </div>
        `
    })
    all_products.innerHTML = z.join("");
}
add_products()

let product_nums = document.querySelector(".shopping_cart_num")
let cart_div2 = document.querySelector(".cart_div2")
let removeBtn1 = document.querySelector("#removeBtn")
let addBtn1 = document.querySelector("#addBtn")

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : []

// //////////// add to cart function ////////////////
function addToCart(id, btn) {
    if (localStorage.getItem("username")) {
        // thereProducts=true      
        let choosenItem = products.find((item) => item.id === id)
        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))

        btn.style.display = "none";
        btn.parentElement.querySelector(".remove_from_cart").style.display = "block";

        let numOfProduct=localStorage.getItem("numOfProducts")
        numOfProduct++
        localStorage.setItem("numOfProducts",numOfProduct)

        print_product_in_div()
        add_products()
        // removeBtn1.style.display="block"
    } else {
        let x = confirm("You Don't Make An Account !! Do You Want to Go to Register Page ?")
        if (x) {
            setTimeout(() => {
                window.location = "register.html"
            }, 500);
        }
    }
}
// if (thereProducts) {
//     product_nums.innerHTML = (JSON.parse(localStorage.getItem("ProductsInCart")).length)
// }

// //////////// remove from cart function ////////////////
function removeFromCart(id, btn) {
    if (localStorage.getItem("username")) {
        let itemInCart = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
        let filterdItems = itemInCart.filter((item) => item.id !== id);
        localStorage.setItem("ProductsInCart", JSON.stringify(filterdItems));
        addedItem = filterdItems;
        if (btn) {
            btn.style.display = "none";
            btn.parentElement.querySelector(".add_to_cart").style.display = "block";
        }
        // product_nums.innerHTML = addedItem.length;

         let numOfProduct=localStorage.getItem("numOfProducts")
        numOfProduct--
        localStorage.setItem("numOfProducts",numOfProduct)
        
        print_product_in_div();
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
// ///////////////
function print_product_in_div() {
    let storageProducts = JSON.parse(localStorage.getItem("ProductsInCart"))
    if (storageProducts) {
        product_nums.innerHTML = (JSON.parse(localStorage.getItem("numOfProducts")))
        let a = storageProducts.map((item) => {
    return `
        <div class="cart1">
            <div>
                <h3 class="product_title">${item.title}</h3>
                <h3 class="price"><span>Price:</span><br><span style="font-size: 18px;">${item.price*item.number}$</span></h3>
            </div>
            <div class="product_num">
                <i class="fa-solid fa-circle-minus update_btn" onClick="minus_product(${item.id})"></i>
                <span>${item.number}</span>
                <i class="fa-solid fa-circle-plus update_btn" onClick="plus_product(${item.id})"></i>
            </div>
        </div>
        `
})
        cart_div2.innerHTML = a.join("")
    }
}
print_product_in_div()
// ///////////////////////////////////////
let plusBtn=document.querySelector("#plus")
let minusBtn=document.querySelector("#minus")


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
    print_product_in_div();
}

function minus_product(id) {
    let storageProducts = JSON.parse(localStorage.getItem("ProductsInCart"));
    let product = storageProducts.find((item) => item.id === id);
    if (product) {
        product.number--;
    }
    localStorage.setItem("ProductsInCart", JSON.stringify(storageProducts));
    let numOfProduct=localStorage.getItem("numOfProducts")
        numOfProduct--
        localStorage.setItem("numOfProducts",numOfProduct)

    let itemInCart = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
    let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : []
    let choosen_Item=itemInCart.find((item)=>item.id===id)
    if(choosen_Item.number==0){
    let filterdItems = itemInCart.filter((item) => item.id !== id);
        localStorage.setItem("ProductsInCart", JSON.stringify(filterdItems));
        addedItem = filterdItems;
    }
    if(localStorage.getItem("numOfProducts")==0){
        cart_div1.style.display="none"
    }
    print_product_in_div();
    add_products()
}
// ///////////////////////////////////////
let cart_icon = document.querySelector("#cart_icon")
let cart_div1 = document.querySelector("#cart_div1")

cart_icon.addEventListener("click", show_cart)

if (cart_div2.innerHTML != "") {
    thereProducts = true
}
else {
    thereProducts = false
}
function show_cart() {
    if (thereUeser) {
        if (cart_div2.innerHTML) {
            if (cart_div1.style.display == "flex") {
                cart_div1.style.display = "none"
            } else {
                cart_div1.style.display = "flex"
            }
        } else {
            cart_div1.style.display = "none"
            alert("The Cart is Empty !!")
        }
        if(favorit_div1.style.display=="block"){
            favorit_div1.style.display="none"
        }
    } else {
        let x = confirm("You Don't Make An Account !! Do You Want to Go to Register Page ?")
        if (x) {
            setTimeout(() => {
                window.location = "register.html"
            }, 500);
        }
    }

}

cart_icon.addEventListener("click", function (event) {
    event.preventDefault()
})
// //////////////////////////////////////////////
let select_list = document.querySelector("#select_list")
let searchInput = document.getElementById("search_input")

function searchProducts(val) {
    let filteredType = select_list.value
    let value1 = val.toLowerCase().trim();
    let filtered = products.filter((item) => {
        if (filteredType === "1") {
            return (item.title.toLocaleLowerCase().includes(value1))
        } else {
            return (item.category.toLocaleLowerCase().includes(value1))
        }
    })
    add_products(filtered)

}
if (searchInput) {
    searchInput.addEventListener("keyup", function (e) {
        searchProducts(e.target.value);
    });
}
window.onload = () => {
    searchInput.focus();
};
select_list.addEventListener("change", function () {
    searchInput.focus();
})
// ////////////////////////////////////
let favorit_icon = document.getElementById("favorit_icon")
let favorit_num = document.getElementById("favorit_num")
let favorit_div1 = document.getElementById("favorit_div1")
let favorit_div2 = document.getElementById("favorit_div2")
let add_to_favorit = document.getElementById("add_to_favorit")

favorit_icon.addEventListener("click", show_favorit)


function show_favorit() {
    if (tereFavorit) {
        if (favorit_div2.innerHTML) {
            if (favorit_div1.style.display == "block") {
                favorit_div1.style.display = "none"
            } else {
                favorit_div1.style.display = "block"
            }
        } else {
            favorit_div1.style.display = "none"
            alert("The favorit is Empty !!")
        }
        if(cart_div1.style.display=="block"){
            cart_div1.style.display="none"
        }
    } else {
        let x = confirm("You Don't Make An Account !! Do You Want to Go to Register Page ?")
        if (x) {
            setTimeout(() => {
                window.location = "register.html"
            }, 500);
        }
    }

}


function print_in_favorit() {
    let favoriteItems = localStorage.getItem("ProductsInFavorit") ? JSON.parse(localStorage.getItem("ProductsInFavorit")) : [];
    
    let f = favoriteItems.map((item) => {
        return `
            <div class="favorit1">
                <div>
                    <h3 class="product_title1">${item.title}</h3>
                    <i data-toggle="tooltip" title="remove from cart" class="fas fa-heart remove_from_favorit2" onClick="removeFromFavorit(${item.id})"></i>
                </div>
            </div>
        `;
    });
    favorit_div2.innerHTML = f.join("");
}

let addedFavorit = localStorage.getItem("ProductsInFavorit") ? JSON.parse(localStorage.getItem("ProductsInFavorit")) : []
function addToFavorit(id, btn) {
    if (localStorage.getItem("username")) {
        let choosenFavorit = products.find((item) => item.id === id)
        addedFavorit = [...addedFavorit, choosenFavorit]
        localStorage.setItem("ProductsInFavorit", JSON.stringify(addedFavorit))

        if (btn) {
            btn.style.display = "none";
            btn.parentElement.querySelector("#remove_from_favorit").style.display = "block";
        }
        print_in_favorit()
        add_products()
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
print_in_favorit()



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
        print_in_favorit()
        add_products()
        if(addedFavorit.length===0){
            favorit_div1.style.display="none"
        }
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

if (tereFavorit) {
    favorit_num.innerHTML = (JSON.parse(localStorage.getItem("ProductsInFavorit")).length)
}

favorit_icon.addEventListener("click", function (event) {
    event.preventDefault()
})

let view_product_btn=document.querySelector(".view_product_btn")
let view_favorit_btn=document.querySelector("#view_favorit_btn")
view_product_btn.addEventListener("click",function(){
        setTimeout(() => {
            window.location="cart&favorit.html"
        }, 500);
})
view_favorit_btn.addEventListener("click",function(){
    if (tereFavorit) {
        setTimeout(() => {
            window.location="cart&favorit.html"
        }, 500);
    }
})










let nav_div = document.querySelector("#nav_div")
// document.addEventListener("scroll",function(){
//     if(document.body.scrollTop>45||document.documentElement.scrollTop>45){
//     nav_div.style.opacity="0.8"
//     cart_div1.style.opacity="1"
//     behavior:'smooth'
//     }
//     else
//         nav_div.style.opacity="1"
// })

// if(searchInput){
// searchInput.addEventListener("keyup",function(e){
//     let value1=e.target.value.toLowerCase().trim();
//     let filteredType=select_list.value
//     let filtered=products.filter((item)=>{
//         if(filteredType==="1"){
//             return(item.title.toLocaleLowerCase().includes(value1))
//         }else{
//             return(item.category.toLocaleLowerCase.includes(value1))
//         }
//     })
//     add_products(filtered)
// })
// }




// document.addEventListener("click",function(e){
//     if(cart_div1.style.display=="block"){
//         if(!cart_div1.contains(e.target)&&!cart_icon.contains(e.target)){
//             cart_div1.style.display="none"
//         }
//     }
// })