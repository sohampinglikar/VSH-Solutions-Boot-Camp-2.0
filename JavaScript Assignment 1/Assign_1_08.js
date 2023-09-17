//Write a function to display sum of all ages of records having name starting with 'J'



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

function sumAgesOfNamesStartingWithJ(users) {
    let sum = 0;
    for (const user of users) {
      if (user.name.charAt(0).toUpperCase() === 'J') {
        sum += user.ages;
      }
    }
    return sum;
  }

const totalAges = sumAgesOfNamesStartingWithJ(users);
console.log("Total ages of records with names starting with 'J':", totalAges);
