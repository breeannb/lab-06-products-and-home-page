export default function renderBug(bug) { 
    // make a div 
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const description = document.createElement('description');
    const category = document.createElement('category');
    const price = document.createElement('price');

    //place the bugs and their correlating info in each individual div 
    h1.textContent = bug.name; 
    img.src = bug.image; 
    description.textContent = bug.description; 
    category.textContent = bug.category; 
    price.textContent = bug.price;

     // Give the li a class 
    li.classList.add('bug'); 

    // to place the information in the li 
    li.appendChild(h1); 
    li.appendChild(img); 
    li.appendChild(description); 
    li.appendChild(category); 
    li.appendChild(price); 

    return li; 
}