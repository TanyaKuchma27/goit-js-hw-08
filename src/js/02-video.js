import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const keyTime = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));
playerReload();

function onTimeUpdate (evt) {
    const seconds = evt.seconds;
    console.log(seconds);
    localStorage.setItem(keyTime, seconds)
};

function playerReload() {
    const savedTime = localStorage.getItem(keyTime);
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
};