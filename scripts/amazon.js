let productsHTML = ''; //Accumulator Pattern


products.forEach((product)=>{
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
    
          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
<!--          data attribute-->
            Add to Cart
          </button>
        </div>
    `;
})
document.querySelector('.js-products-grid').innerHTML = productsHTML;
//add to cart button
document.querySelectorAll('.js-add-to-cart').forEach((button)=> {
    button.addEventListener('click', ()=>{
        const productId = button.dataset.productId;
        let matchingItem;
        //Increment by Selected Quantity
        let quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

        //if product name matches
        cart.forEach((item)=> {
            if (item.id === productId) {
                matchingItem = item;
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

        let cartQuantity = 0

        cart.forEach((item)=>{
            cartQuantity += item.quantity
        })
        // using dom to make the cart quantity change when we click add to cart button
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    });
});





// Main idea of Javascript, we use it to save data, generate HTML, and make it interactive.