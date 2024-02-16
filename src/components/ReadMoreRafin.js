"use client"
import React, { useState } from 'react';

const ReadMoreRafin = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className={`readMoreSection ${isReadMore ? 'display' : ''}`}>
      <button
        className="readMoreBtn"
        onClick={() => setIsReadMore(v => !v)}
      >
        Read {isReadMore ? 'Less' : 'More'}
      </button>
      <div className="columnWrapper">
        <div className="column">
          <h4>Amigo Style Adventures</h4>
          Join Rafin, a tournament-winning fisherman, on a guided tour of Oviachic Lake's rich
          bass habitats. With Rafin's expertise and <span class="highlight">'Amigo Style'</span>
          hospitality, guests not only enjoy fishing but also become part of a community that
          cherishes the great outdoors and the thrill of the catch. Many visitors find themselves
          returning, lured back by the unforgettable experiences and the vibrant Facebook
          group of enthusiastic anglers.
        </div>
        <div className="column">
          <h4>Behind the Scenes: Building with Next.js</h4>
          Crafted with <span class="highlight">Next.js</span> and <span class="highlight">React.js</span>,
          Rafin Bass Fishing showcases responsive design and modern web technologies. Starting with
          Next.js 11 and React 17, the site was a playground for learning—especially mastering the
          new Image component in the upgrade to Next.js 14 and React 18. This upgrade brought
          challenges but also opportunities to enhance performance, achieving over 90% in
          Google's Lighthouse and leveraging Server Side Rendering for a seamless user experience.
          Contacting Rafin is just a click away, thanks to an integrated 'Contact Us' feature powered
          by mailgun.js.
        </div>
      </div>
    </div>
  );
}

export default ReadMoreRafin;