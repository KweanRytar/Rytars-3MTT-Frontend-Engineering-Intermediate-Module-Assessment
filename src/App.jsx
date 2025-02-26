import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './Header'
import RepoDetails from './pages/RepoDetails'

function App() {
  

  return (
  
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/repo/:repoName" element={<RepoDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

export default App
