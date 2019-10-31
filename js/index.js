// Your code goes here
const body = document.body;

const navSelection = document.querySelector('a');
console.log(navSelection)

// const logoSelection = document.querySelector('text-content');

const log = document.getElementById("someId")

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');


// mouseover

navSelection.addEventListener("mouseenter", function(event){
    event.target.style.color = "orange";
    setTimeout(function(){
        event.target.style.color = "";
    }, 1000);
}, false);

// keydown DOESNT WORK

document.addEventListener("keydown" , logKey);
function logKey(e) {
    log.textContent += `${e.code}`;
}

//wheel DOESNT WORK

// logoSelection.addEventListener("wheel", function(e){

//     if(e.wheelDelta>0) Scale+=0.01;
//     else Scale-=0.01

//     e.preventDefault();
// });

// drag / drop



//load


//focus


//resize

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//scroll
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

//select


//dblclick


