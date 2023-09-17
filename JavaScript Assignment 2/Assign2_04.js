// Write a promise function which will display all the records with only name & ages.
// function Name ---> findAll(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use map.

function findAll(data) {
  return new Promise((resolve, reject) => {
    const filteredData = data.map((record) => ({
      name: record.name,
      age: record.age,
    }));

    if (filteredData.length > 0) {
      resolve(filteredData);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}

const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
];

findAll(data)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
