// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderBug from '../render-products.js';

const test = QUnit.test;

test('renders a bug', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const beetle = {
        id: 'beetle',
        name: 'Rhinoceros Beetle',
        image: '../assets /beetle.jpg',
        description: 'A description of the Rhinoceros Beetle',
        category: 'bug-beetle',
        price: 15.00, 
    };

    const expected = '<li class="bug"><h1>Rhinoceros Beetle</h1><img src="../assets /beetle.jpg"><p>Description: A description of the Rhinoceros Beetle</p><p>Price: $15</p><button>Add</button></li>'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const li = renderBug(beetle); 
    const html = li.outerHTML; 
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
