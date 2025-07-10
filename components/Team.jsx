import React from "react";
import Carousel from "./Carousel";

const photoList = [
  "/image1.jpeg",
  "/image2.jpg",
  "/image1.jpeg",
  "/image2.jpg",
  "/image1.jpeg",
  "/image2.jpg",
];
const teamMembers = [
  {
    name: "DIPESH KARKI",
    title: "Finance Manager",
    image: "./team1.jpg",
  },
  {
    name: "Prayusha Shrestha",
    title: "HR Officer",
    image: "/team2.jpg",
  },
  {
    name: "Manta Lama",
    title: "Digital Marketing Co-ordinator",
    image: "/team3.jpg",
  },
  {
    name: "Dipak B K ",
    title: "Motion Graphics Designer & Video Editor",
    image: "/team4.jpg",
  },
  {
    name: "Aman Shrestha",
    title: "Aman Shrestha",
    image: "/team5.jpeg",
  },
  {
    name: "Rajan Sharma",
    title: "Marketing Officer",
    image: "/team6.jpeg",
  },
  {
    name: "Prajwol KC",
    title: "Software Engineer",
    image: "/team7.jpeg",
  },
  {
    name: "Sujan Karki",
    title: "Graphic Designer Intern",
    image: "/team8.jpeg",
  },
];
const Team = () => {
  return (
    <>
    <section id="team">
      <div className="py-10 px-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-50 h-50 object-cover rounded-full shadow-md border border-white border-7 "
              />
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500 italic">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* carousel */}
    <section className="mt-7"> <div className="  flex items-center justify-center mt-10">
      <Carousel photos={photoList} />
    </div></section>
    </>
  );
};

export default Team;
