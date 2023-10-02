import { secondsToMinutes } from './utils.js'
export default {
    get(){
        this.cover = document.querySelector("img");
        this.artist = document.querySelector(".content h5");
        this.title = document.querySelector(".content h4");
        this.playPause = document.querySelector("#play-pause");
        this.iconPlayPause = document.querySelector("#play-pause i");
        this.vol = document.querySelector("#vol");
        this.volumeControl = document.querySelector("#volume");
        this.seekBar = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
    },
    createAudioElement(audio){
        this.audio = new Audio(audio);
    },
    actions(){
        this.audio.onended = () => this.next();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.vol.onclick = () => this.toggleMute();
        this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
        this.volumeControl.onchange = () => this.setVolume(this.volumeControl.value);

        this.seekBar.oninput = () => this.setSeek(this.seekBar.value);
        this.seekBar.onchange = () => this.setSeek(this.seekBar.value);
        this.seekBar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
    }
}
