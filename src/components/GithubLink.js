import PropTypes from 'prop-types';
import Image from "next/image";
// import styled from '@emotion/styled';

// const A = styled.a`
//   width: 30%;
//   max-width: 250px;
//   #octocat {
//     width: 30%;
//   }
//   img {
//     width: ${({ compact }) => (compact ? 'calc(86px + 2vmin)' : '60%')};
//   }
// `;

const GithubLink = ({ compact = false }) => (
  <a
    compact={compact}
    href="https://github.com/esantini/eSantini"
    target="_blank"
    rel="noopener noreferrer"
  >
    {!compact && (
      <Image
        src="/Octocat.png"
        alt="octocat"
        id="octocat"
        width={compact ? 86 : 60}
        height={compact ? 86 : 60}
      />
    )}
    <Image src="/GitHub_Logo_White.png" alt="github logo" width={60} height={60} />
  </a>
);

GithubLink.propTypes = {
  compact: PropTypes.bool,
};

export default GithubLink;
