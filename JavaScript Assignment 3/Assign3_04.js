// Write a promise function which will display all the records with only name.
// function Name ---> findAllNames(family)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use map.

const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];

function findAllNames(family) {
  return new Promise((resolve, reject) => {
    const names = family.map(person => person.name);
    
    if (names.length > 0) {
      resolve(names);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}


findAllNames(family)
  .then(names => {
    console.log("Names found:", names);
  })
  .catch(error => {
    console.error("Error:", error);
  });
