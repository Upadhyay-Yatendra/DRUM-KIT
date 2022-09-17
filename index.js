function makeSound(key)
{
    switch (key) 
    {
      case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "d":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "f":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var tom5 = new Audio("sounds/snare.mp3");
        tom5.play();
        break;
      case "k":
        var tom6 = new Audio("sounds/crash.mp3");
        tom6.play();
        break;
      case "l":
        var tom7 = new Audio("sounds/kick-bass.mp3");
        tom7.play();
        break;
      default:
     
        break;
  }  
}

var i = 0;
var numberOfDrums = document.querySelectorAll(".drum").length; 
// since all buttons have a class= drum
//   alert(numberOfDrums)

for ( i = 0;  i < numberOfDrums; i++ ) 
// i<7 will also work since we know no of buttons
{
  // ----------------- detecting button press-----------------------
  document.querySelectorAll(".drum")[i].addEventListener("click", function () 
  {
    makeSound(this.innerHTML);
    animate(this.innerHTML);
  });


  
  // we could have used an anonymous function here.............
}

// -----------------detecting key press--------------------------
document.addEventListener("keydown",function(event)
{
  makeSound(event.key);
  animate(event.key);
})

// this is function to animate the buttons.

function animate(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed")
    },100);
}
