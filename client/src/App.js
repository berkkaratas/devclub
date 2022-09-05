import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Applications from './components/Applications';
import About from './components/About';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Login/Register.js';
import Support from './components/Support';
import Teams from './components/Teams';
import Mentorship from './components/Mentorship';
import FAQ from './components/FAQ';
import Board from './components/Board';
import Jobs from './components/Jobs';
import Feedback from './components/Feedback';
import Terms from './components/Terms';
import Post from './components/Blog/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="applications" element={<Applications />} />
        <Route path="blog" element={<Blog />} ></Route>
        <Route path="post" element={<Post />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="support" element={<Support />} />  
        <Route path="teams" element={<Teams />} />  
        <Route path="mentorship" element={<Mentorship />} />  
        <Route path="FAQ" element={<FAQ />} />  
        <Route path="board" element={<Board />} />  
        <Route path="jobs" element={<Jobs />} />  
        <Route path="feedback" element={<Feedback />} />  
        <Route path="terms" element={<Terms />} />  
      </Routes>
    </div>
  );
}

export default App;
