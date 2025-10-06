import type { ITrack } from "./track.types";

export type IArtist = {
  name: string;
  image: string;
  listenersCount: number;
  tracks: ITrack[];
};
