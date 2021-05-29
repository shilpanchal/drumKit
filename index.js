for(var i =0 ; i < document.querySelectorAll("button").length ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){handleClick(this.innerHTML); buttonAnimation(this.innerHTML);})
}

document.addEventListener("keydown", function(event){handleClick(event.key); buttonAnimation(event.key);})

function handleClick(key){
    switch(key){
    case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        break;
    case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        break;
    case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        break;
    case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        break;
    case "j":
        var audio = new Audio('sounds/snare.mp3');
        break;
    case "k":
        var audio = new Audio('sounds/crash.mp3');
        break;
    case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        break;
   default:
       console.log(event.key)
        
    }
    audio.play();
    
}

function buttonAnimation(key)
{
    document.querySelector("." + key).classList.add("pressed")

    setTimeout(function(){  document.querySelector("." + key).classList.remove("pressed")}, 100);
}