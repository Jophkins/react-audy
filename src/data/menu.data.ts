import { Compass, Home, Radio } from "lucide-react";

import { PagesConfig } from "../config/pages.config";

export const MENU_ITEMS = [
  { name: "Home", link: PagesConfig.HOME, icon: Home },
  { name: "Discover", link: PagesConfig.DISCOVER, icon: Compass },
  { name: "Radio", link: PagesConfig.RADIO, icon: Radio },
];

export type TMenuItem = (typeof MENU_ITEMS)[number];

export const LIBRARY_MENU_ITEMS = [
  { name: "Liked Songs", link: PagesConfig.LIKED_SONGS },
  { name: "Albums", link: PagesConfig.ALBUMS() },
  { name: "Artists", link: PagesConfig.ARTISTS() },
  { name: "Podcasts", link: PagesConfig.PODCASTS() },
];
