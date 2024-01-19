function goToMainPage() {
  window.location.href = "index.html";
}

function toggleText(...elementIds) {
  for (const elementId of elementIds) {
      let textElement = document.getElementById(elementId);
      let readMore = document.getElementById('readMore');
      let gridIntro = document.getElementById('article1-intro');
      textElement.classList.toggle('collapsed');

      if (textElement.style.display === 'none' || textElement.style.display === '') {
          
          gridIntro.style.textCss = "grid-template-columns: 1fr 1fr;"
          textElement.style.display = 'block';
          readMore.textContent = 'Read less';
      } else {
          gridIntro.style.textCss = "grid-template-columns: 1fr;"
          textElement.style.display = 'none';
          readMore.textContent = 'Read more';
      }
  }
}


function toggleTextVisibility(readMoreElementId, dotsElementId ,moreTextElementId) {
  let dots = document.getElementById(dotsElementId);
  let moreText = document.getElementById(moreTextElementId);
  let btnText = document.getElementById(readMoreElementId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
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