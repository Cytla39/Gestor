import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaThLarge , FaUserFriends, FaUserAlt, FaServer, FaClipboardCheck, FaCog, FaSignOutAlt } from 'react-icons/fa';
import managlogo from '../../images/image.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");

    if(admin && admin === "true") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    
  }, []);

  const closeSession = (e) => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={managlogo} alt="Logo" />
        <h2>ManagP</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to={`/dashboard`}><FaThLarge  /> Dashboard</Link></li>
          {isAdmin ? <li><Link to={`/teams`}><FaUserFriends /> Equipo</Link></li> : <li></li>}
          {isAdmin ? <li><Link to={`/users`}><FaUserAlt /> Usuarios</Link></li> : <li></li>}
          {isAdmin ? <li><Link to={`/projects`}><FaServer /> Proyectos</Link></li> : <li></li>}
          <li><Link to={`/tasks`}><FaClipboardCheck /> Tareas</Link></li>
          
          {isAdmin ? <li><Link to={`/settings`}><FaCog /> Settings</Link></li> : <li></li>}
          <div className='cerrarsesion'>
          <li><a href="#" onClick={closeSession}><FaSignOutAlt /> Log out</a></li>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;