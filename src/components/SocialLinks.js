import React from 'react';
import Image from "next/image";
import ExternalLink from './ExternalLink';
import { MY_GITHUB_URL, MY_LINKEDIN_URL } from "@/utils/constants";

const SocialLinks = () => (
  <div className="socialLinks">

    {/* GitHub */}
    <ExternalLink
      href={MY_GITHUB_URL}
      style={{ position: 'relative', width: '200px', height: '60px' }}
    >
      <Image
        src="/images/GitHub_Logo_Black.png"
        id="github-logo"
        alt="github logo"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'right'
        }}
      />
      <Image
        src="/images/Octocat.png"
        alt="octocat"
        id="octocat"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'left'
        }}
      />
    </ExternalLink>

    {/* LinkedIn */}
    <ExternalLink
      href={MY_LINKEDIN_URL}
      style={{
        position: 'relative',
        width: '160px',
        marginTop: '.8rem',
      }}
    >
      {/* <Image src="/images/Linkedin-logo-white.png.png" alt="linkedIn logo" fill style={{ */}
      <Image src="/images/LI-Logo.png" alt="linkedIn logo" fill style={{
        objectFit: 'contain',
        objectPosition: 'top'
      }} />
    </ExternalLink>
  </div>
);

export default SocialLinks;
