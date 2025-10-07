import { Compass, Home, Radio } from "lucide-react";

import { PagesConfig } from "../config/pages.config";

export const MENU_ITEMS = [
  { name: "Home", link: PagesConfig.HOME, icon: Home },
  { name: "Discover", link: PagesConfig.DISCOVER, icon: Compass },
  { name: "Radio", link: PagesConfig.RADIO, icon: Radio },
];

export type TMenuItem = (typeof MENU_ITEMS)[number];

export const LIBRARY_MENU_ITEMS = [
  { name: "Liked Songs", link: PagesConfig.LIKED_SONGS, icon: Home },
  { name: "Albums", link: PagesConfig.ALBUMS(), icon: Home },
  { name: "Artists", link: PagesConfig.ARTISTS(), icon: Home },
  { name: "Podcasts", link: PagesConfig.PODCASTS(), icon: Home },
];
