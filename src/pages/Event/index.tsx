import { DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { Header } from "../../components/Header";
import { ResourceCard } from "../../components/ResourceCard";
import { Sidebar } from "../../components/Sidebar";
import { Teacher } from "../../components/Teacher";
import { Video } from "../../components/Video";

import styles from './styles.module.css';

export function Event() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.contentWrapper}>
        <div className={styles.eventContainer}>
          <Video />

          <div className={styles.contentContainer}>
      
            <div className={styles.headerContainer}>
              <div className={styles.lessonDetails}>
                <h1>Aula 3 • Roteamento e player da aula</h1>
                <p>Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>

                <Teacher 
                  avatar='https://github.com/ruymon.png'
                  name='Ruy Monteiro'
                  bio='Tech lead @IVAO Brasil'
                />
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
                headline='Material complementar'
                description='Acesse o material complementar para acelerar o seu desenvolvimento'
              />

              <ResourceCard
                icon={<FileArrowDown size={40} />}
                href='#'
                headline='Wallpapers exclusivos'
                description='Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina'
              />
            </div>
          </div>

        </div>
        <Sidebar />
      </main>
    </div>  
  )
}