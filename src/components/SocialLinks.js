import React from 'react';
import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="socialLinks">

      {/* GitHub */}
      <a
        href="https://github.com/esantini"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'relative', width: '200px', height: '60px' }}
      >
        <Image
          src="/images/GitHub_Logo_White.png"
          alt="github logo"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'right'
          }} />
        <Image
          src="/images/Octocat.png"
          alt="octocat"
          id="octocat"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'left'
          }} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/estebansantini/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'relative',
          width: '160px',
          height: '160px',
          marginTop: '.8rem',
        }}
      >
        <Image src="/images/LI-Logo.png" alt="linkedIn logo" fill style={{
          objectFit: 'contain',
          objectPosition: 'top'
        }} />
      </a>

    </div>
  );
};

export default SocialLinks;
