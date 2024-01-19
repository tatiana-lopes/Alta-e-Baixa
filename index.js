
function cellsToAnimate() {
    const intactRow = 9;
    const cellNr = 126;
    //fill an array from 0 to 125
    const cellArray = [...Array(cellNr).keys()];
    let cell;
    //fill an array of the cells to be removed
    const spliceArray = [];
    for (let i = 0; i < intactRow; i++) {
        if (i == 0) {
            cell = 6;
        }
        spliceArray.push(cell);
        cell = cell + 1;
        spliceArray.push(cell);
        cell = cell + 13;
    }
    // Iterate over the indices in reverse order and remove elements
    for (let i = spliceArray.length - 1; i >= 0; i--) {
        const indexToRemove = spliceArray[i];
        cellArray.splice(indexToRemove, 1);
    }
    return cellArray;
}

let cellArray = cellsToAnimate();
const gridItems = document.querySelectorAll(".grid-item");
const leftPanel = document.getElementById('leftPanel');
const rightPanel = document.getElementById('rightPanel');

// Continuous fade-in and fade-out animation
function animateVisibility() {
    const duration = 3000; // in milliseconds
    const fadeInOutDelay = 1000; // in milliseconds
    let id1 = cellArray[Math.floor(Math.random() * cellArray.length)];
    console.log('test ', id1);
    let id2 = cellArray[Math.floor(Math.random() * cellArray.length)];
    while (id1 == id2) {
        id2 = cellArray[Math.floor(Math.random() * cellArray.length)];
    }
    gridItems[id1].style.opacity = "0";
    gridItems[id1].style.cssText = 'opacity: 0; transition: opacity 0.3s linear;';
    gridItems[id2].style.opacity = "1";
    gridItems[id2].style.cssText = 'opacity: 1; transition: opacity 0.3s linear;';

    // Wait for fadeInOutDelay milliseconds
    setTimeout(() => {
        // Fade out
        gridItems[id1].style.cssText = 'opacity: 1; transition: opacity 0.3s linear;';
        gridItems[id2].style.cssText = 'opacity: 0; transition: opacity 0.3s linear;';

        // Wait for fadeInOutDelay milliseconds and repeat the animation
        setTimeout(animateVisibility, fadeInOutDelay);
    }, duration);
}


function animateVisibility2() {
    const duration = 2000; // in milliseconds
    const fadeInOutDelay = 500; // in milliseconds
    let id1 = cellArray[Math.floor(Math.random() * cellArray.length)];
    console.log('test ', id1);
    let id2 = cellArray[Math.floor(Math.random() * cellArray.length)];

    while (id1 == id2) {
        id2 = cellArray[Math.floor(Math.random() * cellArray.length)];
    }
    gridItems[id1].style.opacity = "1";
    gridItems[id1].style.cssText = 'opacity: 1; transition: opacity 0.3s linear;';
    gridItems[id2].style.opacity = "1";
    gridItems[id2].style.cssText = 'opacity: 1; transition: opacity 0.3s linear;';

    // Wait for fadeInOutDelay milliseconds
    setTimeout(() => {
        // Fade out
        gridItems[id1].style.cssText = 'opacity: 0; transition: opacity 0.3s linear;';
        gridItems[id2].style.cssText = 'opacity: 0; transition: opacity 0.3s linear;';

        // Wait for fadeInOutDelay milliseconds and repeat the animation
        setTimeout(animateVisibility2, fadeInOutDelay);
    }, duration);
}

// check mouse position and show/hide panels accordingly
function checkMousePosition(event) {
    const mouseX = event.clientX;
    // Check if the mouse is in the left half of the screen
    if (mouseX <= window.innerWidth / 2) {
        leftPanel.style.display = 'block';
        rightPanel.style.display = 'none';
    } else {
        // Mouse is in the right half of the screen
        leftPanel.style.display = 'none';
        rightPanel.style.display = 'block';
    }
}

// addevent listener if on pc and not mobile
if (window.innerWidth > 620) {
    document.addEventListener('mousemove', checkMousePosition);
}
window.addEventListener('load', (event) => {
    animateVisibility();
    animateVisibility2();
});


