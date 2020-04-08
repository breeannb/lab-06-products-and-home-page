
export default function findByID(arrayOfThings, id){

    // loop the array
    for (let i = 0; i < arrayOfThings.length; i++) { 
        const myArray = arrayOfThings[0]; 

        if (myArray.id === id){
            return myArray; 
        }
    }
    //first item found that has an .id property that matches the passed in id. Also turn null if no match is found
    return null; 
}

export function calcLineItem(quantity, price){ 
    let lineTotal = quantity * price;
    let roundTotal = Math.round(lineTotal * 100) / 100;
    console.log('hi');
    return roundTotal; 
}

export function roundCurrency(lineTotal) {
    return Math.round(lineTotal * 100) / 100;
}
