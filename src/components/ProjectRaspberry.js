import React from 'react';
import ReadMore from './ReadMore';

const ProjectRaspberry = () => (
  <div class="project">
    <h3>Raspberry Pi</h3>
    <p>
      Check out the <a href="#">Raspberry Pi</a> project, this project was a fun way to
      experiment with the Raspberry Pi and its GPIO pins, and to build a simple web interface
      to control the lights in my apartment.
    </p>
    <a href="https://github.com/esantini/eSantini" target="_blank">Check out the repo</a>
    <ReadMore>
      <p>
        Embark on a journey through my Raspberry Pi project, where I transformed my apartment
        into a tech playground. Hosting this very site on a Raspberry Pi, shielded
        by <span class="highlight">Cloudflare</span> and streamlined with <span class="highlight">NGINX</span>,
        I ventured into electronics by controlling lights and screens via web interfaces.
      </p>
      <br />
      <p>
        The project also includes a homemade <span class="highlight">CI/CD</span> system,
        using <span class="highlight">GitHub Actions</span> and <span class="highlight">Node.js</span> to deploy
        updates through bash scripts—clunky yet effective. Plus, a live feed camera added a personal touch.
      </p>
      <br />
      <p>
        It was a hands-on dive into web hosting, automation, and a bit of electronics, showcasing the versatility of
        software engineering beyond conventional boundaries.
      </p>

    </ReadMore>
  </div>
);

export default ProjectRaspberry;
