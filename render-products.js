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
    button.innerHTML = 'Add'; 
    button.addEventListener('click', function(){

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