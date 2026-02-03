'use strict';
console.log('Hello world');

// ----- Step 2 starts here -----

// create a variable for first name
let firstName = "Lalita";

// create a variable for last name
let lastName = "Chaelee";

// create a variable for full name
let fullName = firstName + " " + lastName;

// select <h1> and update content with full name
let heading = document.querySelector("h1");
heading.textContent = fullName;

// select #age and update with your current age
let age = 14;
let ageParagraph = document.querySelector("#age");
ageParagraph.textContent = "Age: " + age;

// create a new paragraph after #age
let futureParagraph = document.createElement("p");
futureParagraph.textContent =
  "In 20 years, I will be " + (age + 20) + " years old.";

ageParagraph.after(futureParagraph);