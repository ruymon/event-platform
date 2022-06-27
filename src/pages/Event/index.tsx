import { gql, useQuery } from "@apollo/client";
import { DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { useParams } from "react-router-dom";
import { EventSkeletonCompound } from "../../components/EventSkeletonCompound";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ResourceCard } from "../../components/ResourceCard";
import { Sidebar } from "../../components/Sidebar";
import { Teacher } from "../../components/Teacher";
import { Video } from "../../components/Video";

import styles from './styles.module.css';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        avatarURL
        name
        bio
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    id: string;
    title: string;
    videoId: string;
    description: string;
    teacher: {
      avatarURL: string;
      name: string;
      bio: string;
    }
  }
}

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: slug
    }
  });

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.contentWrapper}>

      
        {!data || !data.lesson ? (
          <EventSkeletonCompound />
        ) : (
          <div className={styles.eventContainer}>
            <Video videoId={data.lesson.videoId} />

            <div className={styles.contentContainer}>
        
              <div className={styles.headerContainer}>
                <div className={styles.lessonDetails}>
                  <h1>{data.lesson.title}</h1>
                  <p>{data.lesson.description}</p>

                  <Teacher 
                    avatar={data.lesson.teacher.avatarURL}
                    name={data.lesson.teacher.name}
                    bio={data.lesson.teacher.bio}
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

              <Footer />
            </div>

          </div>
        )}

        <Sidebar />
      </main>
    </div>  
  )
}