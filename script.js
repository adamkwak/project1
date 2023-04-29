let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}
let cart = document.querySelector('.cart');
let closeCart = document.querySelector("#close-cart")

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
}
document.querySelector('#close-cart').onclick = () => {
    cart.classList.remove('active');
    search.classList.remove('active');
    login.classList.remove('active');
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready();
}
function ready() {
    let removeCartButtons = document.getElementsByClassName('bx-trash')
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    let addCart = document.getElementsByClassName('bx-shopping-bag')
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i]
        button.addEventListener("click", addCartClicked)
    }
}
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal();
}
function addCartClicked(event) {
    let button = event.target
    let shopProducts = button.parentElement
    let title = shopProducts.getElementsByClassName('product-title1')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('hover_img')[0].src;

    addProductToCart(title, price, productImg);
    updatetotal()
}
function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement('div')
    cartShopBox.classList.add()
    let cartItems = document.getElementsByClassName('product-box')[0]
    let cartItemsNames = cartItems.getElementsByClassName('product-title1')[0]
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerHTM == title) {
            alert('You have already add this item to cart')
            return;
        }

    }

}

let cartBoxContent = ` <div class="box">
<img src="/img/product9.jpg" alt="">
<div class="text">
    <h4>WOMEN</h4>
    <h3>T-shirt 9</h3>
    <div class="cart-price">25$</div>

    <input type="number" value="1" class="cart-quantity">
</div>
<i class='bx bx-trash'></i>

</div>`


cartShopBox.innerHTML = cartBoxecontent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('bx-trash')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', removeCartItem)




function updatetotal() {
    let cartContent = document.getElementsByClassName('cart')[0];
    let cartBoxes = cartContent.getElementsByClassName('box');
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBoxes = cartBoxes[i]
        let priceElement = cartBoxes.getElementsByClassName('cart-price')[0];
        let quantityElement = cartBoxes.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value
        total = total + (price * quantity);
        document.getElementsByClassName('total-price')[0].innerHTML = "$" + total;
    }
}


let login = document.querySelector('.user')

document.querySelector('#login1').onclick = () => {
    login.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}
