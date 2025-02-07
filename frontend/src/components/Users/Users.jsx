import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Users.css';

const Users = () => {
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
          <h1>Usuarios</h1>
          </div>
          <div className="board">
            <h2>Administración de Usuarios</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Users;