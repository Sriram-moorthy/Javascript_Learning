//The fetch function in JavaScript returns a promise, allowing asynchronous communication with the server. To use it, you must pass the API endpoint (URL) as an argument to the fetch function. Since it returns a promise, you should handle the response using .then() for success and .catch() for error handling.

//This approach ensures that the data is retrieved efficiently and any potential errors during the request are properly managed.

fetch("https://fakestoreapi.com/users").
then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error.message);
})

// In the above code we used the then and catch for error handling
// The response from the sever is in json format to show in ui we convert that json format in to javascript using .json() method


// Let's see about endpoint in the API

fetch("https://fakestoreapi.com/users/abcd")
.then((first)=>{
  if(!first.ok){
    throw new Error("Data Not Found")
  }else{
     return first.json()
  }

}).then((firstdata)=>{
  console.log(firstdata)
})
.catch((error)=>{
  console.log(error.message)
})

// To handle error message we can use the ok property to throw error directly to the catch block

// Let's do using Async await

async function fetchData(){
  try{
    console.log("Starting fetch request to https://fakestoreapi.com/users");
    let response= await fetch("https://fakestoreapi.com/users/")
    console.log("Response received:", response.status, response.statusText);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`)
    }
    let data= await response.json()
    console.log("Data fetched successfully:", data)
  }
  catch(error){
    console.log("Fetch failed with error:", error.message);
    // Additional debugging: Check if it's a network error
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      console.log("Possible network issue or CORS problem. Ensure you're running in a browser environment.");
    }
  }
}

fetchData()



