import React, { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import Loader from "../components/Loader";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Utility to detect touch devices
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const VideoThumbnailPlayer = ({ videoId }) => {
  const iframeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isTouch) setIsHovered(false);
  };

  const handleClick = () => {
    if (isTouch) setIsHovered((prev) => !prev); // 👈 Tap to toggle on mobile
  };

  return (
    <div
      className="w-[22vh] sm:w-[24vh] md:w-[26vh] lg:w-[28vh] max-w-[260px] aspect-[9/16] bg-black rounded-xl shadow-lg snap-start overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // 👈 Only this added
    >
      {isHovered ? (
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&loop=1&playlist=${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const ScrollableVideoRow = ({ videoIds }) => {
  const scrollContainerRef = useRef(null);
  const scrollBy = 300;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction * scrollBy,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div className="overflow-x-auto no-scrollbar" ref={scrollContainerRef}>
        <div className="flex w-max gap-4 px-4 snap-x snap-mandatory scroll-smooth">
          {videoIds.map((id, idx) => (
            <VideoThumbnailPlayer key={idx} videoId={id} />
          ))}
        </div>
      </div>

      {/* Scroll Left Button */}
      <button
        onClick={() => scroll(-1)}
        className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll(1)}
        className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Section = ({
  img,
  alt,
  para,
  vertical = false,
  enlargeImage = false,
}) => (
  <div
    className={`flex ${
      vertical
        ? "flex-col items-center text-left"
        : "flex-col md:flex-row items-center md:items-start text-left"
    } gap-6 py-12`}
  >
    <img
      src={img}
      alt={alt}
      className={`${
        enlargeImage ? "w-[28vh]" : "w-[28vh]"
      } aspect-square object-center rounded-full shadow-md`}
    />
    <p className="text-base font-normal leading-normal px-4 md:px-0">{para}</p>
  </div>
);

const Works = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const { data } = await api.get("/works");
        setWorks(data);
      } catch (error) {
        console.error("Failed to fetch works:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorks();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      {works.map((w, idx) => {
        const isOdd = idx % 2 === 1;
        const bgClass = isOdd
          ? "bg-yellow-500 text-black"
          : "bg-black text-white";

        return (
          <div key={w._id} className={bgClass}>
            <div className="px-4 sm:px-[15%] py-10">
              {isOdd ? (
                // Yellow layout: image left, videos right — swap order on mobile
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 max-w-screen-xl mx-auto overflow-hidden">
                  <div className="w-full md:w-1/3 order-1 md:order-2">
                    <Section
                      img={`${window.location.origin}${w.image}`}
                      alt={w.name}
                      para={w.para}
                      vertical={true}
                    />
                  </div>
                  <div className="w-full md:w-2/3 order-2 md:order-1">
                    <ScrollableVideoRow videoIds={w.links} />
                  </div>
                </div>
              ) : (
                <>
                  <Section
                    img={`${window.location.origin}${w.image}`}
                    alt={w.name}
                    para={w.para}
                    vertical={false}
                    enlargeImage={true}
                  />
                  <ScrollableVideoRow videoIds={w.links} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
