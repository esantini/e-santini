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
          <Image src="/images/logo.svg" alt="logo" fill priority style={{
            objectFit: 'contain',
            objectPosition: 'top'
          }} />
        </div>
      </header>
      <br />
      <div className="intro">
        <h1 style={{ fontSize: '1.3em' }}>Hello World!</h1>
        <p style={{ marginTop: '1rem' }}>
          Welcome to my digital playground, where{' '}
          <strong className="highlight">JavaScript</strong>, <strong className="highlight">React.js</strong>,
          and <strong className="highlight">Node.js</strong> are the main attractions.
        </p>
        <br />
        <p>
          I&apos;m Esteban, a <strong className="highlight">front-end</strong> expert and{' '}
          <strong className="highlight">back-end</strong> enthusiast who loves turning complex problems
          into simple, elegant solutions. This site is my <strong className="highlight">sandbox</strong>,
          where I experiment, innovate, and occasionally break things (for science, of course!).
        </p>
        <br />
        <p>
          Dive into my world by exploring my latest projects below, or take a closer look under the hood on
          my <ExternalLink href={MY_GITHUB_URL} className="highlight">GitHub</ExternalLink> profile.
          Feel free to connect with me
          on <ExternalLink href={MY_LINKEDIN_URL} className="highlight">LinkedIn</ExternalLink> too.
          {/* , or take a spin through my interactive resume—crafted
          with love and <strong className="highlight">D3.js</strong>. */}
        </p>
        <br />
        <p>
          Let&apos;s explore what happens when creativity meets code!
        </p>
      </div>

      <SocialLinks />

      <LatestProjects />
      <br />

      <h1 className="thank-you">Thank you for your visit</h1>
    </main>
  );
}
