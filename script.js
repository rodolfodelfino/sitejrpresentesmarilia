let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cartItems.push(productName);
    totalPrice += price;

    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cartItems");
    cartItemsList.innerHTML = "";

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        cartItemsList.appendChild(li);
    });

    const total = document.getElementById("totalPrice");
    total.innerText = `Total: R$ ${totalPrice.toFixed(2)}`;
}

function checkout() {
    if (cartItems.length > 0) {
        alert("Compra finalizada! Obrigado por comprar conosco!");
        cartItems = [];
        totalPrice = 0;
        updateCart();
    } else {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
    }
}

