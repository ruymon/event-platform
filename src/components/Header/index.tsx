import { Logo } from '../Logo';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  )
}
