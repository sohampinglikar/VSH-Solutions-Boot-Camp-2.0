// Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(data,'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use filter and string functions.

function findSpecificStartChar(data, startChar) {
  return new Promise((resolve, reject) => {
    const filteredData = data.filter((item) => item.name.startsWith(startChar));
    
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

// Example usage:
findSpecificStartChar(data, 'B')
  .then((result) => {
    console.log("Matching records:", result);
  })
  .catch((error) => {
    console.error(error);
  });
