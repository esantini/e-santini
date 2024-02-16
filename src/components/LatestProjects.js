import React from 'react';
import ProjectRafin from './ProjectRafin';
import ProjectRaspberry from './ProjectRaspberry';

const LatestProjects = () => {
  return (
    <>
      <h2 className="latestProjectsTitle">Latest Projects</h2>
      <p style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
        These projects are personal hobbies and showcases of my technical exploration.
        For a comprehensive view of my professional achievements and experiences,
        please visit my <a
          href="https://www.linkedin.com/in/estebansantini/"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a> profile.
      </p>
      <ProjectRafin />
      <ProjectRaspberry />
    </>
  );
};

export default LatestProjects;
