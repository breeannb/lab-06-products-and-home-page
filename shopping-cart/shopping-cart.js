// import relevant functions 
import { renderTableRow } from './render-line-items.js'; 
import bugs from '../data.js'; 
// import makeReadablePrice from '../shopping-cart/render-line-items.js';
// import cart from '../data/cart.js'; 
import findByID, { calcOrderTotal, toUSD } from '../common/utils.js';

const tbody = document.getElementById('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

// Get shopping cart from local storage to the Shopping Cart webpage 
const cartInLocalStorage = localStorage.getItem('CART'); // getItem from local Storage, the stringyCart, and set to cartInLocalStorage
let cart;

if (cartInLocalStorage) { // if the cart in local storage exists
    cart = JSON.parse(cartInLocalStorage); //parse(unstringify) the cart 
}
else {
    cart = []; //initalize the cart
}


//looping
for (let i = 0; i < cart.length; i++) { 
    const cartItem = cart[i]; 
    const constItemId = cartItem.id; //finding the cartItem ID that corresonds to that ID
    const bug = findByID(bugs, constItemId); 
    const dom = renderTableRow(cartItem, bug); //renders new table row 
    tbody.appendChild(dom); //append to tbody 
}
const orderTotal = calcOrderTotal(cart, bugs); 
orderTotalCell.textContent = toUSD(orderTotal);


// // if the cart is empty 
// if (cart.length === 0)  {
//     placeOrderButton.disabled = true; 
// }
// else { 
//     //if there is something in the cart, add event listener to order button
//     placeOrderButton.addEventListener('click', () =>{
//         localStorage.removeItem('CART'); 
//         alert('Order placed:\n' + JSON.stringify(cart, true, 2));
//         window.location = '../'; 
//     });

// }