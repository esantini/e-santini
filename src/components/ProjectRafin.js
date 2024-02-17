import React from 'react';
import Image from "next/image";
import ReadMore from './ReadMore';
import ExternalLink from './ExternalLink';
import { RAFIN_URL } from "@/utils/constants";

const ProjectRafin = () => (
  <div className="project">
    <h2>Rafin Bass Fishing</h2>
    <p>
      Check out the <ExternalLink href={RAFIN_URL}>Rafin Bass Fishing</ExternalLink> site,
      this project was the perfect excuse to dive into <strong className="highlight">Next.js</strong>,
      a framework that had just surged in popularity. It blends my newfound skills with the excitement
      of <strong className="highlight">Amigo Style</strong> fishing at Oviachic Lake.
    </p>
    <ReadMore maxHeight={800}>
      <div className="columnWrapper">
        <div className="column">
          <h3>About Rafin&apos;s Website</h3>
          Embark on a journey with Rafin, a champion fisherman, as he guides you through the abundant
          bass spots of Oviachic Lake. Experience his <strong className="highlight">Amigo Style</strong> hospitality,
          which transforms fishing into a communal outdoor adventure, leaving guests eager to return.
          The vibrant community of passionate anglers on Facebook further enriches the memorable experiences.
        </div>
        <div className="column">
          <h3>Building with Next.js</h3>
          Rafin Bass Fishing&apos;s website, built on <strong className="highlight">Next.js</strong>, showcases cutting-edge
          responsive design and modern web technologies. Starting with earlier versions, the site evolved as a
          learning platform, particularly with the adoption of Next.js 14, improving performance and achieving
          over 95% scores in <strong className="highlight">Google&apos;s Lighthouse</strong>. Enhancements include
          seamless user experiences through <strong className="highlight">Server Side Rendering</strong> and an
          easy <strong className="highlight">Contact Us</strong> feature, ensuring Rafin is just a click away.
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
