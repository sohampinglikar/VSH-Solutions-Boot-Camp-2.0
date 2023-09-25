// Write a function to display sum of all ages of records having name starting with 'B'
// Use nesting promises function which first call Q1 function its output will be given to Q3 and display total of ages.
// function : findNameAges(users,'B')
// HINT : nesting of promises.

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
    },
    {
      id: 4,
      name: "Barbara Smith",
      username: "barb.smith",
      email: "barbara@example.com",
      phone: "1-555-123-4567",
      website: "barb.net",
      password: "barbara_hashed_password",
      ages: 45
    }
  ];
  
  function filterUsersByName(users, letter) {
    return new Promise((resolve, reject) => {
      const filteredUsers = users.filter(user => user.name.startsWith(letter));
      if (filteredUsers.length > 0) {
        resolve(filteredUsers);
      } else {
        reject("No users found with names starting with " + letter);
      }
    });
  }
  
  function sumAges(users) {
    return new Promise((resolve, reject) => {
      const totalAges = users.reduce((sum, user) => sum + user.ages, 0);
      resolve(totalAges);
    });
  }
  
  function findNameAges(users, letter) {
    filterUsersByName(users, letter)
      .then(filteredUsers => {
        return sumAges(filteredUsers);
      })
      .then(totalAges => {
        console.log("Total ages of users with names starting with '" + letter + "': " + totalAges);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  
  findNameAges(users, 'B');
  
