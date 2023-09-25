// Q2. Write a promise function to add a new record at the begining of array users using spread operator,
// functions : addFirst(users,temp)



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

function addFirst(users, temp) {
  return new Promise((resolve, reject) => {
    try {
      const updatedUsers = [temp, ...users]; // Add the new record at the beginning
      resolve(updatedUsers);
    } catch (error) {
      reject(error);
    }
  });
}

// Usage example:
const newRecord = {
  id: 1,
  name: "New User",
  username: "new_user",
  email: "newuser@example.com",
  phone: "1-234-567-8901",
  website: "newuser.net",
  password: "new_user_password",
  ages: 30,
};

addFirst(users, newRecord)
  .then((updatedUsers) => {
    console.log("Updated users array:", updatedUsers);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
