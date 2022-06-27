import { DefaultUi, Player, Youtube } from '@vime/react';
import styles from './styles.module.css';

import '@vime/core/themes/default.css';

interface VideoProps {
  videoId: string;
};

export function Video({ videoId }: VideoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <Player>
            <Youtube cookies={true} videoId={videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>
    </div>
  )
}
