import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from "@/data/menu.data";

import { Menu } from "./menu";

export function LeftSidebar() {
  return (
    <aside className="p-layout border-r border-bg-secondary h-full">

      <Menu items={MENU_ITEMS} />

      <hr className="my-10 border-bg-secondary" />

      <Menu items={LIBRARY_MENU_ITEMS} title="Your Library" />

      <hr />

      <Menu items={[]} title="Playlists" />

    </aside>
  );
}
