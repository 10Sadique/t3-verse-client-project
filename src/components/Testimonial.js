import React from 'react';

import amazon from '../assets/amazon.png';
import amd from '../assets/amd.png';
import cisco from '../assets/cisco.png';
import dropcam from '../assets/dropcam.png';
import logitech from '../assets/logitech.png';
import spotify from '../assets/spotify.png';

const Testimonial = () => {
    return (
        <div className="grid grid-cols-3 gap-10 mt-40 mb-32 md:grid-cols-6">
            <img className="mx-auto w-14" src={amazon} alt="" />
            <img className="mx-auto w-14" src={amd} alt="" />
            <img className="mx-auto w-14" src={cisco} alt="" />
            <img className="mx-auto w-14" src={dropcam} alt="" />
            <img className="mx-auto w-14" src={logitech} alt="" />
            <img className="mx-auto w-14" src={spotify} alt="" />
        </div>
    );
};

export default Testimonial;
