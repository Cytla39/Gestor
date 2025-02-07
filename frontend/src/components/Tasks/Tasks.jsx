import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Tasks.css';

const Tasks = () => {
  const token = localStorage.getItem("token");

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
          <h1>Tareas</h1>
          </div>
          <div className="board">
            <h2>Lista de Tareas</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tasks;