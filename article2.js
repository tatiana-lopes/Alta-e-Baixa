function calculateScrollableHeight() {
  let totalScrollableHeight = document.querySelector('main').scrollHeight;
  
  console.log(totalScrollableHeight);

    //apply the sidebar height
    let sidebar = document.getElementById('sideBar');
    //sidebar.style.height = totalScrollableHeight + "px";
}

//when the aside is clicked then redirect to another page
function goToMainPage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", calculateScrollableHeight());

function toggleTextVisibility(readMoreElementId, dotsElementId ,moreTextElements) {
  let btnText = document.getElementById(readMoreElementId);
  let dots = document.getElementById(dotsElementId);
  let moreText = document.getElementsByClassName(moreTextElements);
  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      for(const moreTextElement of moreText){
        moreTextElement.style.display = "none";
      }
     
   }else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    for(const moreTextElement of moreText){
      moreTextElement.style.display = "inline";
    }
   }
}


window.addEventListener('scroll', handleScroll);

function handleScroll() {
    let scrollPosition = window.scrollY;
    const row1 = document.getElementsByClassName('article1-row1');
    const sections = document.getElementsByTagName('section');
  

    const row2 = document.getElementsByClassName('article1-row2');
    const row3 = document.getElementsByClassName('article1-row3');
    const row4 = document.getElementsByClassName('article1-row4');
    const row5 = document.getElementsByClassName('article1-row5');
    const row6 = document.getElementsByClassName('article1-row6');
    const row7 = document.getElementsByClassName('article1-row7');
    const row8 = document.getElementsByClassName('article1-row8');
    const row9 = document.getElementsByClassName('article1-row9');
    
    const offsetScroll = 250;

    let scroll = scrollPosition + offsetScroll;
   
   // Get the total scrollable height of the page
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

   // Calculate the current scroll position percentage
    const scrollPositionPercentage = (scrollPosition / totalScrollableHeight) * 100;
    console.log(scrollPosition);
    console.log(scroll);
    console.log(sections[1].scrollHeight);
    console.log(sections[1].getBoundingClientRect().top)

    let sectionPos = sections[1].getBoundingClientRect()
    console.log(sectionPos.top - sectionPos.height);

    /*
    for(let section of sections){
      if(section.getBoundingClientRect().top - section.getBoundingClientRect().height <120){

        section.classList.add('fade-in');
      }

      if(sections[sections.length -2].getElementsByClassName('fade-in')){
        sections[sections.length -1].classList.add('fade-in')

      }

      for (let i = 1; i < sections.length; i++) {
        const currentSection = sections[i];
        const previousSection = sections[i - 1];
    
        if (currentSection.getBoundingClientRect().top < previousSection.getBoundingClientRect().bottom + 120) {
            currentSection.classList.add('fade-in');
        }
    }*/

   

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

function calculateSideBarCrop(){
  let aside = document.getElementById('sideBar');

}
