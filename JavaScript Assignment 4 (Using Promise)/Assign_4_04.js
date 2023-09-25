// Write a promise function which will display all records with name ==='demon'
// function Name ---> findNameEquals(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.

const users = [
  {
    id: 2,
    name: "Jonathon Haley",
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
  },
  {
    id: 7,
    name: "demon",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
  }

];

function findNameEquals(users) {
  return new Promise((resolve, reject) => {
    const filteredUsers = users.filter(user => user.name.toLowerCase() === 'demon');

    if (filteredUsers.length > 0) {
      resolve(filteredUsers);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
}


findNameEquals(users)
  .then(result => {
    console.log("Matching records:", result);
  })
  .catch(error => {
    console.error(error);
  });
