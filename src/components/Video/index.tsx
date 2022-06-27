import { DefaultUi, Player, Youtube } from '@vime/react';
import styles from './styles.module.css';

import '@vime/core/themes/default.css';

export function Video() {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <Player>
            <Youtube videoId="ouUWJs9dflo"/>
            <DefaultUi />
          </Player>

          {/* <div className={styles.mock} /> */}
        </div>
      </div>
    </div>
  )
}
