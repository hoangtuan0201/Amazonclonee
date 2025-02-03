export const cart = [
    //normalizing the data
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    }
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