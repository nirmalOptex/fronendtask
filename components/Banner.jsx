import { ArrowRight, Play } from "lucide-react";
import Slider from "./slider";

const banners = [
  "/assets/image1.jpeg",
  "/assets/image4.jpeg",
  "/assets/image3.jpeg",
];
export default function Banner() {
  return (
    <>
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100  flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-8 space-x-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 ">
                Grow
                <span className="text-orange-600"> Your </span>
                Business With Us
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Aakash Labs combines technology with business intelligence to
                catalyze change and deliver data driven results. We're a dynamic
                team of passionate people with technical, creative & digital
                expertise
              </p>
              <p className="text-xl text-gray-600 max-w-lg">
                Where technology meets marketing
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10  ">
              <img
                src="./assets/gif.gif"
                alt="Technology Solutions"
                className="w-auto h-full rounded-2x1"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div> 
  
    </section>
    <section>
       <div className="bg-gray-50  flex items-center justify-center ">
      <Slider />
    </div>
    </section>
    
  </>
  );
}
