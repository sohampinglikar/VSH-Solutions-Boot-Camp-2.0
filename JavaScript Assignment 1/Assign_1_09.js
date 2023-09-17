// Write a function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING


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

function sortUsersByName(data, order) {
    if (order === 'ASC') {
      data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (order === 'DESC') {
      data.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return data;
  }
  

// ascending order
const sortedUsersAsc = sortUsersByName(users, 'ASC');
console.log("Sorted in ASC order:");
console.log(sortedUsersAsc);

// descending order
const sortedUsersDesc = sortUsersByName(users, 'DESC');
console.log("Sorted in DESC order:");
console.log(sortedUsersDesc);
