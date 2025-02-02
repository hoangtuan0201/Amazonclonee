export const cart = [

];

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
}
// we use export to make the variable available in other files instead of using script tag can cause naming conflicts