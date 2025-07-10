import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = ({ photos }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Gallery</h2>

      {/* Arrow Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ArrowRight />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="min-w-[400px] max-w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={photo}
              alt={`Photo ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
