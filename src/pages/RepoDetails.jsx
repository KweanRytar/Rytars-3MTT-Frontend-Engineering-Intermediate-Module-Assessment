import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/repos/YOUR_GITHUB_USERNAME/${repoName}`)
      .then(res => res.json())
      .then(data => {
        setRepo(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching repo details:', error));
  }, [repoName]);

  if (loading) return <p>Loading...</p>;
  if (!repo) return <p>Repository not found.</p>;

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>⭐ Stars: {repo.stargazers_count}</p>
      <p>🍴 Forks: {repo.forks_count}</p>
      <p>🗂 Languages: {repo.language}</p>
    </div>
  );
};

export default RepoDetails;
