import { DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import { ResourceCard } from '../ResourceCard';
import styles from './styles.module.css';

export function Video() {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.mock}>
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.lessonDetails}>
            <h1>Aula 3 • Roteamento e player da aula</h1>
            <p>Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>

            <div className={styles.teacherContainer}>
              <img src="https://github.com/ruymon.png" alt="Avatar do Professor" />

              <div className={styles.teacherDeatails}>
                <strong>Ruy Monteiro</strong>
                <span>Tech lead @IVAO Brasil</span>
              </div>

            </div>
          </div>

          <div className={styles.lessonButtons}>
            <a href="#">
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>

            <a href="#">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <ResourceCard
            icon={<FileArrowDown size={40} />}
            href='#'
            header='Material complementar'
            description='Acesse o material complementar para acelerar o seu desenvolvimento'
          />

          <ResourceCard
            icon={<FileArrowDown size={40} />}
            href='#'
            header='Wallpapers exclusivos'
            description='Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina'
          />
        </div>

      </div>
    </div>
  )
}
