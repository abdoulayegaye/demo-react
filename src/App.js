import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskStats from './components/TaskStats';
import './App.css';

function App() {
    return (
        <div className="app">
            <nav className="nav">
                <Link to="/">Liste des tâches</Link>
                <Link to="/stats">Statistiques</Link>
            </nav>

            <Routes>
                <Route path="/" element={
                    <>
                        <AddTask />
                        <TaskList />
                    </>
                } />
                <Route path="/stats" element={<TaskStats />} />
            </Routes>
        </div>
    );
}

export default App;