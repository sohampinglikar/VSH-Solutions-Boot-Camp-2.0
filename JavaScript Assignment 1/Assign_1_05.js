//  Write a function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(users,'B')
// HINT : Use filter and string functions.


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
        id: 7,
        name: "Baboon",
        username: "baboon.teeeth2",
        email: "baboon43@yahoo.com",
        phone: "1-563-675-1857 x11799",
        website: "baboon.net",
        password: "baboon_password",
        ages: 27
      }
  ];
  
function findSpecificStartChar(users, startChar) {
    // Use the filter method to filter users whose names start with the specified character
    const filteredUsers = users.filter(user => user.name.charAt(0).toLowerCase() === startChar.toLowerCase());
  
    // Display the filtered users
    filteredUsers.forEach(user => {
      console.log(`ID: ${user.id}`);
      console.log(`Name: ${user.name}`);
      console.log(`Username: ${user.username}`);
      console.log(`Email: ${user.email}`);
      console.log(`Phone: ${user.phone}`);
      console.log(`Website: ${user.website}`);
      // You might want to avoid displaying passwords here for security reasons
      // console.log(`Password: ${user.password}`);
      console.log(`Age: ${user.ages}`);
      console.log('-------------------------');
    });
  }
  
  // Example usage:
  findSpecificStartChar(users, 'B');
  