import { CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';
import styles from './styles.module.css';

interface ResourceCardProps extends Partial<HTMLAnchorElement> {
  icon: ReactNode;
  header: string;
  description: string;
}

export function ResourceCard({ icon, header, description, href }: ResourceCardProps ) {
  return (
    <a href={href} className={styles.container}>
      <div className={styles.iconContainer}>{ icon }</div>
      
      <div className={styles.details}>
        <strong>{ header }</strong>
        <p>{ description }</p>
      </div>

      <div className={styles.caretContainer}>
        <CaretRight size={24} />
      </div>
    </a>
  )
};