// Get the current review count from localStorage
let reviewCount = localStorage.getItem("reviewCount");

// If reviewCount is null, set it to 0
if (reviewCount === null) {
  reviewCount = 0;
} else {
  reviewCount = parseInt(reviewCount);
}

// Increment the review count
reviewCount++;

// Update the review count in localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display the review count on the page

if (document.getElementById("review-count") != null) {
  document.getElementById(
    "review-count"
  ).innerHTML = `You have completed ${reviewCount} reviews.`;
}
