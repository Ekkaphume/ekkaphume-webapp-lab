// GitHubRepoURL.js
import React from 'react';

const GitHubRepoURL = ({ username}) => {
  const repoUrl = `https://github.com/${username}`;

  return (
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      {username} Prasert
    </a>
  );
};

export default GitHubRepoURL;
