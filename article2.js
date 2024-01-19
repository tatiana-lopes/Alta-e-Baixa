//when the aside is clicked then redirect to another page
function goToMainPage() {
  window.location.href = "index.html";
}

function toggleTextVisibility(readMoreElementId, dotsElementId, moreTextElements) {
  let btnText = document.getElementById(readMoreElementId);
  let dots = document.getElementById(dotsElementId);
  let moreText = document.getElementsByClassName(moreTextElements);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    for (const moreTextElement of moreText) {
      moreTextElement.style.display = "none";
    }

  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    for (const moreTextElement of moreText) {
      moreTextElement.style.display = "inline";
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
