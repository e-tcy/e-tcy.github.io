const music = document.getElementById('music');
const musicFiles = ["choppy beat.ogg", "trap.ogg", "hyperpop.ogg", ]

function randPick() {
    const random = Math.floor(Math.random() * musicFiles.length)
    music.src = musicFiles[random]
    music.volume = 0.25
    music.load()
    music.play();
}

music.addEventListener('ended', function() {
    randPick()
})

music.addEventListener('error', function() {
    randPick()
})

randPick()