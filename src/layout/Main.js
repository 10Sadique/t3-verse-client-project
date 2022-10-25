import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="w-full mt-14">
                <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto w-full mb-14">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;
