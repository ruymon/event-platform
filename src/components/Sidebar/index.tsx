import { Lesson } from '../Lesson';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <span className={styles.title}>Cronograma de aulas</span>

      <div className={styles.lessonWrapper}>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  )
}
