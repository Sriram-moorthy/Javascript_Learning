let promise=new Promise((resolve,reject)=>{
  let data=true;
  if(data){
    resolve("Promise resolved successfully");
  }
  else{
    reject("Promise rejected");
  }
})
promise.then((message)=>{
  console.log(message);
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log("Promise execution completed");
});


// Promise Explanation:
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It allows you to write asynchronous code in a more manageable way, avoiding callback hell.

// The Promise constructor takes a function with two parameters: resolve and reject.
// - resolve: A function that is called when the asynchronous operation is successful. It can pass a value to the next .then() handler.
// - reject: A function that is called when the asynchronous operation fails. It can pass an error message to the .catch() handler.

function fetchProfile(sucess,reject){
  let data=true;
  if(data){
    sucess("Profile data fetched successfully");
  } else{
    reject("Failed to fetch profile data");
  }
}

// Callback hell: If we had multiple nested asynchronous operations, it would lead to deeply nested callbacks, making the code hard to read and maintain.We can avoid this using Promises.
fetchProfile((message)=>{
  console.log(message);

  fetchProfile((message)=>{
    console.log("Nested: "+message);
  }, (error)=>{
    console.log(error);
  });
}, (error)=>{
  console.log(error);
});


// Let's rewrite the above code using Promises to avoid callback hell.
let fetchProfilePromise=new Promise((resolve,reject)=>{
  let data=true;
  if(data){
    resolve("Promise-based profile data fetched successfully");
  }else{
    reject("Promise-based failed to fetch profile data");
  }
})

fetchProfilePromise.then((message)=>{
  console.log(message);
  return "Chained promise executed";
}).then((chainedMessage)=>{
  console.log(chainedMessage);
}).catch(()=>{
  console.log("Error in fetching profile data");
}).finally(()=>{
  console.log("Profile fetch operation completed");
});
// The .then() method is used to handle the resolved value of the Promise.
// The .catch() method is used to handle any errors that occur during the Promise execution.
// The .finally() method is executed regardless of whether the Promise was resolved or rejected, allowing for cleanup operations.

// This way, Promises help in writing cleaner and more maintainable asynchronous code.
// Here we use promise insteasd of callback functions to handle asynchronous operations.

