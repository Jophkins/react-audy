export class PagesConfig {
  static HOME = "/";
  static DISCOVER = "/discover";
  static RADIO = "/radio";
  static LIKED_SONGS = "/liked-songs";

  static PLAYLIST(id: string) {
    return `/playlist/${id}`;
  }

  static ALBUMS(id?: string) {
    return `/album${id ? `/${id}` : ""}`;
  }

  static ARTISTS(id?: string) {
    return `/artists${id ? `/${id}` : ""}`;
  }

  static PODCASTS(id?: string) {
    return `/podcast${id ? `/${id}` : ""}`;
  }
}
