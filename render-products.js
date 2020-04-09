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
    button.addEventListener('click', function(){
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

        let cartItem = findByID(cart, bug.id); 

        if (!cartItem) {
            const cartItem = {
                id: bug.id,
                quantity: 1
            };

            cart.push(cartItem); 
        } else 
            cartItem.quantity++; 

        //stringify our shopping cart 
        const stringCart = JSON.stringify(cart);
        // put string cart in local storage 
        localStorage.setItem('CART', stringCart); 

    });

     // Give the li a class 
    li.classList.add('bug'); 

    // to place the information in the li 
    li.appendChild(h1); 
    li.appendChild(img); 
    li.appendChild(description);  
    li.appendChild(price); 
    li.append(button);

    return li; 
}