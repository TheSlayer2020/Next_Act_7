import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        <div>
          <a
            href="default.asp"
            target="_blank"
          >
            {' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="http://localhost:3000/CrudeApp"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
             
          </h2>
          <p> </p>
        </a>

        <a
          href="http://localhost:3000/CrudeApp"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            
          </h2>
          <p></p>
        </a>

        <a
          href="http://localhost:3000/CrudeApp"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
             
          </h2>
          <p></p>
        </a>

        <a
          href="http://localhost:3000/CrudeApp"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
             
          </h2>
          <p>
          
          </p>
        </a>
      </div>
    </main>
  )
}
