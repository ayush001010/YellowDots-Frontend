import React from 'react';
import baharImg from '../assets/images/bahar.jpg';
import studioRiguLogo from '../assets/images/studio_rigu_logo.png';
import vrindaImg from '../assets/images/vrinda.jpg';
import rheaImg from '../assets/images/rhea.jpg';

const Works = () => {
  return (
    <div className="bg-black text-white">
      {/* Section 1 - Bahar Dhawan Rohtagi */}
      <div className="px-4 sm:px-[10%] pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={baharImg} alt="Bahar Dhawan Rohtagi" className="w-[30vh] h-[30vh] object-contain rounded-full shadow-md" />
          <p className="text-base font-normal leading-normal">
            <strong>Bahar Dhawan Rohtagi</strong> Bahaar Dhawan Rohatgi is a distinguished Indian contemporary artist renowned for her innovative mixed-media creations that seamlessly blend her legal background with her artistic pursuits. Initially practicing law for five years, Bahaar transitioned to art, becoming a self-taught artist whose works are deeply influenced by cosmic themes, dreams, and societal narratives. Her art employs diverse materials such as resin, rubber, cement, and sand, resulting in textured pieces that explore themes like feminism, ecology, and the cosmos. Bahaar's unique approach has garnered international recognition, including the prestigious SAARC Award for Best Emerging Artist in 2017. <br /><br />
            Beyond her artistic endeavors, Bahaar is also celebrated as an influencer and advocate for sustainability in art. Her journey from law to art exemplifies a fusion of discipline and creativity, making her a prominent figure in India's contemporary art scene.
          </p>
        </div>
      </div>

      {/* Placeholder for image grid */}
      <div className="px-4 sm:px-[10%] pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-zinc-800 h-48 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Section 2 - Studio Rigu */}
      <div className="bg-primary text-black py-12 px-4 sm:px-[10%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-2/3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-yellow-400 h-48 rounded-lg"></div>
            ))}
          </div>
          <div className="text-center md:text-left md:w-1/3">
            <img src={studioRiguLogo} alt="Studio Rigu Logo" className="w-[30vh] h-[30vh] object-center rounded-full shadow-md md:mx-0" />
            <p className="mt-4 text-base font-normal leading-normal">
              <strong>Studio Rigu</strong>is a contemporary Indian fashion label founded by Riya Gupta in 2018. Known for its blend of comfort and elegance, the brand focuses on empowering women through bold, modern silhouettes. It combines masculine fabrics with feminine styles and emphasizes sustainability using eco-friendly materials like Cupro and organic cotton. Studio Rigu offers dresses, co-ords, kaftans, and more, featuring vibrant prints and a globally inspired aesthetic.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Vrinda Suri */}
      <div className="px-4 sm:px-[10%] py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={vrindaImg} alt="Vrinda Suri" className="w-[30vh] h-[30vh] object-contain rounded-full shadow-md" />
          <p className="text-base font-normal leading-normal">
            <strong>Vrinda Suri</strong>is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from NIFT and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Manish Malhotra x Samsonite and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-zinc-800 h-48 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Section 4 - Rhea Kapahi */}
      <div className="px-4 sm:px-[10%] pb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <p className="text-base font-normal leading-normal order-2 md:order-1">
            <strong>Rhea Kapahi</strong>Rhea Kapahi is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from LASALLE College of the Arts and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Tarun Tahiliani x Tasva and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll.
          </p>
          <img src={rheaImg} alt="Rhea Kapahi" className="w-[30vh] h-[30vh] object-contain rounded-full shadow-md order-1 md:order-2" />
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-zinc-800 h-48 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Section 2 - Studio Rigu */}
      <div className="bg-primary text-black py-12 px-4 sm:px-[10%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/3 text-center md:text-left">
            <img src={studioRiguLogo} alt="Studio Rigu Logo" className="w-[30vh] h-[30vh] object-center rounded-full shadow-md md:mx-0" />
            <p className="mt-4 text-base font-normal leading-normal">
              <strong>Studio Rigu</strong> is a contemporary Indian fashion label founded by Riya Gupta in 2018. Known for its blend of comfort and elegance, the brand focuses on empowering women through bold, modern silhouettes. It combines masculine fabrics with feminine styles and emphasizes sustainability using eco-friendly materials like Cupro and organic cotton. Studio Rigu offers dresses, co-ords, kaftans, and more, featuring vibrant prints and a globally inspired aesthetic.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-2/3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-yellow-400 h-48 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
