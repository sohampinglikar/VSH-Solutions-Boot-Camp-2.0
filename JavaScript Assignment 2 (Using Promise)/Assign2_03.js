// Write a promise function which will display sum of all ages.
// function Name ---> findSumAges(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use reduce functions.

function findSumAges(data) {
  return new Promise((resolve, reject) => {
    const sum = data.reduce((accumulator, current) => accumulator + current.age, 0);

    if (sum === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(sum);
    }
  });
}

const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
];

findSumAges(data)
  .then((sum) => {
    console.log("Sum of ages:", sum);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
