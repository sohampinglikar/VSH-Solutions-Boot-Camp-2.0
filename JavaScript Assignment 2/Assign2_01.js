// Write a promise function which will display all records with type ==='dog'
// function Name ---> findAllDogs(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.

const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" }
];

function findAllDogs(data) {
  return new Promise((resolve, reject) => {
    const dogRecords = data.filter(record => record.type === 'dog');
    if (dogRecords.length > 0) {
      resolve(dogRecords);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}

// Usage of the findAllDogs function:
findAllDogs(data)
  .then(dogRecords => {
    console.log("Dog Records:", dogRecords);
  })
  .catch(error => {
    console.error(error);
  });
