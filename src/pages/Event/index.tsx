import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import styles from './styles.module.css';

export function Event() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.contentWrapper}>
        <Video />
        <Sidebar />
      </main>
    </div>  
  )
}