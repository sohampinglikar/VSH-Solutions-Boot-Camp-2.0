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
  
  function addLast(users, temp) {
    // Use the spread operator to create a new array with the existing users and the new record.
    const updatedUsers = [...users, temp];
  
    return updatedUsers;
  }
  
  // Usage example:
  const newUser = {
    id: 4,
    name: "New User",
    username: "new_user",
    email: "newuser@example.com",
    phone: "1-234-567-8900",
    website: "newuser.net",
    password: "new_hashed_password",
    ages: 29
  };
  
  const updatedUsers = addLast(users, newUser);
  console.log(updatedUsers);
  