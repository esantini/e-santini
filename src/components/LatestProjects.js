import React from 'react';
import ProjectRafin from './ProjectRafin';
import ProjectRaspberry from './ProjectRaspberry';
import ExternalLink from './ExternalLink';
import { MY_LINKEDIN_URL } from "@/utils/constants";

const LatestProjects = () => (
  <>
    <h1 className="latestProjectsTitle">Latest Projects</h1>
    <p style={{ marginTop: '0.5rem' }} className='projectsIntro'>
      These projects are personal <strong className="highlight">hobbies</strong> and
      showcases of my <strong className="highlight">technical exploration</strong>.
    </p>
    <p className="projectsIntro">
      If you&apos;re more interested in my professional achievements and experiences, please
      visit my <ExternalLink href={MY_LINKEDIN_URL} >LinkedIn</ExternalLink> profile.
    </p>
    <hr />
    <ProjectRaspberry />
    <hr />
    <ProjectRafin />
    <hr />
  </>
);

export default LatestProjects;
