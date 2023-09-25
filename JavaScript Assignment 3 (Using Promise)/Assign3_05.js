// Write a promise function which will display all the records in sorting according to names.
// function Name ---> Sorting(family,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING

// If there are no records in array reject with message "NO RECORDS"
// If there are records in Array then according to sorting order display result and return in resolve of promises.

const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
  ];
  
  function sortFamilyByName(family, order) {
    return new Promise((resolve, reject) => {
      if (family.length === 0) {
        reject("NO RECORDS");
      } else {
        if (order === "ASC") {
          family.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === "DESC") {
          family.sort((a, b) => b.name.localeCompare(a.name));
        } else {
          reject("Invalid sorting order");
        }
        resolve(family);
      }
    });
  }
  
  
  sortFamilyByName(family, 'ASC')
    .then(sortedFamily => {
      console.log(sortedFamily);
    })
    .catch(error => {
      console.error(error);
    });
  
