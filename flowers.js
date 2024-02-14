

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };



document.addEventListener('DOMContentLoaded', function () {
    // Parse the URL to check for the 'visited' parameter
    const urlParams = new URLSearchParams(window.location.search);
    const visitedOpeningPage = urlParams.get('visited');

    // Show the opening page if it has not been visited
    if (!visitedOpeningPage) {
        document.querySelector('.opening-page').style.opacity = '1';
    }
});
