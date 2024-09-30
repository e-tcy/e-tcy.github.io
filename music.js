const music = document.getElementById('music');
const playButton = document.getElementById('playButton');
const rerollButton = document.getElementById('rerollButton');
let filename = ""
const musicFiles = ['music\\choppy.ogg', 'music\\trap.ogg', 'music\\hyperpop.ogg', 'music\\demo.mp3', 'music\\adm1t.mp3'];

function randPick() {
    const random = Math.floor(Math.random() * musicFiles.length)
    music.src = musicFiles[random]
    music.volume = 0.05 
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

rerollButton.addEventListener('click', function() {
    randPick()
    music.play()
    document.getElementById('playButton').src = 'assets/pause.webp';
    document.getElementById('music-player').innerHTML = `now playing: ${filename}`;
    console.log('rerolled')
})

randPick()
music.pause()
document.getElementById('music-player').innerHTML = `paused: ${filename}`;