// Write a promise function to display all records only 3 fields id,name,username.
// functions : display(users)
// HINT : map

const users = [
  {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34,
  },
  {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23,
  },
];

function display(users) {
  return new Promise((resolve, reject) => {
    if (!users || users.length === 0) {
      reject("No user records available.");
    } else {
      const result = users.map(({ id, name, username }) => ({
        id,
        name,
        username,
      }));
      resolve(result);
    }
  });
}

// Usage example
display(users)
  .then((filteredUsers) => {
    console.log(filteredUsers);
  })
  .catch((error) => {
    console.error(error);
  });
