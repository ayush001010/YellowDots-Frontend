import React from 'react';
import about_image1 from '../assets/images/about_img_1.jpg';
import about_image2 from '../assets/images/about_img_2.jpg';
import about_image3 from '../assets/images/about_img_3.jpg';
import about_image4 from '../assets/images/about_img_4.jpg';

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* -------Intro Paragraph------- */}
      <div className="mx-4 sm:mx-[10%] pt-20 pb-10">
        <p className="text-lg font-light leading-normal">
          Hi, <br /><br />
          I am Ashvery, a graduate of IIT Dhanbad with a degree in Mechanical Engineering, and my journey has been anything but linear. While my academic path was rooted in engineering, the real value of my college years came from the communities I built, the ideas I explored, and the people I met — many of whom are now building companies and shaping industries. <br /><br />
          My time at IIT was filled with exploration. I traveled to campuses like IIT Bombay, IIT Madras, IIT BHU, and IIT Kharagpur, experiencing the rich creative and technical cultures that exist across the IIT ecosystem. I was part of our college’s Formula Bharat team, where we built an electric formula car from scratch — a project that demanded precision, collaboration, and vision. <br /><br />
          But while the world around me was driven by machines and mechanics, I found myself gravitating toward moments — expressions, movement, style, rhythm. I co-founded the Animation and Game Design Club at our college — one of the first initiatives of its kind — and also coordinated for the Student Innovation Cell, leading efforts across all tech clubs, including Inter IIT. These spaces allowed me to explore narrative design, visual experimentation, and digital creativity. <br /><br />
          That’s when I realized: I wasn’t just drawn to how things worked — I was drawn to how stories moved people.
        </p>
      </div>

      {/* -------Image Row 1------- */}
      <div className="mx-4 sm:mx-[10%] mb-10 flex flex-col gap-4">
        <div className="w-full">
          <img
            src={about_image1}
            alt="IIT Dhanbad Banner"
            className="w-full h-[47.78vh] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={about_image2}
            alt="Formula Bharat Workshop"
            className="w-full h-[46.56vh] object-cover rounded-lg shadow-md"
          />
          <img
            src={about_image3}
            alt="Formula Car Team"
            className="w-full h-[46.56vh] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* -------Story Continued Section------- */}
      <div className="mx-4 sm:mx-[10%] mb-10">
        <p className="text-lg font-light leading-normal">
          That’s when I realized: I wasn’t just drawn to how things worked — I was drawn to how stories moved people. <br /><br />
          And so began the shift. <br />
          I stepped out of college placements and decided to go all in with my passion and skills. What started as a spark soon turned into a calling. <br />
          I began my journey as a freelance video editor, working closely with creators and brands who needed more than just edits; they needed emotion, energy, and elegance stitched into every frame. <br /><br />
          As my experience deepened, so did my vision. I went on to build my own post-production agency — <strong>RCE Media</strong>. At RCE, we don’t just edit videos; we curate epic, pixel-perfect fashion cuts that stand out from trends and set new visual standards. Whether it’s a luxury brand campaign or an influencer reel meant to stop the scroll, every project is approached with cinematic precision and editorial flair. <br />
          Because in fashion, it’s not just about what you wear — it’s about how your story is told.
        </p>
      </div>

      {/* -------Image Row 2------- */}
      <div className="mx-4 sm:mx-[10%] mb-10">
        <img
          src={about_image4}
          alt="Ashvery editing video"
          className="w-full h-[52.89vh] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* -------Conclusion Paragraph------- */}
      <div className="mx-4 sm:mx-[10%] mb-20">
        <p className="text-lg font-light leading-normal">
          My work has led me to collaborate with some of the fashion industry’s most celebrated names — from Nikki Mehra and Bahar Dhawan Rustogi to Nisha Gandhi, Rehea Kapahi, Vrinda Suri, and more — crafting visual narratives that elevate personal brands and campaigns alike. <br /><br />
          At the heart of everything I do lies one goal: <br />
          <strong>To transform raw visuals into polished, emotionally resonant films that don’t just capture attention — they hold it.</strong> <br /><br />
          As a solo agency owner, I work with a select group of clients — those who value quality over quantity, and who understand the power of subtle visual storytelling. For me, nothing’s more fulfilling than working with people who believe in their vision but don’t always know how to express it. I want to make sure a story is not just seen, but felt. <br /><br />
          If your brand has a story worth telling, I’m here to ensure it’s told with elegance, edge, and unmistakable style.
        </p>
      </div>

      {/* -------Footer Quote Section------- */}
      <div className="bg-primary text-black py-16 px-4 sm:px-[10%] text-center">
        <p className="text-base font-normal leading-normal">
          At RCE Media, every frame is a decision, every cut is a commitment, and every story is crafted to be remembered.
        </p>
      </div>
    </div>
  );
};

export default About;
