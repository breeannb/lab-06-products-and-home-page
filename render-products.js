import findByID from './common/utils.js';

export default function renderBug(bug) { 

    // make a div 
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    //place the bugs and their correlating info in each individual div 
    h1.textContent = bug.name; 
    img.src = bug.image; 
    description.textContent = 'Description: ' + bug.description; 
    price.textContent = 'Price: $' + bug.price;
    button.textContent = 'Add';
    button.value = bug.id;  
    
    // button Event Listener
    button.addEventListener('click', () => {
        // retrieve existing shopping cart from localStorage. If no cart, we need an empty array. If there is, we need to turn it into a json.parse
        let cartInLocalStorage = localStorage.getItem('CART'); // set variable to cart in local storage
        let cart; //creating javascript cart 

        //if there is a cart: turn a string cart into an object
        if (cartInLocalStorage) { 
            cart = JSON.parse(cartInLocalStorage);
        }
        else { //if no cart, go make an empty cart 
            cart = [];
        }

        // Now that we have a cart, go find if we already have a bug that is the same kind
        let cartItem = findByID(cart, bug.id); 

        // if findByID finds nothing of this type in the cart 
        if (!cartItem) { // cart item is the bug id and the quantity 
            const newItem = { // bug passed as a parameter 
                id: bug.id,
                quantity: 1
            };

            cart.push(newItem); // push item into cart 
        } else 
            cartItem.quantity++; // if there is a cart item, add another to the quantity 

        //stringify our shopping cart 
        const stringCart = JSON.stringify(cart);
        // put string cart in local storage 
        localStorage.setItem('CART', stringCart); 

        //tell user we added one 
        alert('1 ' + bug.name + ' added to cart');

    });

     // Give the li a class 
    li.classList.add('bug'); 

    // to place the information in the li 
    li.appendChild(h1); 
    li.appendChild(img); 
    li.appendChild(description);  
    li.appendChild(price); 
    li.appendChild(button);

    return li; 
}