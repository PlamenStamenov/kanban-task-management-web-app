import React from 'react';
import './Dashboard.scss';
import Header from '../../components/header/Header';
import Board from '../../components/board/Board';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard__container">
            <Header />
            <Sidebar />
            <Board />
        </div>
    );
};

export default Dashboard;