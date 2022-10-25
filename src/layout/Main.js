import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="w-full mt-24">
                <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto w-full mb-14">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
