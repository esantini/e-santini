import React from 'react';

const ExternalLink = ({ href, children, className = '', style = {} }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
    {children}
  </a>
);

export default ExternalLink;
