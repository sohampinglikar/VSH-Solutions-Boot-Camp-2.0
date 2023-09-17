// Write a promise function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING

// If there are no records in array reject with message "NO RECORDS"
// If there are records in Array then according to sorting order display result and return in resolve of promises.
// HINT : sort on objects.



const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
];


function Sorting(data, order) {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject("NO RECORDS");
      } else {
        if (order === "ASC") {
          data.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else if (order === "DESC") {
          data.sort((a, b) => (a.name < b.name ? 1 : -1));
        } else {
          reject("Invalid sorting order. Use 'ASC' or 'DESC'.");
        }
        resolve(data);
      }
    });
  }

Sorting(data, 'ASC')
  .then((sortedData) => {
    console.log("Sorted in ascending order:");
    console.log(sortedData);
  })
  .catch((error) => {
    console.error(error);
  });

Sorting(data, 'DESC')
  .then((sortedData) => {
    console.log("Sorted in descending order:");
    console.log(sortedData);
  })
  .catch((error) => {
    console.error(error);
  });
