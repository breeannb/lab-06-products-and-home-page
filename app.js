// // Importing my variables and array of my bugs and render function 
// import bugs from './data.js'; 
// import renderBug from './render-products.js'; 

// // creating a container that links to HTML container div
// const bugContainer = document.getElementById('container'); 

// for (let i = 0; i < bugs.length; i++) { // 
//     const bug = bugs[i]; // to get the bugs from the array 
//     const li = renderBug(bug); // Pass to your DOM generation function and capture result in variable

// // Append to the top-level list element
//     bugContainer.appendChild(li); 

// }

// Importing my variables and array of my bugs and render function 
import rawBugs from './data.js'; 
import renderBug from './render-products.js'; 

// creating a container that links to HTML container div
const bugContainer = document.getElementById('container'); 

const PRODUCT_KEY = 'PRODUCTS'; 
let bugs = localStorage.getItem(PRODUCT_KEY); 

if (!bugs || bugs === 'null') { 
    const stringyBugs = JSON.stringify(rawBugs); 

    localStorage.setItem(PRODUCT_KEY, stringyBugs); 

    bugs = localStorage.getItem(PRODUCT_KEY);
}

const parsedBugs = JSON.parse(bugs); 

for (let i = 0; i < parsedBugs.length; i++) { // 
    const bug = parsedBugs[i]; // to get the bugs from the array 
    const li = renderBug(bug); // Pass to your DOM generation function and capture result in variable

// Append to the top-level list element
    bugContainer.appendChild(li); 

}