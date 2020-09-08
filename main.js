// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        playNoise('clap', 'A')
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        playNoise('hihat', 'S')
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        playNoise('kick', 'D')
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        playNoise('openhat', 'f')
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        playNoise('boom', 'G')
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        playNoise('ride', 'H')
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        playNoise('snare', 'J')
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        playNoise('tom', 'K')
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
       playNoise('tink', 'L')
    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

function playNoise (n1, k1) {
    let audio = document.getElementById(n1);
        audio.currentTime = 0;
        audio.play();
        document.getElementById(k1).classList.add("playing");
}