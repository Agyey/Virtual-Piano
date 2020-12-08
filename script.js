document.addEventListener("keydown", function(event){
    if (event.code == 'KeyA'){
        audio = new Audio('sounds/A.mp3')
        audio.play()
        console.log("The 'A' key is pressed")
    } else if (event.code == 'KeyS'){
        audio = new Audio('sounds/S.mp3')
        audio.play()
        console.log("The 'S' key is pressed")
    } else if (event.code == 'KeyD'){
        audio = new Audio('sounds/D.mp3')
        audio.play()
        console.log("The 'D' key is pressed")
    } else if (event.code == 'KeyF'){
        audio = new Audio('sounds/F.mp3')
        audio.play()
        console.log("The 'F' key is pressed")
    } else if (event.code == 'KeyG'){
        audio = new Audio('sounds/G.mp3')
        audio.play()
        console.log("The 'G' key is pressed")
    } else if (event.code == 'KeyH'){
        audio = new Audio('sounds/H.mp3')
        audio.play()
        console.log("The 'H' key is pressed")
    } else if (event.code == 'KeyJ'){
        audio = new Audio('sounds/J.mp3')
        audio.play()
        console.log("The 'J' key is pressed")
    } else {
        console.log("The " + event.key + " key is pressed")
    }
});