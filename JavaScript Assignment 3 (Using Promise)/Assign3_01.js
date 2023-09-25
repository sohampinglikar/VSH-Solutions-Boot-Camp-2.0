// Write a promise function which will display all the name with age > 26
// function Name ---> findAge(family)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.


const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];

function findAge(family) {
  return new Promise((resolve, reject) => {
    const filteredFamily = family.filter(person => person.age > 26);

    if (filteredFamily.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredFamily.map(person => person.name));
    }
  });
}

// Usage
findAge(family)
  .then(names => {
    console.log("Names with age > 26:", names);
  })
  .catch(error => {
    console.error(error);
  });
