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
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();

    //Whether or not a list item was created, the focus (active cursor) should be sent to the input element.
    input.focus();
  }
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  //Create a li element that will hold each entry's chapter title and an associated delete button.
  let li = document.createElement("li");
  //Create a delete button
  let deleteButton = document.createElement("button");

  //Populate the li element variable's textContent or innerHTML with the input value.
  li.textContent = item;

  //Populate the delete button textContent with a ❌
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  //Append the li element variable with the delete button
  li.append(deleteButton);

  //Append the li element variable to the unordered list in your HTML.
  list.append(li);

  // Add an event listener to the delete button
  deleteButton.addEventListener("click", () => {
    // Remove the li element when the delete button is clicked
    li.remove(); //list.removeChild(deleteButton);
    deleteChapter(li.textContent);
    //Change the input value to nothing or the empty string to clean up the interface for the user.
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
