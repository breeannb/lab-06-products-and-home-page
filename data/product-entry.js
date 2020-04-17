
// establish a form from html element 
const myForm = document.getElementById('new-product-form');

// event listener on submit button 
myForm.addEventListener('submit', (event) => {
    // console.log('I clicked the form');
    //need to prevent default whenever we use a form 
    event.preventDefault(); 

    // parsing form data (Dani said it is a pain)

    const myFormData = new FormData(myForm); 

    const product = { 
        id: myFormData.get('id'),
        name: myFormData.get('name'),
        image: myFormData.get('image'),
        description: myFormData.get('description'),
        category: myFormData.get('category'),
        price: myFormData.get('price'),
    }; 

    // console.log(product);

    const bugs = localStorage.getItem('PRODUCTS'); 

    const parsedBugs = JSON.parse(bugs); 
    
    parsedBugs.push(product);

    const stringyNewProducts = JSON.stringify(parsedBugs); 

    localStorage.setItem('PRODUCTS', stringyNewProducts);

    // console.log(parsedBugs);



}); 