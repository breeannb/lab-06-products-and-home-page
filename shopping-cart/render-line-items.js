export default function makeReadablePrice(price) { //in example, used this to create a common usd price format to reference in renderLineItems
    const readablePrice = `$${Number(price).toFixed(2)}`;
    return readablePrice;
}

// generate line item with id and quantity elements. 
// generate fruite that has id, name, img, descritpion, price, etc. 
export function renderTableRow(cartItem, bug) { 
    // make a table and place correlating info into sections 
    const tr = document.createElement('tr');
    // const th = document.createElement('th');

    const thItemName = document.createElement('th');
    thItemName.textContent = bug.name;
    thItemName.classList.add('table');

    const thQuantity = document.createElement('th');
    thQuantity.textContent = cartItem.quantity;

    const thPrice = document.createElement('th');
    thPrice.textContent = makeReadablePrice(bug.price);

    const thTotal = document.createElement('th');
    const totalPrice = (bug.price * cartItem.quantity); 
    thTotal.textContent = makeReadablePrice(totalPrice);

    // to place the information in the tr 
    tr.appendChild(thItemName);   
    tr.appendChild(thQuantity); 
    tr.appendChild(thPrice);
    tr.appendChild(thTotal);

    return tr; 
} 

