import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                {/* Container for centering and limiting width */}
                <div className="container">
                    <NavBar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
