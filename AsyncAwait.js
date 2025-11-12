// Asyncawait means to write asynchronous code in a synchronous manner using async and await keywords.
// Await means to wait for a Promise to resolve or reject before moving to the next line of code.If a promise without means it will exxecute after the synchronous code is executed.Using await we can make the promise to execute before the synchronous code.
// Await will recieve only the resolved value of the promise.if the promise is rejected it will throw an error which can be caught using try catch block.

let newpromise=new Promise((resolve,reject)=>{
  let data=true;
  if(data){
    resolve("Promise resolved successfully");
  }else{
    reject("Promise rejected");
  }
})

let message=await newpromise;
  console.log(message);
console.log("Synchronous code executed after await");

// In the above code,newpromise is created which resolves successfully.await is used to wait for the promise to resolve before moving to the next line of code which logs the message.then the synchronous code is executed.
// If we use false state in the promise it will throw an error which can be caught using try catch block.

let newpromise2=new Promise((resolve,reject)=>{
  let data=false;
  if(data){
    resolve("Promise resolved successfully");
  }else{
    reject("Promise rejected");
  }
})

try{
  let message2=await newpromise2;
  console.log(message2);
}
catch(error){
  console.log(error);
}
finally{
  console.log("Promise execution completed");
}
// In the above code,try catch block is used to catch the error thrown by the rejected promise.finally block is used to execute the code after the promise is settled(whether resolved or rejected).But the code is executed in a synchronous manner using await.

// Let make it asynchronous using async function.
// For that we need to wrap the code inside an async function.

let newpromise3=new Promise((resolve,reject)=>{
  let data=true;
  if(data){
    resolve("Promise resolved successfully using async await");
  }
  else{
    reject("Promise rejected");
  }
})

async function asyncAwaitExample(){
  try{
    let message3=await newpromise3;
    console.log(message3);
  }
  catch(error){
    console.log(error);
  }
  finally{
    console.log("Promise execution completed using async await");
  }
}
asyncAwaitExample();
console.log("Synchronous code executed before async function call");

// In the above code,asyncAwaitExample is an async function which uses await to wait for the promise to resolve or reject.before calling the async function,the synchronous code is executed.first.then the async function is called which executes the promise in a synchronous manner using await.

// We can throw error explicitly inside the async function using throw keyword from the rejected promise.
let newpromise4=new Promise((resolve,reject)=>{
  let data=false;
  if(data){
    resolve("Promise resolved successfully using async await with throw");
  } else{
    throw new Error("Promise rejected using throw");
  }
})
async function asyncAwaitExampleWithThrow(){
  try{
    let message4=await newpromise4;
    console.log(message4);
  }
  catch(error){
    console.log(error);
  }
  finally{
    console.log("Promise execution completed using async await with throw");
  }
}
asyncAwaitExampleWithThrow();
console.log("Synchronous code executed before async function call with throw"); 

// In the above code,newpromise4 is created which throws an error using throw keyword from the rejected promise.asyncAwaitExampleWithThrow is an async function which uses await to wait for the promise to resolve or reject.before calling the async function,the synchronous code is executed.first.then the async function is called which executes the promise in a synchronous manner using await and catches the thrown error using catch block.

// Summary:
// Asyncawait is a way to write asynchronous code in a synchronous manner using async and await keywords.await is used to wait for a promise to resolve or reject before moving to the next line of code.try catch block is used to catch errors thrown by rejected promises.finally block is used to execute code after the promise is settled(whether resolved or rejected.
