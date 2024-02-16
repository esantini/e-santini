import React from 'react';
import ReadMoreRafin from './ReadMoreRafin';

const LatestProjects = () => {
  return (
    <>
      <h2 className="latestProjects">Latest Projects</h2>
      <p style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
        These projects are personal hobbies and showcases of my technical exploration.
        For a comprehensive view of my professional achievements and experiences,
        please visit my <a
          href="https://www.linkedin.com/in/estebansantini/"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a> profile.
      </p>
      <div class="project">
        <h3>Rafin Bass Fishing</h3>
        <p>
          Check out the{' '}
          <a
            href="https://www.rafinbassfishing.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rafin Bass Fishing
          </a>{' '}
          site, this project was the perfect excuse to dive into <span className="hightlight">Next.js</span>,
          a framework that had just surged in popularity. It blends my newfound skills with the excitement
          of <span className="hightlight">'Amigo Style'</span> fishing at Oviachic Lake.
        </p>
        <ReadMoreRafin />

      </div>
      <div class="project">
        <h3>Raspberry Pi</h3>
        <p>
          Check out the <a href="#">Raspberry Pi</a> project, this project was a fun way to
          experiment with the Raspberry Pi and its GPIO pins, and to build a simple web interface
          to control the lights in my apartment.
        </p>
        <a href="https://github.com/esantini/eSantini" target="_blank">Check out the repo</a>
      </div>
    </>
  );
};

export default LatestProjects;
