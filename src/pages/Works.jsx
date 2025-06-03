import React, { useEffect, useState } from 'react';
import baharImg from '../assets/images/bahar.jpg';
import studioRiguLogo from '../assets/images/studio_rigu_logo.png';
import vrindaImg from '../assets/images/vrinda.jpg';
import rheaImg from '../assets/images/rhea.jpg';
import nonames from '../assets/images/nonames.jpg';
import Loader from '../components/Loader';


const Works = () => {

  // Simulate loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const renderGrid = (count = 5) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-zinc-800 aspect-[3/5] w-full rounded-lg"></div>
      ))}
    </div>
  );

  const Section = ({ img, alt, text, reverse = false }) => (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-6 py-12`}>  
      <img src={img} alt={alt} className="w-[30vh] aspect-square object-cover rounded-full shadow-md" />
      <p className="text-base font-normal leading-normal py-3">
        {text}
      </p>
    </div>
  );

  return (
    <div className="bg-black text-white">
      {/* Section 1 */}
      <div className="px-4 sm:px-[10%] pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={baharImg} alt="Bahar Dhawan Rohtagi" className="w-[30vh] aspect-square object-cover rounded-full shadow-md sm:w-[25vh] xs:w-[20vh]" />
          <p className="text-base font-normal leading-normal py-3">
            <strong>Bahar Dhawan Rohtagi</strong> is a distinguished Indian contemporary artist renowned for her innovative mixed-media creations that seamlessly blend her legal background with her artistic pursuits. Initially practicing law for five years, Bahaar transitioned to art, becoming a self-taught artist whose works are deeply influenced by cosmic themes, dreams, and societal narratives. Her art employs diverse materials such as resin, rubber, cement, and sand, resulting in textured pieces that explore themes like feminism, ecology, and the cosmos. Bahaar's unique approach has garnered international recognition, including the prestigious SAARC Award for Best Emerging Artist in 2017. <br /><br />
            Beyond her artistic endeavors, Bahaar is also celebrated as an influencer and advocate for sustainability in art. Her journey from law to art exemplifies a fusion of discipline and creativity, making her a prominent figure in India's contemporary art scene.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-[10%] pb-10">
        {renderGrid(5)}
      </div>

      {/* Section 2 */}
      <div className="flex justify-center items-center bg-primary text-black py-12 px-4 sm:px-[10%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-2/3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-yellow-400 aspect-[3/5] w-full rounded-lg"></div>
            ))}
          </div>
          <div className="text-center md:text-left md:w-1/3">
            <img src={studioRiguLogo} alt="Studio Rigu Logo" className="w-[30vh] aspect-square object-center rounded-full shadow-md" />
            <p className="mt-4 text-base font-normal leading-normal">
              <strong>Studio Rigu</strong> is a contemporary Indian fashion label founded by Riya Gupta in 2018. Known for its blend of comfort and elegance, the brand focuses on empowering women through bold, modern silhouettes. It combines masculine fabrics with feminine styles and emphasizes sustainability using eco-friendly materials like Cupro and organic cotton. Studio Rigu offers dresses, co-ords, kaftans, and more, featuring vibrant prints and a globally inspired aesthetic.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="px-4 sm:px-[10%] py-12">
        <Section
          img={vrindaImg}
          alt="Vrinda Suri"
          text="<strong>Vrinda Suri</strong> is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from NIFT and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Manish Malhotra x Samsonite and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll."
        />
        <div className="mt-8">
          {renderGrid(5)}
        </div>
      </div>

      {/* Section 4 */}
      <div className="px-4 sm:px-[10%] pb-20">
        <Section
          img={rheaImg}
          alt="Rhea Kapahi"
          text="<strong>Rhea Kapahi</strong> is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from LASALLE College of the Arts and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Tarun Tahiliani x Tasva and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll."
          reverse
        />
        <div className="mt-8">
          {renderGrid(5)}
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex justify-center items-center bg-primary text-black py-12 px-4 sm:px-[10%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="md:w-1/3 text-center md:text-left">
            <img src={nonames} alt="No Names Logo" className="w-[35vh] aspect-square object-cover rounded-full shadow-md" />
            <p className="mt-4 text-base font-normal leading-normal">
              <strong>No Names</strong> is an exclusive dating app designed for discerning individuals seeking authentic, meaningful connections. With robust ID verification, privacy-first features, and a dedicated panic button, it ensures safety and trust at every step. By fostering genuine real-world meetups and enforcing strict community standards, No Names redefines modern dating with elegance and integrity.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-2/3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-yellow-400 aspect-[3/5] w-full rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="px-4 sm:px-[10%] py-12">
        <Section
          img={vrindaImg}
          alt="Vrinda Suri"
          text="<strong>Vrinda Suri</strong> is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from NIFT and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Manish Malhotra x Samsonite and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll."
        />
        <div className="mt-8">
          {renderGrid(5)}
        </div>
      </div>

      {/* Section 7 */}
      <div className="px-4 sm:px-[10%] pb-20">
        <Section
          img={rheaImg}
          alt="Rhea Kapahi"
          text="<strong>Rhea Kapahi</strong> is a fashion-forward creative whose content sits at the intersection of elegance and storytelling. With roots in design from LASALLE College of the Arts and a signature aesthetic that blends muted tones, natural light, and cinematic frames, she curates fashion moments that feel both intimate and editorial. Her collaborations with brands like Tarun Tahiliani x Tasva and Charles & Keith reflect a style that is refined, slow, and quietly luxurious — always more story than scroll."
          reverse
        />
        <div className="mt-8">
          {renderGrid(5)}
        </div>
      </div>

      {/* Footer Quote */}
      <div className="bg-primary text-black py-16 px-4 sm:px-[10%] text-center">
        <p className="text-xl font-normal leading-normal">
          At RCE Media, every frame is a decision, every cut is a commitment, and every story is crafted to be remembered.
        </p>
      </div>
    </div>
  );
};

export default Works;
