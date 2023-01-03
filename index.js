const card = document.querySelectorAll(".card")

for(let i = 0; i < card.length; i++){
  card[i].addEventListener( 'click', function() {
  card[i].classList.toggle('flipCard');
});
}

let imgA = document.querySelectorAll(".img")
let prevX, prevY = 0;
let moveXAmount,moveYAmount = 0;

document.addEventListener("mousemove", function(e){
  mousePosition(e);
})

function mousePosition(e){
  moveXAmount = e.pageX - prevX;
  moveYAmount = e.pageY - prevY;

  moveImg(moveXAmount, moveYAmount)
    
  prevX = e.pageX;
  prevY = e.pageY;
  
}

function moveImg(xAmount, yAmount){
  imgA.forEach(function(img){
    let movementStgt = 5 + (Math.random() * 10);
    img.style.left = (img.offsetLeft) - (xAmount/movementStgt) + "px";
    img.style.top = (img.offsetTop) - (yAmount/movementStgt) + "px";
  })
}

var tLine = gsap.timeline ()
.to('.img',{
  x: "random(-5, 10, 2)",
  y: "random(-5, 10, 3)",
  duration:2,
  ease:"none",
  repeat:-1,
  repeatRefresh:true 
})