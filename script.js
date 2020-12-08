document.addEventListener("keydown", function(event){
    /* White Keys */
    if (event.code === 'KeyA') {
        let audio = new Audio('white_keys/A.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'A' key is pressed");
    } else if (event.code === 'KeyS'){
        let audio = new Audio('white_keys/S.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'S' key is pressed");
    } else if (event.code === 'KeyD'){
        let audio = new Audio('white_keys/D.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'D' key is pressed");
    } else if (event.code === 'KeyF'){
        let audio = new Audio('white_keys/F.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'F' key is pressed");
    } else if (event.code === 'KeyG'){
        let audio = new Audio('white_keys/G.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'G' key is pressed");
    } else if (event.code === 'KeyH'){
        let audio = new Audio('white_keys/H.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'H' key is pressed");
    } else if (event.code === 'KeyJ'){
        let audio = new Audio('white_keys/J.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'J' key is pressed");
    }
    /* Black Keys */
    else if (event.code === 'KeyW'){
        let audio = new Audio('black_keys/W.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'W' key is pressed");
    } else if (event.code === 'KeyE'){
        let audio = new Audio('black_keys/E.mp3');
        let played = audio.play();
        if (played){
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'E' key is pressed");
    } else if (event.code === 'KeyT'){
        let audio = new Audio('black_keys/T.mp3');
        let played = audio.play();
        if (played){
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'T' key is pressed");
    } else if (event.code === 'KeyY'){
        let audio = new Audio('black_keys/Y.mp3');
        let played = audio.play();
        if (played){
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'Y' key is pressed");
    } else if (event.code === 'KeyU') {
        let audio = new Audio('black_keys/U.mp3');
        let played = audio.play();
        if (played) {
            console.log("Audio Played for key " + event.key);
        } else {
            console.log("Audio Failed to Played for key " + event.key);
        }
        console.log("The 'U' key is pressed");
    } else {
        console.log("The " + event.key + " key is pressed");
    }
});