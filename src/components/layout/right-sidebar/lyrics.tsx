import { Play } from "lucide-react";

import styles from "./lyrics.module.scss";

export function Lyrics() {
  return (
    <div className={styles.lyrics}>
      <div className="text-primary font-medium mb-5">[Verse 1]</div>
      <p>Kyle and the kids</p>
      <p>Kyle's the dad, and Charlotte's married to him</p>
      <p className={styles.active}>
        <Play fill="var(--color-primary)" className={styles.icon} size={10} />
        And they've got some kids (and they've got some)
      </p>
      <p>There's Penny, she's going to high school</p>
      <p>She's got a brother</p>
      <p>Her brother's name is Trip</p>
      <p>They're the perfect family</p>
      <br />
      <div>[Verse 2]</div>
      <p>Kyle and the kids</p>
      <p>He loves his wife, and there's nothing you can do</p>
      <p>Kyle and the kids</p>
      <p>Nothing's gonna be alright</p>
      <p>Be alright, oh, no</p>
    </div>
  );
}
