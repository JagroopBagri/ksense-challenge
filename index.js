// function that will retrieve Users from API

const retrieveUsers = async () => {
  // retrieve users from api
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // convert JSON to JavaScript object
  const userObject = await response.json();
  // return the user object
  return userObject;
};

// function that retreives posts from API
let retrievePosts = async () => {
  // retrieve posts from api
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // convert JSON to JavaScript object
  const postObject = await response.json();
  // return the post object
  return postObject;
};

// function that appends users to the DOM

const appendUsers = (array, array2) => {
  // target the user container section element
  let userContainer = document.querySelector('.users--container');
  // loop over array and create DOM elements
  array.forEach((user) => {
    // create div that surrounds user name
    let nameContainer = document.createElement('div');
    // add class to name container
    nameContainer.classList.add('name--container');
    // add data attribute to name container
    nameContainer.dataset.id = user.id;
    // insert user name into container
    nameContainer.textContent = `${user.name}`;
    // append contents to DOM
    userContainer.appendChild(nameContainer);
    // add event listener to each name
    nameContainer.addEventListener('click', (e) => {
      displayPosts(e);
    });
  });
  // event listener function
  const displayPosts = (e) => {
    // target the modal container section element
    let modalContainer = document.querySelector('.modal--container');
    // loop over array of posts
    array2.forEach((post) => {
      // check to see if post matches user id
      if (post.userId === Number(e.target.getAttribute('data-id'))) {
        // create a post container
        let postContainer = document.createElement('div');
        // add class to post container
        postContainer.classList.add('post--container');
        // create post header
        let postHeader = document.createElement('div');
        // add class to post header
        postHeader.classList.add('post--header');
        // append
        postContainer.appendChild(postHeader);
        // create post title
        let postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        // append
        postHeader.appendChild(postTitle);
        let postBody = document.createElement('div');
        // add class to post body
        postBody.classList.add('post--body');
        postBody.textContent = post.body;
        // append
        postContainer.appendChild(postBody);
        // append
        modalContainer.appendChild(postContainer);
      }
    });
  };
};

// main function that runs the app
const app = async () => {
  // declare userObject Variable
  let userObject;
  // declare postObject variable
  let postObject;
  // try to retreive API data
  try {
    //create user object using retrieveUsers function
    userObject = await retrieveUsers();
    //create post object using retreivePosts function
    postObject = await retrievePosts();
    // alert error if fetch is not successful
  } catch (e) {
    alert('Error!');
  }
  console.log(userObject);
  console.log(postObject);
  appendUsers(userObject, postObject);
};

app();
