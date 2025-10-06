// Código JS aqui!
let cart = [];
let total = 0;

function login() {
  const username = document.getElementById('username').value;
  if (username) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('store-screen').style.display = 'block';
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  const cart = document.getElementById('cart');
  cart.style.display = (cart.style.display === 'none' || cart.style.display === '') ? 'block' : 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  alert(`Compra realizada com sucesso!\nTotal: R$ ${total.toFixed(2)}`);
  cart = [];
  total = 0;
  updateCart();
  toggleCart();
}