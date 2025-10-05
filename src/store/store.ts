import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  play(track: string) {
    this.currentTrack = track;
    this.isPlaying = true;
    console.warn(`Playing: ${track}`);
  }
}

export const musicPlayStore = new MusicPlayerStore();
