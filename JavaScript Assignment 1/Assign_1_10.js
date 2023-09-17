
// Delete an object with specific array index.
// HINT : splice
// function : deleteRecord(users,1) // 1 means delete object with index 1 in array.

const users = [
  {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34
  },
  {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23
  }
];


function deleteRecord(users, indexToDelete) {
  if (indexToDelete >= 0 && indexToDelete < users.length) {
    users.splice(indexToDelete, 1);
  } else {
    console.error("Invalid index to delete");
  }
}

// Usage:
deleteRecord(users, 2); // This will delete the object at index 1 (Dean John)
