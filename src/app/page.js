import Image from "next/image";
import styles from "./page.module.css";
import GithubLink from "@/components/GithubLink";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className="App-header">
        <div style={{ position: 'relative', width: '300px', height: '185px' }}>
          <Image src="/images/logo.svg" alt="logo" fill style={{
            objectFit: 'contain',
            objectPosition: 'top'
          }} />
        </div>
      </header>
      <br />
      <p>Hello World!</p>

      <br />
      <GithubLink />
      <br />
      <a
        href="https://www.linkedin.com/in/estebansantini/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'relative', width: '160px', height: '160px' }}
      >
        <Image src="/images/LI-Logo.png" alt="linkedIn logo" fill style={{
          objectFit: 'contain',
          objectPosition: 'top'
        }} />
      </a>
    </main>
  );
}
