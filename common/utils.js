
export default function findByID(arrayOfThings, id){

    // loop the array
    for (let i = 0; i < arrayOfThings.length; i++) { 
        const myThing = arrayOfThings[i]; 

        if (myThing.id === id){
            return myThing; 
        }
    }
    //first item found that has an .id property that matches the passed in id. Also turn null if no match is found

}
export function calcLineItem(quantity, price){ 
    const lineTotal = quantity * price;
    return roundCurrency(lineTotal); 
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function roundCurrency(lineTotal) {
    return Math.round(lineTotal * 100) / 100;
}

export function calcOrderTotal(cart, bugs) { 
    // variable to hold order total 
    let ordertTotal = 0; 
    
    for (let i = 0; i < cart.length; i++){
        const lineItem = cart[i]; 
        const bug = findByID(bugs, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, bug.price); 
        ordertTotal += lineTotal;
    }
    return roundCurrency(ordertTotal);
}