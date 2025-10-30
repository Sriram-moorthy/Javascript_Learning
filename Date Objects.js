// Date
let date =new Date();
console.log(`Current Date and Time: ${date.toString()}`); // Output: Current date and time  

// Get Full Year
const fullYear = date.getFullYear();
console.log(`Full Year: ${fullYear}`); // Output: Current year (e.g., 2024)

// Get Month (0-11)
const month = date.getMonth()+1;
console.log(`Month (0-11): ${month}`); // Output: Current month (0 for January, 11 for December)

// Get Date (1-31)
const day = date.getDate();
console.log(`Date (1-31): ${day}`); // Output: Current date of the month

// Get Day of the Week (0-6)
const dayOfWeek = date.getDay();
console.log(`Day of the Week (0-6): ${dayOfWeek}`); // Output: Current day of the week (0 for Sunday, 6 for Saturday)

// Get Hours (0-23)
const hours = date.getHours();
console.log(`Hours (0-23): ${hours}`); // Output: Current hours
// Get Minutes (0-59)
const minutes = date.getMinutes();
console.log(`Minutes (0-59): ${minutes}`); // Output: Current minutes

// Get Seconds (0-59)
const seconds = date.getSeconds();
console.log(`Seconds (0-59): ${seconds}`); // Output: Current seconds

date.setFullYear(2025, 11, 25); // Set to December 25, 2025
console.log(`Updated Date: ${date.toString()}`); // Output: Updated date

//Set Month
date.setMonth(0); // Set to January
console.log(`Updated Month: ${date.toString()}`); // Output: Updated date with new month    

//Local Date String
const localDateString = date.toLocaleDateString();
console.log(`Local Date String: ${localDateString}`); // Output: Localized date string
