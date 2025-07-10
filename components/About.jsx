export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f6f6f6]]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="w-17 h-1 rounded-sm md:my-3 bg-[#1492e6]" />
        <div className="space-y-8">
          <h1 className="text-xl text-gray-600">Company Profile</h1>

          <div className="grid lg:grid-cols-2 gap-16  items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#112e59]">
                Create A Strong Business Presence
              </h2>
              <p className="text-xl text-gray-600">
                Combining our unrivaled specialism in specific digital
                activities with a strategic & differentiated approach, Aakash
                Labs is able to meet the increasingly complex needs of clients
                in an effortless yet productive manner in the constantly
                evolving digital landscape.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-orange-700 transition duration-300">
                See All
              </button>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="./assets/image2.jpg"
                  alt="About Us"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-[#112d58] justify-center text-center mt-50">
        The Team You Look For
      </h1>
      <p className="text-xl text-[#7f818d] max-w-220 mx-auto text-center mt-10">
        Aakash Labs is headquartered in Nepal, providing digital marketing, data
        mining, and machine learning services to clients around the globe.
      </p>

      <div className=" max-w-7xl mx-80 px-4 sm:px-6 lg:px-8 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="rounded-xl shadow-lg h-30 w-55 justify-center text-center text-5xl font-bold text-[#1492e6]  ">
          <h1 className="text-[#1592E7]">100%</h1>
          <h1 className="text-[#000000] text-xs font-bold  md:my-4 ">
            SATISFACTION
          </h1>
        </div>
        <div className="rounded-xl shadow-lg h-30 w-55 justify-center text-center text-5xl font-bold text-[#1492e6] ">
          <h1 className="text-[#FE7C27]">254</h1>
          <h1 className="text-[#000000] text-xs font-bold  md:my-4  ">
            PROJECTS
          </h1>
        </div>
        <div className="rounded-xl shadow-lg h-30 w-55 justify-center text-center text-5xl font-bold text-[#1492e6]">
          <h1 className="text-[#1592E7]" >40768</h1>
          <h1 className="text-[#000000] text-xs font-bold  md:my-4  ">
            WORKING HOURS
          </h1>
        </div>
        <div className="rounded-xl shadow-lg h-30 w-55 justify-center text-center text-5xl font-bold text-[#1492e6]">
          <h1 className="text-[#FE7C27]">400</h1>
          <h1 className="text-[#000000] text-xs font-bold   md:my-4 ">
            LOVELY CLIENTS
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 ">
        <h1 className="text-4xl font-bold text-[#112d58] ">
          Upskill Employees, Empower Clients
        </h1>
      </div>
      <p className="text-xl text-[#7f818d] max-w-208 mx-87 mt-10">
        Our experienced strategists will help you set an objective and choose
        your tools, developing a plan that is custom-built for your business.
      </p>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-16  items-center">
          <div className="col-span-1">
            <div className="">
              <img
                src="./assets/svg1.svg"
                alt="About Us"
                className="w-[350px] h-[350px] "
              />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#112e59]">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 md:my-6">
              Aakash Labs provides an advanced implementation of digital
              technologies in areas that are crucial to your business,
              supporting your ambition and helping to retain your customer base.
              We give life to your ideas. <br />
              <br />
              Aakash Labs combines tech expertise and business intelligence to
              catalyze change and deliver results. We make sure we add value to
              those businesses that aim to add value to their customers. When we
              first get to know you, we’ll immediately begin analyzing your
              website. We want to know everything we can about your brand
            </p>
          </div>
        </div>
      </div>
      {/* Our Team */}
    </section>
  );
}
