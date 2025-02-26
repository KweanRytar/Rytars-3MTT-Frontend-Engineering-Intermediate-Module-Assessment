import styles from './Home.module.css'
import React, {useEffect, useState }from 'react'

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 1; // Number of repos per page

  useEffect(() => {
    fetch('https://api.github.com/users/kweanRytar/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setFilteredRepos(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  // Handle search filter
  useEffect(() => {
    const filtered = repos.filter(repo =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRepos(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  }, [search, repos]);

  // Pagination logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <div className={styles.container}>
      <h2 className='title'>My GitHub Repositories</h2>
      
      {/* Search Bar */}
      <input className='search'
        type="text" 
        placeholder="Search repositories..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />

      {loading ? (
        <p>Loading repositories...</p>
      ) : (
        <ul>
          {currentRepos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Buttons */}
      <button className='searchBtn' disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
      <button className='searchBtn' disabled={indexOfLastRepo >= filteredRepos.length} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
    </div>)
}

export default Home