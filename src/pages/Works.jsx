import React, { useEffect, useState, useRef } from 'react';
import baharImg from '../assets/images/bahar.jpg';
import studioRiguLogo from '../assets/images/studio_rigu_logo.png';
import vrindaImg from '../assets/images/vrinda.jpg';
import rheaImg from '../assets/images/rhea.jpg';
import nonames from '../assets/images/nonames.jpg';
import Loader from '../components/Loader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const youtubeShortsBahar = ['zPLiaQ-C-V8', 'wnYtfYzAqwA', '-RFGMum_V3s', 's_r3bw-jc5A', 'hkagi4pL83I','zPLiaQ-C-V8', 'wnYtfYzAqwA', '-RFGMum_V3s', 's_r3bw-jc5A', 'hkagi4pL83I'];
const youtubeShortsStudioRigu =  ['FZXiWHJtzQo', 'Bco2USB48uY', '7kRYi1LKQDU', 'FZXiWHJtzQo', 'Bco2USB48uY', '7kRYi1LKQDU'];
const youtubeShortsVrinda = ['zPLiaQ-C-V8', 'wnYtfYzAqwA', '-RFGMum_V3s', 's_r3bw-jc5A', 'hkagi4pL83I','zPLiaQ-C-V8', 'wnYtfYzAqwA', '-RFGMum_V3s', 's_r3bw-jc5A', 'hkagi4pL83I'];
const youtubeShortsRhea = ['zPLiaQ-C-V8', 'wnYtfYzAqwA', '-RFGMum_V3s', 's_r3bw-jc5A', 'hkagi4pL83I','zPLiaQ-C-V8', 'wnYtfYzAqwA', '-RFGMum_V3s', 's_r3bw-jc5A', 'hkagi4pL83I'];
const youtubeShortsNoNames = ['FZXiWHJtzQo', 'Bco2USB48uY', '7kRYi1LKQDU', 'FZXiWHJtzQo', 'Bco2USB48uY', '7kRYi1LKQDU'];

const VideoThumbnailPlayer = ({ videoId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="min-w-[200px] sm:min-w-[220px] aspect-[9/16] bg-black rounded-xl shadow-lg snap-start overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {!isHovered ? (
          <img src={thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" draggable={false} loading="lazy" />
        ) : (
          <iframe
            className="w-full h-full"
            src={iframeSrc}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        )}
      </div>
    </div>
  );
};

const Section = ({ img, alt, text, reverse = false }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-6 py-12`}>
    <img src={img} alt={alt} className="w-[30vh] aspect-square object-cover rounded-full shadow-md" />
    <p className="text-base font-normal leading-normal py-3" dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

const ScrollableVideoRow = ({ videoIds }) => {
  const scrollRef = useRef(null);
  const scrollBy = 260;

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * scrollBy, behavior: 'smooth' });
  };

  return (
    <div className="relative px-6 py-6">
      <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2">
        <ChevronLeft />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-5 no-scrollbar scroll-smooth scroll-pl-4 snap-x snap-mandatory backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-5"
      >
        {videoIds.map((id, index) => <VideoThumbnailPlayer key={index} videoId={id} />)}
      </div>
      <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2">
        <ChevronRight />
      </button>
    </div>
  );
};

const Works = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white">
      <div className="px-4 sm:px-[15%] pt-20 pb-10 border-b border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <Section
          img={baharImg}
          alt="Bahar Dhawan Rohtagi"
          text="Bahaar Dhawan Rohatgi is a distinguished Indian contemporary artist renowned for her innovative mixed-media creations that seamlessly blend her legal background with her artistic pursuits. Initially practicing law for five years, Bahaar transitioned to art, becoming a self-taught artist whose works are deeply influenced by cosmic themes, dreams, and societal narratives. Her art employs diverse materials such as resin, rubber, cement, and sand, resulting in textured pieces that explore themes like feminism, ecology, and the cosmos. Bahaar's unique approach has garnered international recognition, including the prestigious SAARC Award for Best Emerging Artist in 2017."
        />
        <ScrollableVideoRow videoIds={youtubeShortsBahar} />
      </div>

      <div className="flex justify-center items-center bg-primary text-black py-12 px-4 sm:px-[15%] border-b border-black/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="md:w-1/3 text-center md:text-left">
            <img src={studioRiguLogo} alt="Studio Rigu" className="w-[35vh] aspect-square object-center rounded-full shadow-md" />
            <p className="mt-4 text-base font-normal leading-normal">
              <strong>Studio Rigu</strong> is a contemporary Indian fashion label founded by Riya Gupta in 2018. Known for its blend of comfort and elegance, the brand focuses on empowering women through bold, modern silhouettes. It combines masculine fabrics with feminine styles and emphasizes sustainability using eco-friendly materials like Cupro and organic cotton. Studio Rigu offers dresses, co-ords, kaftans, and more, featuring vibrant prints and a globally inspired aesthetic.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <ScrollableVideoRow videoIds={youtubeShortsStudioRigu} />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-[15%] py-12 border-b border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <Section
          img={vrindaImg}
          alt="Vrinda Suri"
          text="Vrinda Suri is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from NIFT and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Manish Malhotra x Samsonite and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll."
        />
        <ScrollableVideoRow videoIds={youtubeShortsVrinda} />
      </div>

      <div className="px-4 sm:px-[15%] pb-20 border-b border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <Section
          img={rheaImg}
          alt="Rhea Kapahi"
          text="Rhea Kapahi is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from LASALLE College of the Arts and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Tarun Tahiliani x Tasva and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll."
          reverse
        />
        <ScrollableVideoRow videoIds={youtubeShortsRhea} />
      </div>

      <div className="flex justify-center items-center bg-primary text-black py-12 px-4 sm:px-[15%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="md:w-1/3 text-center md:text-left">
            <img src={nonames} alt="No Names" className="w-[35vh] aspect-square object-cover rounded-full shadow-md" />
            <p className="mt-4 text-base font-normal leading-normal">
              <strong>No Names</strong> is an exclusive dating app designed for discerning individuals seeking authentic, meaningful connections. With robust ID verification, privacy-first features, and a dedicated panic button, it ensures safety and trust at every step. By fostering genuine real-world meetups and enforcing strict community standards, No Names redefines modern dating with elegance and integrity.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <ScrollableVideoRow videoIds={youtubeShortsNoNames} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
