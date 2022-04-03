import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import ShowBlogs from './pages/ShowBlogs';
// import Skill from './components/Skill';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="admin/login" element={<Login />} />
                    <Route exact path="admin/createblog" element={<CreateBlog />} />
                    <Route exact path="blogs" element={<ShowBlogs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
