import { Logo } from "../Logo";

import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <Logo />
        <span>Ignite Lab - Todos os direitos reservados</span>
      </div>
      
      <a href="#">Políticas de privacidade</a>
    </footer>
  )
}