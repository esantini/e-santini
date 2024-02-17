import Image from "next/image";
import styles from "./page.module.css";
import LatestProjects from "@/components/LatestProjects";
import SocialLinks from "@/components/SocialLinks";
import ExternalLink from "@/components/ExternalLink";
import { MY_GITHUB_URL, MY_LINKEDIN_URL } from "@/utils/constants";

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
      <div className="intro">
        <p className="highlight" style={{ fontSize: '1.3em' }}>Hello World!</p>
        <p style={{ marginTop: '1rem' }}>
          Welcome to my digital playground, where{' '}
          <span className="highlight">JavaScript</span>, <span className="highlight">React.js</span>,
          and <span className="highlight">Node.js</span> are the main attractions.
        </p>
        <br />
        <p>
          I&apos;m Esteban, a <span className="highlight">front-end</span> expert and{' '}
          <span className="highlight">back-end</span> enthusiast who loves turning complex problems
          into simple, elegant solutions. This site is my <span className="highlight">sandbox</span>,
          where I experiment, innovate, and occasionally break things (for science, of course!).
        </p>
        <br />
        <p>
          Dive into my world by exploring my latest projects below, or take a closer look under the hood on
          my <ExternalLink href={MY_GITHUB_URL} className="highlight">GitHub</ExternalLink> profile.
          Feel free to connect with me
          on <ExternalLink href={MY_LINKEDIN_URL} className="highlight">LinkedIn</ExternalLink> too.
          {/* , or take a spin through my interactive resume—crafted
          with love and <span className="highlight">D3.js</span>. */}
        </p>
        <br />
        <p>
          Let&apos;s explore what happens when creativity meets code!
        </p>
      </div>

      <SocialLinks />

      <LatestProjects />
      <br />

      <h2>Thank you for your visit</h2>
    </main>
  );
}
