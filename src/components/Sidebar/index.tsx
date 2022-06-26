import { Lesson } from '../Lesson';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <span className={styles.title}>Cronograma de aulas</span>

      <div className={styles.lessonWrapper}>
        <Lesson
          title="Aula 1"
          slug="aula-1"
          availableAt={new Date()}
          type="class"
        />
      </div>
    </aside>
  )
}
