// select the DOM elements
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

year.textContent = `&copy; ${today.getFullYear()}`;
lastModified.textContent = `Last modified: ${document.lastModified}`;
