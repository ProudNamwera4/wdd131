document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("user-email").value;

    localStorage.setItem("userName", `${firstName} ${lastName}`);
    localStorage.setItem("userEmail", email);
  window.location.href = "thank-you.html";
});
