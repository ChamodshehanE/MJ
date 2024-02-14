document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("valentines-messages").style.animation =
      "revealAnimation 2s forwards";
  }, 3500); // Adjust the delay as needed

  var happyValentinesElement = document.getElementById("happy-valentines");
  var loveYouElement = document.getElementById("love-you");

  happyValentinesElement.classList.add("fadeIn");
  loveYouElement.classList.add("fadeIn");
});

function redirectToAnotherPage() {
  // Redirect to the flowers.html page in the "D" folder on the desktop
  window.location.href = 'file:///C:/Users/User/OneDrive/Desktop/D/flowers.html';
}
