import Image from "next/image";
import styles from "./page.module.css";
// import styled from '@emotion/styled';
import GithubLink from "@/components/GithubLink";

// const Logo = styled.img`
//   height: 30vmin;
// `;

// const LinkedInLink = styled.a`
//   width: 20%;
//   max-width: 130px;
//   img {
//     width: 100%;
//   }
// `;

export default function Home() {
  return (
    <main className={styles.main}>
      <header className="App-header">
        {/* <Logo src={logo} alt="logo" /> */}
      </header>
      <br />
      <p>Hello World!</p>

      <br />
      <GithubLink showOctocat={true} />
      <br />
      {/* <LinkedInLink
        className="App-link"
        href="https://www.linkedin.com/in/estebansantini/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="linkedIn logo" />
      </LinkedInLink> */}
    </main>
  );
}
