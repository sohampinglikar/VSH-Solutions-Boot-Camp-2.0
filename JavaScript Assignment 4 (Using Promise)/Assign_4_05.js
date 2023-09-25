// Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(data,'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use filter and string functions.

const users = [
    {
      id: 2,
      name: "B",
      username: "Monte.Weber2",
      email: "Daphne43@yahoo.com",
      phone: "1-563-675-1857 x11708",
      website: "carmela.net",
      password: "hashed_password",
      age: 34
    },
    {
      id: 3,
      name: "Dean John",
      username: "dd.1",
      email: "deno@google.com",
      phone: "1-123-543-1857 123212",
      website: "dd.net",
      password: "Dean_hashed_password",
      age: 23
    }
  ];

function findSpecificStartChar(data, character) {
  return new Promise((resolve, reject) => {
    if (!character || typeof character !== 'string') {
      reject("Invalid character provided");
      return;
    }

    const filteredRecords = data.filter(user => {
      const name = user.name || "";
      return name.charAt(0).toLowerCase() === character.toLowerCase();
    });

    if (filteredRecords.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      resolve(filteredRecords);
    }
  });
}

// Example usage:


findSpecificStartChar(users, 'B')
  .then(result => {
    console.log("Matching records:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
