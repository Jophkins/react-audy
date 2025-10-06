import type { PropsWithChildren } from "react";

import { LeftSidebar } from "./left-sidebar/left-sidebar";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>

      <LeftSidebar />

      <main>

        {children}
      </main>
      {/* <RightSidebar /> */}

    </div>
  );
}
