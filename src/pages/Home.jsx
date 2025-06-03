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
    </div>

  );
};

export default Home;
