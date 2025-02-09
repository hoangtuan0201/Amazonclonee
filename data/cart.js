
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
        }];
}


//local storage only accept string
function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


export function addToCart(productId) {
    let matchingItem;
    let quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    //if product name matches
    cart.forEach((cartItem)=> {
        if (cartItem.id === productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantitySelector;
    } else {
        cart.push({
            id: productId,
            quantity: quantitySelector
        });
    }
    saveToStorage();
}

export function removeFromCart(productId) {
    let newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId!== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}
// neu ma cai id cua delete link ko bang voi id cua product trong cart ta se
// push cac item !== voi item bi xoa con` item bi xoa se ko dc them vao new cart


// we use export to make the variable available in other files instead of using script tag can cause naming conflicts
