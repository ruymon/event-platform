import { gql, useQuery } from '@apollo/client';
import { Lesson } from '../Lesson';
import styles from './styles.module.css';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class'
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <aside className={styles.container}>
      <span className={styles.title}>Cronograma de aulas</span>

      <div className={styles.lessonWrapper}>
        { data?.lessons.map( lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
