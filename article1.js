window.addEventListener('scroll', handleScroll);

function handleScroll() {
    const scrollPosition = window.scrollY;
    const row1 = document.getElementsByClassName('article1-row1');
    const row2 = document.getElementsByClassName('article1-row2');
    const row3 = document.getElementsByClassName('article1-row3');
    const row4 = document.getElementsByClassName('article1-row4');
    const row5 = document.getElementsByClassName('article1-row5');
    const row6 = document.getElementsByClassName('article1-row6');
    const row7 = document.getElementsByClassName('article1-row7');
    const row8 = document.getElementsByClassName('article1-row8');
    const row9 = document.getElementsByClassName('article1-row9');
    
   
   // Get the total scrollable height of the page
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

   // Calculate the current scroll position percentage
    const scrollPositionPercentage = (scrollPosition / totalScrollableHeight) * 100;
   
    // Check if each grid item is in the viewport
    if (scrollPositionPercentage > 5) {
       
      for (let i = 0; i < row1.length; i++) {
        row1[i].classList.add('fade-in');
      }
    }

    if (scrollPositionPercentage >  20) {
        for (let i = 0; i < row2.length; i++) {
            row2[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  30) {
        for (let i = 0; i < row3.length; i++) {
            row3[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  40) {
        for (let i = 0; i < row4.length; i++) {
            row4[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  50) {
        for (let i = 0; i < row5.length; i++) {
            row5[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  60) {
        for (let i = 0; i < row6.length; i++) {
            row6[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  70) {
        for (let i = 0; i < row7.length; i++) {
            row7[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  80) {
        for (let i = 0; i < row8.length; i++) {
            row8[i].classList.add('fade-in');
          }
    }

    if (scrollPositionPercentage >  90) {
        for (let i = 0; i < row9.length; i++) {
            row9[i].classList.add('fade-in');
          }
    }
}

function calculateScrollableHeight() {
  let totalScrollableHeight = document.querySelector('main').scrollHeight;
    //apply the sidebar height
    let sidebar = document.getElementById('sideBar');
    sidebar.style.height = totalScrollableHeight + "px";
}
function goToMainPage() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", calculateScrollableHeight());


function toggleText(...elementIds) {
  for (const elementId of elementIds) {
      var textElement = document.getElementById(elementId);
     // var buttonText = document.querySelector(`button[onclick="toggleText(${elementIds.map(id => `'${id}'`).join(', ')})"]`);
      var readMore = document.getElementById('readMore');
      var gridIntro = document.getElementById('article1-intro');
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