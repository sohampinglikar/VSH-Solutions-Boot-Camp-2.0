// Write a promise function which will display sum of all ages.
// function Name ---> findSumAges(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use reduce functions.


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

function findSumAges(users) {
  return new Promise((resolve, reject) => {
    if (!users || users.length === 0) {
      reject("NO RECORDS FOUND");
    } else {
      const sumOfAges = users.reduce((total, user) => total + user.ages, 0);
      resolve([sumOfAges]);
    }
  });
}

findSumAges(users)
  .then((result) => {
    console.log("Sum of ages:", result[0]);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
