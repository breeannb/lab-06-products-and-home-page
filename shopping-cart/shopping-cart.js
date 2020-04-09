// import relevant functions 
import { renderTableRow } from './render-line-items.js'; 
import bugs from '../data.js'; 
// import makeReadablePrice from '../shopping-cart/render-line-items.js';
import cart from '../data/cart.js'; 
import findByID, { calcOrderTotal, toUSD } from '../common/utils.js';

const tbody = document.getElementById('tbody');
const orderTotalCell = document.getElementById('order-total-cell');


const cartInLocalStorage = localStorage.getItem('CART'); 
const cart; 
// if there is a cart in local storage 
if (cartInLocalStorage) { 
    cart = JSON.parse(cartInLocalStorage);
}
else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) { 
    const cartItem = cart[i]; 
    const constItemId = cartItem.id;
    const bug = findByID(bugs, constItemId); 
    const dom = renderTableRow(cartItem, bug); 
    tbody.appendChild(dom); 
}
const orderTotal = calcOrderTotal(cart, bugs); 
orderTotalCell.textContent = toUSD(orderTotal);


// if the cart is empty 
if (cart.length === 0)  {
    placeOrderButton.disabled = true; 
}
else { 
    //if there is something in the cart, add event listener to order button
    placeOrderButton.addEventListener('click', () =>{
        localStorage.removeItem('CART'); 
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../'; 
    });
}