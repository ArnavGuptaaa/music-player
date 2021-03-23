// song object

var songs = [
    {
        title: "Dont Cry",
        artist: "Sashimi",
        imgSrc: "./Static/images/cover2.jpg",
        src: "./Static/audio/dontcry.mp3",
    },
    {
        title: "5:32pm",
        artist: "Deli",
        imgSrc: "./Static/images/cover1.jpg",
        src: "./Static/audio/5 32.mp3",
    },
    {
        title: "Honey",
        artist: "Kid Polo",
        imgSrc: "./Static/images/cover3.jpg",
        src: "./Static/audio/honey.mp3",
    }
];

// change title and aritst dynamically

function changeData(index){
    let title = document.querySelector('#title');
    let artist = document.querySelector('#artist');
    let thumbnail = document.querySelector('#thumbnail');
    let audio = document.querySelector('#music');

    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    thumbnail.src = songs[index].imgSrc;

    audio.src = songs[index].src;
    console.log(audio);
}

// default call
var index = 0;
changeData(0);


//song controls
var isPlaying = false
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const audio = document.querySelector('#music');

play.addEventListener('click', () => {
    audio.play();
    isPlaying = true;

    play.style = 'display: none;';
    pause.style = 'display: inline';
});

pause.addEventListener('click', () => {
    audio.pause();
    isPlaying = false;

    play.style = 'display: inline;';
    pause.style = 'display: none;';
});

next.addEventListener('click', () => {
    index = (index+1) % songs.length; 
    
    changeData(index);
    // console.log(audio);
    audio.play();
    play.style = 'display: none;';
    pause.style = 'display: inline';
});

previous.addEventListener('click', () => {
    if(index == 0){
        index = songs.length-1;
    }else{
        index--;
    }

    changeData(index);
    audio.play();

    play.style = 'display: none;';
    pause.style = 'display: inline';
});
