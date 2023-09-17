// Write a function which will display all the records with only name & ages.
// function Name ---> findAll(users)
// HINT : Use map.


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

function findAll(users) {
    return users.map(user => ({
      name: user.name,
      ages: user.ages
    }));
  }
  
const result = findAll(users);

console.log(result);
