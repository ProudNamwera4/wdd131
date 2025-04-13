let userName = localStorage.getItem("userName");
let userEmail = localStorage.getItem("userEmail");
if (userName != null) {
  document.getElementById(
    "thankyou-meassage"
  ).innerHTML = `${userName} is now a City Academy FC player. We will contact you with more information via email on : <a href="">${userEmail}</a>.`;
}
