/*
    Os modulos podem ser usados com o atributo type="module", em seguida, possui dois tipos de exportações de modulos:
        export(nomeado): Pode haver vários exports pode ser mais de um por arquivo.
        
        export default(padrao): Somente um por arquivo.
*/

import musicas from './data.js';
import elements from './playerElements.js'
import { secondsToMinutes } from './utils.js';

export default {
    index: 0,
    audios: musicas,
    isPlaying: false,
    currentAudio: {},
    start() {
        elements.get.call(this);
        this.update();
    },
    play(){
        this.isPlaying = true;
        this.audio.play();
        this.iconPlayPause.className = 'fas fa-pause';
    },
    pause(){
        this.isPlaying = false;
        this.audio.pause();
        this.iconPlayPause.className = 'fas fa-play';
    },
    togglePlayPause(){
        if(this.isPlaying){
            this.pause();
        }else {
            this.play();
        }
    },
    toggleMute(){
        console.log("a")
        this.audio.muted = !this.audio.muted;
        this.vol.className = this.audio.muted ? "fas fa-volume-mute": "fas fa-volume-up";
    },
    setVolume(value){
        this.audio.volume = value/100;
        console.log(value)
    },
    setSeek(value){
        this.audio.currentTime = value;
    },
    timeUpdate(){
       this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
       this.seekBar.value = this.audio.currentTime;
    },
    next(){
        this.index++;
        if(this.index > this.audios.length){
            this.index = 0;
        };
        this.currentAudio = this.audios[this.index];
        this.update();
        this.audio.play();
    },
    update(){
        this.currentAudio = this.audios[this.index];
        this.artist.textContent = this.currentAudio.artista;
        this.title.textContent = this.currentAudio.titulo;
        this.cover.src = this.currentAudio.img;
        elements.createAudioElement.call(this, this.currentAudio.src);
        
        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        };
    }
};