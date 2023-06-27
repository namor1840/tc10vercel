import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Roman Franco</h1>

      <img src='cepillo.jpg' alt='Foto de mi Volkswagen' width={640} height={480}/>
    </main>
  )
}
