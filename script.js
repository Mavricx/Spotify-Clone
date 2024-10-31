console.log("Wecome to spotify");
//Initialize the song Index
let songIndex = 0;
let songInfo = document.getElementsByClassName("songInfo");
let masterSongName = document.getElementById("masterSongName");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let audioElement = new Audio("songs/Fakira _ Sanam.mp3");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Fakira",
    filePath: "songs/Fakira _ Sanam.mp3",
    coverPath: "myCovers/1.jpg",
    songNumber: 0,
  },
  {
    songName: "Buddhu Sa Mann",
    filePath: "songs/Buddhu_Sa_Mann.mp3",
    coverPath: "myCovers/2.jpg",
    songNumber: 1,
  },
  {
    songName: "Kashmir Main Tu Kanyakumari",
    filePath: "songs/Kashmir_Main_Tu_Kanyakumari.mp3",
    coverPath: "myCovers/3.jpg",
    songNumber: 2,
  },
  {
    songName: "Cheques",
    filePath: "songs/Cheques.mp3",
    coverPath: "myCovers/4.jpg",
    songNumber: 3,
  },
  {
    songName: "One Love",
    filePath: "songs/One Love.mp3",
    coverPath: "myCovers/5.jpg",
    songNumber: 4,
  },
  {
    songName: "Valam",
    filePath: "songs/Valam.mp3",
    coverPath: "myCovers/6.jpg",
    songNumber: 5,
  }, {
    songName: "Ruaan",
    filePath: "songs/Ruaan.mp3",
    coverPath: "myCovers/7.jpg",
    songNumber: 6,
  }
  , {
    songName: "Die With a Smile",
    filePath: "songs/Die_with_a_smile.mp3",
    coverPath: "myCovers/8.png",
    songNumber: 7,
  }
  , {
    songName: "Zaroor",
    filePath: "songs/Zaroor.mp3",
    coverPath: "myCovers/9.png",
    songNumber: 8,
  }
  , {
    songName: "Saiyyan",
    filePath: "songs/Saiyyan.mp3",
    coverPath: "myCovers/10.png",
    songNumber: 9,
  }
  , {
    songName: "Kun Faya Kun",
    filePath: "songs/Kun Faya Kun.mp3",
    coverPath: "myCovers/11.png",
    songNumber: 10,
  }
  ,
  {
    songName: "Bhagg dk",
    filePath: "songs/Bhaag.mp3",
    coverPath: "myCovers/12.jpg",
    songNumber: 11,
  }
  ,
  {
    songName: "Jee Karda",
    filePath: "songs/Jee Karda.mp3",
    coverPath: "myCovers/13.jpg",
    songNumber: 12,
  }
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener("click", function (e) {
  console.log("clicked");
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//Listen To Events
audioElement.addEventListener("timeupdate", (e) => {
  // console.log(e);
  //update Seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log(progress);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", (e) => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      if (audioElement.paused || audioElement.currentTime <= 0) {
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.currentTime = 0;
        songIndex = parseInt(songs[i].songNumber);
        masterSongName.innerText = songs[i].songName;
        audioElement.src = songs[i].filePath;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        audioElement.play();
      } else {
        if (songIndex === i) {
          e.target.classList.remove("fa-pause-circle");
          e.target.classList.add("fa-play-circle");
          masterPlay.classList.remove("fa-pause-circle");
          masterPlay.classList.add("fa-play-circle");
          gif.style.opacity = 0;
          audioElement.pause();
        } else {
          makeAllPlays();
          e.target.classList.remove("fa-play-circle");
          e.target.classList.add("fa-pause-circle");
          audioElement.currentTime = 0;
          songIndex = parseInt(songs[i].songNumber);
          masterSongName.innerText = songs[i].songName;
          audioElement.src = songs[i].filePath;
          masterPlay.classList.remove("fa-play-circle");
          masterPlay.classList.add("fa-pause-circle");
          gif.style.opacity = 1;
          audioElement.play();
        }
      }
    });
  }
);
document.getElementById("previous").addEventListener("click", () => {
  console.log("prev");
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex = songIndex - 1;
  }
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = songs[songIndex].filePath;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
  audioElement.play();
});
document.getElementById("next").addEventListener("click", () => {
  console.log("prev");
  if (songIndex >= songs.length - 1) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex + 1;
  }
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = songs[songIndex].filePath;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
  audioElement.play();
});
