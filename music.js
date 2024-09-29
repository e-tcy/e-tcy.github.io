const music = document.getElementById('music');
const playButton = document.getElementById('playButton');
let filename = ""
const musicFiles = ["music\\choppy.ogg", "music\\trap.ogg", "music\\hyperpop.ogg"]

function randPick() {
    const random = Math.floor(Math.random() * musicFiles.length)
    music.src = musicFiles[random]
    music.volume = 0.25
    music.play()
    music.pause()
    filename = music.src.split('\\').pop();
    document.getElementById('music-player').innerHTML = `now playing: ${filename}`;
}

playButton.addEventListener('click', function() {
    if (music.muted) {
        music.muted = false;
        music.play()
        document.getElementById('playButton').src = 'assets/pause.webp';
        document.getElementById('music-player').innerHTML = `now playing: ${filename}`;
        console.log('unmuted')
    }
    else if (music.paused) {
        music.play()
        document.getElementById('playButton').src = 'assets/pause.webp';
        document.getElementById('music-player').innerHTML = `now playing: ${filename}`;
        console.log('unpaused')
    }
    else if (!music.paused) {
        music.pause()
        document.getElementById('playButton').src = 'assets/play.webp';
        document.getElementById('music-player').innerHTML = `paused: ${filename}`;
        console.log('paused')
    }
    else {
        console.log('how did we get here')
    }

  });

music.addEventListener('ended', function() {
    randPick()
})

music.addEventListener('error', function() {
    randPick()
})

randPick()
document.getElementById('music-player').innerHTML = `paused: ${filename}`;