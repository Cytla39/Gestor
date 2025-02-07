import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");

    if (admin && admin === "true") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

  }, []);


  if (!token) {
    window.location.href = "/login"
  }

  const name = localStorage.getItem('name');

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <section className="content">
          <div className='welcome'>
          <h1>Bienvenido {name}</h1>
          <p>Aqui puedes controlar y monitorear tus proyectos</p>
          </div>
          <div className="board">
            <div className="section">
              <h2>To do</h2>
              <ul>
                <li>
                  <strong>Home section</strong>
                  <p>Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.</p>
                </li>
              </ul>
            </div>
            <div className="section">
              <h2>In progress</h2>
              <ul>
                <li>
                  <strong>Involvement</strong>
                  <p>Our designers created 8 screens for a website that needs to be implemented by our dev team.</p>
                </li>
              </ul>
            </div>
            <div className="section">
              <h2>Done</h2>
              <ul>
                <li>
                  <strong>Environment</strong>
                  <p>Fix bugs in the CSS code. Fix small bugs that are essential to prepare for the next release that will happen this quarter.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;