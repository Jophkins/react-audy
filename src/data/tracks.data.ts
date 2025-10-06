import type { ITrack } from "../types/track.types";

import { ARTISTS } from "./artist.data";

export const TRACKS: ITrack[] = [
  { name: "Back in the 90s", file: "/audio/back_in_the_90s.mp3", artist: ARTISTS[1], duration: 30 },
  { name: "Bojack Horseman Intro", file: "/audio/bojack_horseman_intro.mp3", artist: ARTISTS[0], duration: 27 },
  { name: "Diane Nguyen", file: "/audio/diane_nguyen.mp3", artist: ARTISTS[1], duration: 30 },
  { name: "Horsing Around Ring", file: "/audio/horsing_around_ring.mp3", artist: ARTISTS[0], duration: 20 },
  { name: "Kyle and the Kids", file: "/audio/kyle_and_the_kids.mp3", artist: ARTISTS[1], duration: 27 },
  { name: "Whos That Dog", file: "/audio/whos_that_dog.mp3", artist: ARTISTS[0], duration: 30 },
];
