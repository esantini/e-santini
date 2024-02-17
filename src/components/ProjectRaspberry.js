import React from 'react';
import Image from 'next/image';
import ReadMore from './ReadMore';
import ExternalLink from './ExternalLink';
import { MY_GITHUB_URL } from "@/utils/constants";

const ProjectRaspberry = () => (
  <div className="project">
    <h3>Raspberry Pi</h3>
    <p>
      This project was a fun way to experiment with the Raspberry Pi and its GPIO pins,
      and to build a simple web interface to control the lights in my apartment.
    </p>
    <br />
    <p>
      Check out the <ExternalLink href={`${MY_GITHUB_URL}eSantini`}>Front-End repo</ExternalLink>
      {' '}and the <ExternalLink href={`${MY_GITHUB_URL}api`}>API repo</ExternalLink>.
    </p>
    <ReadMore>
      <div className="raspiContainer">
        <div className="raspiText">
          <p>
            In this project I transformed my apartment into a tech playground. Hosting a previous version
            of this site on a Raspberry Pi, shielded by <span className="highlight">Cloudflare</span>
            {' '}and streamlined with <span className="highlight">NGINX</span>,
            I ventured into electronics by controlling lights and screens via web interfaces.
          </p>
          <br />
          <p>
            The project also included a homemade <span className="highlight">CI/CD</span> system,
            using <span className="highlight">GitHub Actions</span> and <span className="highlight">Node.js</span> to
            deploy updates through bash scripts—clunky yet effective. Plus,
            a <span className="highlight">live feed camera</span> added a personal touch.
          </p>
          <br />
          <p>
            It was a hands-on dive into web hosting, automation, and a bit of electronics,
            showcasing the versatility of software engineering beyond conventional boundaries.
          </p>
        </div>
        <div className="raspiSideImage">
          <Image
            src="/images/raspberry-pi/1.jpg"
            alt="Raspberry Pi 1"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'top'
            }}
          />
        </div>
      </div>
    </ReadMore>
  </div>
);

export default ProjectRaspberry;
