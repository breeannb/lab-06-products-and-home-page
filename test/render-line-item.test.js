import { renderTableRow } from '../shopping-cart/render-line-items.js'; 
import makeReadablePrice from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('makeReadablePrice', function(assert){ 
    const price = '1'; 
    const expect = '$1.00'; 
    const actual = makeReadablePrice(price); 
    assert.equal(actual, expect);
}); 

test('renders a line item', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    // bug information
    const beetle = {
        id: 'beetle',
        name: 'Rhinoceros Beetle',
        image: './assets /beetle.jpg',
        description: 'A description of the Rhinoceros Beetle',
        category: 'bug-beetle',
        price: 15.00, 
    };

    //cart information 
    const cartItem = {
        id: 'beetle',
        quantity: 2, 
    }; 

    const expected = '<tr><td class="table">Rhinoceros Beetle</td><td>2</td><td>$15.00</td><td>$30.00</td></tr>'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderTableRow(cartItem, beetle); 
    const html = dom.outerHTML; 
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});