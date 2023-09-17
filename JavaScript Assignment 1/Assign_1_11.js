
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

const objectToInsert = {
  id: 1,
  name: "new value inserted",
  username: "new_user",
  email: "newuser@example.com",
  phone: "1-234-567-8900",
  website: "newuser.net",
  password: "new_hashed_password",
  ages: 30,
};

function InsertRecord(users, objectToInsert, index) {
  // Use the splice method to insert the object at the specified index
  users.splice(index, 0, objectToInsert);
}


InsertRecord(users, objectToInsert, 1); // Insert at index 1

console.log(users); // Check the updated users array
