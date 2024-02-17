import React from 'react';
import ProjectRafin from './ProjectRafin';
import ProjectRaspberry from './ProjectRaspberry';
import ExternalLink from './ExternalLink';
import { MY_LINKEDIN_URL } from "@/utils/constants";

const LatestProjects = () => (
  <>
    <h2 className="latestProjectsTitle">Latest Projects</h2>
    <p style={{ marginTop: '0.5rem' }} className='projectsIntro'>
      These projects are personal <span className="highlight">hobbies</span> and
      showcases of my <span className="highlight">technical exploration</span>.
    </p>
    <p className="projectsIntro">
      If you&apos;re more interested my professional achievements and experiences, please
      visit my <ExternalLink href={MY_LINKEDIN_URL} >LinkedIn</ExternalLink> profile.
    </p>
    <hr />
    <ProjectRafin />
    <hr />
    <ProjectRaspberry />
    <hr />
  </>
);

export default LatestProjects;
