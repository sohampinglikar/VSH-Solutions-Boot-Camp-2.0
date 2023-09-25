// Write a promise function which will display all the records starting with name 'J' or any character passed as parameter.
// function Name ---> findSpecificStartChar(family,'J')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use filter and string functions.

const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];

function findSpecificStartChar(data, startChar) {
  return new Promise((resolve, reject) => {
    if (!data || !Array.isArray(data)) {
      reject("Invalid data");
    } else {
      const filteredData = data.filter(item => item.name.charAt(0) === startChar);
      if (filteredData.length > 0) {
        resolve(filteredData);
      } else {
        reject("NO RECORDS FOUND");
      }
    }
  });
}

// Example usage:
findSpecificStartChar(family, 'J')
  .then(result => {
    console.log("Matching records:", result);
  })
  .catch(error => {
    console.error(error);
  });
