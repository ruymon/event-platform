import { CheckCircle, Lock } from 'phosphor-react';

import styles from './styles.module.css';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = false;


  return (
    <a href="#">
      <span className={styles.releaseDate}>{availableAt.toString()}</span>

      <div className={styles.cardContainer}>
        <header className={styles.cardHeader}>

          { isLessonAvailable ? (
            <span className={styles.lessonStatusAvailable}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={styles.lessonStatusSoon}>
              <Lock size={20} />
              Em breve
            </span>
          )}


          <span className={styles.lessonPill}>
            { type === 'live' ? 'ao vivo' : 'Aula prática' }
          </span>
        </header>

        <strong className={styles.lessonTitle}>{title}</strong>
      </div>
    </a>
  )
}
