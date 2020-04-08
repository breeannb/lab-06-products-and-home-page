// IMPORT MODULES under test here:
import findByID from '../common/utils.js';

const test = QUnit.test;

test('findByID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const arrayOfThings = [{ id: 'moth', quantity: 1 }, { id: 'beetle', quantity: 2 }]; 
    const expected = { id: 'moth' }; 

    // what do we expect to be the result
    const actual = findByID(arrayOfThings, 'moth');
    //Act 

    // Call the function you're testing and set the result to a const
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual.id, expected.id);
});