// function that will retrieve Users from API

const retrieveUsers = async () => {
  // retrieve users from api
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // convert JSON to JavaScript object
  const userObject = await response.json();
  // return the user object
  return userObject;
};

// function that appends users to the DOM

const appendUsers = (array) => {
  // target the user container div element
  let userContainer = document.querySelector('.users--container');
  // loop over array and create DOM elements
  array.forEach((user) => {
    // create div that surrounds user name
    let nameContainer = document.createElement('div');
    // add class to name container
    nameContainer.classList.add('name--container');
    // insert user name into container
    nameContainer.textContent = `${user.name}`;
    // append contents to DOM
    userContainer.appendChild(nameContainer);
  });
};

// main function that runs the app
const app = async () => {
  // declare userObject Variable
  let userObject;
  // try to retreive API data
  try {
    //create user object using retrieve users object
    userObject = await retrieveUsers();
    // alert error if fetch is not successful
  } catch (e) {
    alert('Error!');
  }
  appendUsers(userObject);
};

app();
