// Write a promise function which will display all the records ending with name 'nny' or any character passed as parameter.
// function Name ---> findSpecificEndChar(family,'nny')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use filter and string functions.




const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];


function findSpecificEndChar(family, endChar) {
    return new Promise((resolve, reject) => {
      const filteredFamily = family.filter(person => person.name.endsWith(endChar));
  
      if (filteredFamily.length > 0) {
        resolve(filteredFamily);
      } else {
        reject("NO RECORDS FOUND");
      }
    });
  }

findSpecificEndChar(family, 'nny')
  .then(result => {
    console.log("Matching records:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
