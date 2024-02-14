import Image from "next/image";

const GithubLink = () => (
  <a
    href="https://github.com/esantini/eSantini"
    target="_blank"
    rel="noopener noreferrer"
    style={{ position: 'relative', width: '200px', height: '60px' }}
  >
    <Image src="/images/GitHub_Logo_White.png" alt="github logo" fill style={{
      objectFit: 'contain',
      objectPosition: 'right'
    }} />
    <Image
      src="/images/Octocat.png"
      alt="octocat"
      id="octocat" fill style={{
        objectFit: 'contain',
        objectPosition: 'left'
      }} />
  </a>
);

export default GithubLink;
