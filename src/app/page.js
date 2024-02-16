import Image from "next/image";
import styles from "./page.module.css";
import GithubLink from "@/components/GithubLink";
import LatestProjects from "@/components/LatestProjects";

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
      <div class="intro">
        <p>
          Hello World! Welcome to my digital playground, where{' '}
          <span class="highlight">JavaScript</span>, <span class="highlight">React.js</span>,
          and <span class="highlight">Node.js</span> are the main attractions.
        </p>
        <br />
        <p>
          I'm Esteban, a front-end maestro and back-end enthusiast who loves turning
          complex problems into simple, elegant solutions. This site is my sandbox,
          where I experiment, innovate, and occasionally break things (for science, of course!).
        </p>
        <br />
        <p>
          Dive into my world by checking out my <a href="https://github.com/esantini">GitHub</a>
          {' '}for a peek at my latest projects, connect with me on{' '}
          <a href="https://www.linkedin.com/in/estebansantini/">LinkedIn</a>,
          or take a spin through my interactive resume—crafted with love and{' '}
          <span class="highlight">D3.js</span>.
          Let's explore what happens when creativity meets code!
        </p>
      </div>

      <LatestProjects />
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
