import { CheckCircle } from 'phosphor-react';
import styles from './styles.module.css';

export function Lesson() {
  return (
    <a href="#">
      <span className={styles.releaseDate}>Segunda • 21 de junho • 19h00</span>

      <div className={styles.cardContainer}>
        <header className={styles.cardHeader}>
          <span className={styles.lessonStatus}>
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className={styles.lessonPill}>ao vivo</span>
        </header>

        <strong className={styles.lessonTitle}>Abertura do evento Ignite labs</strong>
      </div>
    </a>
  )
}
