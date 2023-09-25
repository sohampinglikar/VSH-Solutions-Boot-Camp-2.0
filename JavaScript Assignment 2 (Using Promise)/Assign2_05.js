// Write a function to display sum of all ages of records having type as dog.
// Use nesting promises function which first call Q1 function its output will be given to Q3 and display total.
// HINT : nesting of promises.


const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
];

// Q1: Filter the data to get records with type "dog"
function Q1(data) {
  return new Promise((resolve, reject) => {
    const dogRecords = data.filter((record) => record.type === "dog");
    resolve(dogRecords);
  });
}

// Q2: Calculate the sum of ages for the dog records
function Q2(dogRecords) {
  return new Promise((resolve, reject) => {
    const sumOfAges = dogRecords.reduce((sum, record) => sum + record.age, 0);
    resolve(sumOfAges);
  });
}

// Q3: Display the total age
function Q3(sumOfAges) {
  console.log("Total age of dogs:", sumOfAges);
}

// Nest the promises
Q1(data)
  .then(Q2)
  .then(Q3)
  .catch((error) => {
    console.error("Error:", error);
  });


  
