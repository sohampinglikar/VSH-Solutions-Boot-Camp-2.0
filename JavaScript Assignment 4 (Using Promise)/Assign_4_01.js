// Write a promise function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)

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

function addLast(users, temp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Create a new user object with the provided data
        const newUser = { ...temp };

        // Push the new user to the end of the users array
        users.push(newUser);

        resolve(users); // Resolve the promise with the updated users array
      } catch (error) {
        reject(error); // Reject the promise if an error occurs
      }
    }, 1000); // Simulate an asynchronous operation with setTimeout
  });
}

// Example usage:
const newUserRecord = {
  id: 4,
  name: "New User",
  username: "newuser123",
  email: "newuser@example.com",
  phone: "1-234-567-8901",
  website: "newuser.net",
  password: "newuser_hashed_password",
  ages: 30,
};

addLast(users, newUserRecord)
  .then((updatedUsers) => {
    console.log("Updated Users Array:", updatedUsers);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
