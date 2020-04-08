export default function makeReadablePrice(price) { //in example, used this to create a common usd price format to reference in renderLineItems
    const readablePrice = `$${Number(price).toFixed(2)}`;
    return readablePrice;
}

// generate line item with id and quantity elements. 
// generate fruite that has id, name, img, descritpion, price, etc. 
export function renderTableRow(cartItem, bug) { 
    // make a table and place correlating info into sections 
    const tr = document.createElement('tr');

    const tdItemName = document.createElement('td');
    tdItemName.textContent = bug.name;
    tdItemName.classList.add('table');

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
  
    const tdPrice = document.createElement('td');
    tdPrice.textContent = makeReadablePrice(bug.price);

    const tdTotal = document.createElement('td');
    const totalPrice = (bug.price * cartItem.quantity); 
    tdTotal.textContent = makeReadablePrice(totalPrice);

    // to place the information in the tr 
    tr.appendChild(tdItemName);   
    tr.appendChild(tdQuantity); 
    tr.appendChild(tdPrice);
    tr.appendChild(tdTotal);

    return tr; 
} 

