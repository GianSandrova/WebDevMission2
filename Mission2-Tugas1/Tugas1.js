let cart = [];

function incrementQuantity(id) {
    const quantityElement = document.getElementById(`quantity${id}`);
    const quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

function decrementQuantity(id) {
    const quantityElement = document.getElementById(`quantity${id}`);
    const quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
    }
}

const cartItems = [];

function addToCart(productName, productPrice, productId) {
    const quantity = parseInt(document.getElementById(`quantity${productId}`).textContent);
    const imgElement = document.querySelector(`#product-container .product:nth-child(${productId}) img`);
    if (quantity > 0) {
        const cartItem = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            total: productPrice * quantity,
            imgElement: imgElement, 
        };

        cartItems.push(cartItem);
        updateCart();
    }
}

function calculateTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
        totalPrice += item.total;
    });

    return totalPrice;
}

function calculateTax(totalPrice){
    const taxRate = 0.11;
    return totalPrice * taxRate;
}

function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Mengosongkan kontainer keranjang sebelum memperbarui isinya

    cartItems.forEach((item, index) => {
        // ... (kode Anda untuk membuat elemen cartItem)
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const cartItemImg = document.createElement("img");
        cartItemImg.src = item.imgElement.src;
        // Setel atribut src gambar sesuai dengan produk yang sesuai (harus ditambahkan)
        // cartItemImg.src = ...

        const cartItemInfo = document.createElement("div");
        cartItemInfo.classList.add("cart-item-info");

        const cartItemName = document.createElement("div");
        cartItemName.classList.add("cart-item-name");
        cartItemName.textContent = item.name;

        const cartItemPrice = document.createElement("div");
        cartItemPrice.classList.add("cart-item-price");
        cartItemPrice.textContent = `Price: Rp.${item.price}`;

        const cartItemQuantity = document.createElement("div");
        cartItemQuantity.classList.add("cart-item-quantity");
        cartItemQuantity.textContent = `Quantity: ${item.quantity}`;

        const cartItemTotal = document.createElement("div");
        cartItemTotal.classList.add("cart-item-total");
        cartItemTotal.textContent = `Total: Rp.${item.total}`;

        cartItemInfo.appendChild(cartItemName);
        cartItemInfo.appendChild(cartItemPrice);
        cartItemInfo.appendChild(cartItemQuantity);
        cartItemInfo.appendChild(cartItemTotal);

        cartItemDiv.appendChild(cartItemImg);
        cartItemDiv.appendChild(cartItemInfo);
        cartContainer.appendChild(cartItemDiv);
    });

    const totalPrice = calculateTotalPrice();
    const tax = calculateTax(totalPrice);
    const totalPayment = totalPrice + tax;

    const totalContainer = document.createElement("div");
    totalContainer.classList.add("cart-total");
    totalContainer.innerHTML = `
        <div>Total Price :Rp.${totalPrice}</div>
        <div>Tax:Rp.${tax}</div>
        <div>Total Payment: Rp.${totalPayment}<div/>
        `;
    cartContainer.appendChild(totalContainer);
}






