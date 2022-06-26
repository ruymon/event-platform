import styles from './styles.module.css';

interface TeacherProps {
  avatar: string;
  name: string;
  bio: string;
}

export function Teacher({ avatar, name, bio }: TeacherProps ) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="Avatar do Professor" />

      <div className={styles.deatails}>
        <strong>{name}</strong>
        <span>{bio}</span>
      </div>
    </div>
  )
}
