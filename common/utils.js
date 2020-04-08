export default function findByID(arrayOfThings, id){

    // loop the array
    for (let i = 0; i < arrayOfThings.length; i++) { 
        const myArray = arrayOfThings[0]; 

        if (myArray.id === id){
            return myArray; 
        }
    }
    //first item found that has an .id property that matches the passed in id. Also turn null if no match is found
    return null; 
}