import type { IArtist } from "./artist.types";

export type ITrack = {
  name: string;
  file: string;
  artist: IArtist;
  duration: number; // in seconds

};
