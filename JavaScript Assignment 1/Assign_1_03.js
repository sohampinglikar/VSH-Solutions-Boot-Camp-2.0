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
  
  function display(users) {
    const userFields = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
    }));
  
    userFields.forEach((user) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}`);
    });
  }
  
  // Call the function to display the selected fields for all records
  display(users);
  