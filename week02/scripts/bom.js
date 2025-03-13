/*In your blank js file, 
declare three (3) variables 
that hold references to the input, button, 
and list elements.
*/
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

//Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a chapter title.");
    input.focus();
    return;
  } else {
    //Create a li element that will hold each entry's chapter title and an associated delete button.
    const li = document.createElement("li");
    //Create a delete button
    const deleteButton = document.createElement("button");

    //Populate the li element variable's textContent or innerHTML with the input value.
    li.textContent = input.value;

    //Populate the delete button textContent with a ❌
    deleteButton.textContent = "❌";

    //Append the li element variable with the delete button
    li.append(deleteButton);

    //Append the li element variable to the unordered list in your HTML.
    list.append(li);

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", () => {
      // Remove the li element when the delete button is clicked
      li.remove();
      //Change the input value to nothing or the empty string to clean up the interface for the user.
      input.value = "";
    });

    //Whether or not a list item was created, the focus (active cursor) should be sent to the input element.
    input.focus();
  }
});
