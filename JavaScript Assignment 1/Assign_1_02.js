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

  
  function addFirst(users, temp) {
    // Use the spread operator to create a new array with the new record at the beginning
    const updatedUsers = [temp, ...users];
    return updatedUsers;
  }
  
  // Usage example:
  const newRecord = {
    id: 1,
    name: "New User",
    username: "new.user",
    email: "newuser@example.com",
    phone: "1-234-567-8901",
    website: "newuser.net",
    password: "new_hashed_password",
    ages: 28
  };
  
  const updatedUsers = addFirst(users, newRecord);
  console.log(updatedUsers);
  