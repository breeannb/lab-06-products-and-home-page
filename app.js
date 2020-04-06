// Importing my variables and array of my bugs
import bugs from './data.js'; 
import renderBug from './render-products.js'; 

// creating a container that links to HTML container div
const bugContainer = document.getElementById('container'); 

for (let i = 0; i < bugs.length; i++) { // 
    const bug = bugs[i]; // to get the bugs from the array 
    const li = renderBug(bug);

    bugContainer.appendChild(li); 

}

