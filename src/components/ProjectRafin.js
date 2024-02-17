import React from 'react';
import Image from "next/image";
import ReadMore from './ReadMore';
import ExternalLink from './ExternalLink';
import { RAFIN_URL } from "@/utils/constants";

const ProjectRafin = () => (
  <div className="project">
    <h3>Rafin Bass Fishing</h3>
    <p>
      Check out the <ExternalLink href={RAFIN_URL}>Rafin Bass Fishing</ExternalLink> site,
      this project was the perfect excuse to dive into <span className="highlight">Next.js</span>,
      a framework that had just surged in popularity. It blends my newfound skills with the excitement
      of <span className="highlight">Amigo Style</span> fishing at Oviachic Lake.
    </p>
    <ReadMore maxHeight={800}>
      <div className="columnWrapper">
        <div className="column">
          <h4>About Rafin&apos;s Website</h4>
          Embark on a journey with Rafin, a champion fisherman, as he guides you through the abundant
          bass spots of Oviachic Lake. Experience his <span className="highlight">Amigo Style</span> hospitality,
          which transforms fishing into a communal outdoor adventure, leaving guests eager to return.
          The vibrant community of passionate anglers on Facebook further enriches the memorable experiences.
        </div>
        <div className="column">
          <h4>Building with Next.js</h4>
          Rafin Bass Fishing&apos;s website, built on <span className="highlight">Next.js</span>, showcases cutting-edge
          responsive design and modern web technologies. Starting with earlier versions, the site evolved as a
          learning platform, particularly with the adoption of Next.js 14, improving performance and achieving
          over 95% scores in <span className="highlight">Google&apos;s Lighthouse</span>. Enhancements include
          seamless user experiences through <span className="highlight">Server Side Rendering</span> and an
          easy <span className="highlight">Contact Us</span> feature, ensuring Rafin is just a click away.
        </div>
      </div>

      <div className="rafinBassLink">
        <p style={{ marginBottom: 5 }}>
          Ready for your adventure? Visit Rafin Bass Fishing to start your journey
        </p>
        <div style={{ position: 'relative', height: 150 }}>
          <ExternalLink href={RAFIN_URL}>
            <Image
              src="/images/RafinBassFishing.png"
              alt="Rafin Bass Fishing"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'top'
              }}
            />
          </ExternalLink>
        </div>
      </div>
    </ReadMore>
  </div>
);

export default ProjectRafin;
