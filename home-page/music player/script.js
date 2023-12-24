const audioPlayer = document.getElementById('audioPlayer');
const musicFiles = [
    'music/Last Christmas - Wham!.m4a',
    'music/Santa Claus Is Coming To Town - Jackson 5.m4a',
    'music/Santa Tell Me - Ariana Grande.m4a',
    'music/spotifydown.com - Deck The Halls.mp3',
    'music/spotifydown.com - Northern Lights.mp3',
    'music/spotifydown.com - Shut Up and Dance.mp3',
    'music/spotifydown.com - Snowman - Sped Up Version.mp3',
    'music/spotifydown.com - ただ声一つ.mp3'
];
let currentIndex = 0; // Keep track of the current song index

// Function to play a random song
function playRandomSong() {
    currentIndex = Math.floor(Math.random() * musicFiles.length);
    playSongAtIndex(currentIndex);
}

// Function to play a song at a specific index
function playSongAtIndex(index) {
    const currentSong = musicFiles[index];
    audioPlayer.src = currentSong;
    audioPlayer.play();
}

// Function to pause the currently playing song
function pauseSong() {
    audioPlayer.pause();
}

// Function to play the next song
function playNextSong() {
    currentIndex = (currentIndex + 1) % musicFiles.length;
    playSongAtIndex(currentIndex);
}

// Function to play the previous song
function playPreviousSong() {
    currentIndex = (currentIndex - 1 + musicFiles.length) % musicFiles.length;
    playSongAtIndex(currentIndex);
}

// Event listener for the end of a song
audioPlayer.addEventListener('ended', playNextSong);

// Play the first song
playRandomSong();
