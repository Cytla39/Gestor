import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import Register from './components/Register/Register.jsx'
import Tasks from "./components/Tasks/Tasks.jsx";
import Teams from "./components/Teams/Teams.jsx";
import Users from "./components/Users/Users.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Settings from "./components/Settings/Settings.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} exac />
        <Route path="dashboard" element={<Dashboard />} exac />
        <Route path="register" element={<Register />} exac />
        <Route path="tasks" element={<Tasks />} exac />
        <Route path="teams" element={ <Teams />} exac />
        <Route path="users" element={ <Users />} exac />
        <Route path="projects" element={ <Projects />} exac />
        <Route path="settings" element={ <Settings />} exac />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
