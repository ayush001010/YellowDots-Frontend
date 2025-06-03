import React, { use } from 'react';
import video from '../assets/videos/home.mp4';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const Navigate = useNavigate();

  return (
    <div className=" relative w-full h-screen overflow-hidden pt-16">
    <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
    >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl mb-6">We bring you the best of services and innovation.</p>
        <button onClick={()=>Navigate('/work')} className="bg-primary hover:bg-black text-black hover:text-primary font-semibold py-2 px-6 rounded">
        Get Started
        </button>
    </div>
    </div>

  );
};

export default Home;
