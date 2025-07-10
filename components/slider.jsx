import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "BUDDHI MAN BALAMI",
    role: "Managing Director – Q & U Hongkong Furniture",
    logo: "/team5.jpeg",
    message:
      "Aakash labs has to have handling and increasing traffic on our website with best strategy and customized campaigns with SEO, Social Media, Website Programs, SERP. We are impressed with their work and response.",
  },
  {
    name: "RAMESH PARAJULI",
    role: "Managing Director – Rupse Holidays",
    logo: "/team4.jpg",
    message:
      "As a travel agency, constant promotions and ad campaigns of new tour package offers is crucial to us. Aakash Labs has been consistent in their results and their time to respond has been commendable.",
  },
  {
    name: "RAJAN BARAL",
    role: "CEO – Merit",
    logo: "/team3.jpg",
    message:
      "Aakash Labs has increased our brand presence among students, and provided quality leads with customized Ad Campaigns.",
  },
  {
    name: "SIJAN NEUPANE",
    role: "Agni Group",
    logo: "/team2.jpg",
    message:
      "Being the sole distributors for Mahindra vehicles in Nepal, Aakash Labs helped us generate sales for new model launches and provide 360-degree online marketing services.",
  },
  {
    name: "Shailesh Wagle",
    role: "Digital Marketing Intern",
    logo: "/team1.jpg",
    message:
      "I have been associated with Aakashlabs for 3 months internship and I can say that I feel empowered with the kind of experiences that I gained in those months.",
  },
];

const Slider = () => {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Testimonials</h2>

      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-50"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-50"
      >
        <ArrowRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-white p-5 rounded-2xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
