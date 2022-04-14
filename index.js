// function that will retrieve Users from API

const retrieveUsers = async () => {
  // retrieve users from api
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // convert JSON to JavaScript object
  const userObject = await response.json();
  // return the user object
  return userObject;
};
