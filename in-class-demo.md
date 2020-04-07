HTML Table 
    - was in the shopping cart? 
    - <table>
        <thead></thead>
            <tr>
                <th>Bugs</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        <tbody><tbody>
        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th>Total: </th>
                <th></th>
            </tr>
        <tfoot>
    </table>

<!-- Will need to append the information above with javascript  -->
Are we hardcoding? No 
We are only generating the tbody within javascript 

In functions: 
    - to add functions to the table


function renderTableRow(cartItem, fruit) {
<!-- in Danny's example, they had a cart.js and each one had quantity and id as an element, which is what we will reference here -->

    <!-- call render table row -->
    const tr = document.createElement('tr'); 
    

    <!-- return table row -->
    return tr; 

}