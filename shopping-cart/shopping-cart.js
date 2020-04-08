// import relevant functions 
import { getTableRow, renderTableRow } from './render-line-items.js'; 
import bugs from '../data.js'; 
import makeReadablePrice from '../shopping-cart/render-line-items.js';
import cart from '../data.js'; 
import { findByID } from '../common/utils.js';

const tbody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) { 
    const cartItem = cartItem[i]; 
    const bug = findByID(bugs, cartItem.id); 
    const dom = getTableRow(cartItem, bug); 
    tbody.appendChild(dom); 
}
