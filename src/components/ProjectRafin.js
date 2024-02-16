import React from 'react';
import Image from "next/image";
import ReadMore from './ReadMore';

const ProjectRafin = () => (
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
    <ReadMore>
      <div className="columnWrapper">
        <div className="column">
          <h4>About Website</h4>
          Embark on a journey with Rafin, a champion fisherman, as he guides you through the abundant
          bass spots of Oviachic Lake. Experience his <span class="highlight">Amigo Style</span> hospitality,
          which transforms fishing into a communal outdoor adventure, leaving guests eager to return.
          The vibrant community of passionate anglers on Facebook further enriches the memorable experiences.
        </div>
        <div className="column">
          <h4>Building with Next.js</h4>
          Rafin Bass Fishing's website, built on <span class="highlight">Next.js</span>, showcases cutting-edge
          responsive design and modern web technologies. Starting with earlier versions, the site evolved as a
          learning platform, particularly with the adoption of Next.js 14, improving performance and achieving
          over 95% scores in Google's Lighthouse. Enhancements include seamless user experiences through Server
          Side Rendering and an easy 'Contact Us' feature, ensuring Rafin is just a click away.
        </div>
      </div>

      <div className="rafinBassLink">
        <p style={{ marginBottom: 5 }}>
          Ready for your adventure? Visit Rafin Bass Fishing to start your journey
        </p>
        <div style={{ position: 'relative', height: 150 }}>
          <a
            href="https://www.rafinbassfishing.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/RafinBassFishing.png"
              alt="Rafin Bass Fishing"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'top'
              }}
            />
          </a>
        </div>
      </div>
    </ReadMore>
  </div>
);

export default ProjectRafin;
