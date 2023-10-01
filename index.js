//alert("ok");
var key;
var butGroup = document.querySelectorAll("button.drum");
var n = butGroup.length;
for(var i=0; i<n; i++) {
    //alert("hello");
    butGroup[i].addEventListener("click",function(){
      key=this.innerHTML;        
      handleClick(key);
      buttonAnimation(key);    
    });
    
}
document.addEventListener("keydown",
              function(e){ var key=e.key;
                handleClick(key);
                buttonAnimation(key);
                 });

s
function handleClick(pressedKey){
      //key=this.innerHTML;
    //this.style.color="white";
    
    //this.innerHTML
    switch (pressedKey) {
      case "w":
        var audio=new Audio("./sounds/tom-1.mp3");
        audio.play();

        break;
      case "a":
          var audio=new Audio("./sounds/tom-2.mp3");
          audio.play();
  
        break;  
      case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
    
        break; 
        case "d":
          var audio=new Audio("./sounds/tom-4.mp3");
          audio.play();
  
          break;
        case "j":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
    
          break;  
        case "k":
              var audio=new Audio("./sounds/crash.mp3");
              audio.play();
      
          break; 
          case "l":
              var audio=new Audio("./sounds/kick-bass.mp3");
              audio.play();
      
          break; 
    
    
      default:
        console.log(pressedKey);
        break;
      }
  
      
}
function buttonAnimation(currentKey){

  var activeButtion = document.querySelector("."+currentKey);
  activeButtion.classList.add("pressed");
  setTimeout(function(){activeButtion.classList.remove("pressed");},100);



}