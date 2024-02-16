import React from 'react';
import Image from "next/image";
import GithubLink from "@/components/GithubLink";

const SocialLinks = () => {
  return (
    <div className="socialLinks">
      <GithubLink />
      <a
        href="https://www.linkedin.com/in/estebansantini/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'relative', width: '160px', height: '160px', marginTop: '.8rem' }}
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
