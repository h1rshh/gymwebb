'use client'
import React from 'react';
import useAOS from './hooks/useAOS';
import { toggleNavbar } from './utils/toggleNavbar';
import { useEffect } from 'react';


export default function Page() {
  useAOS();
  return (
    <>
      

      {/* Hero Section */}
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "95vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')",
            }}
          >
            <span className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Feel The <span className="text-orange-500">Power</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Welcome to The Power Room. We are a fitness and training center that focuses on pushing you to your absolute limit.
                    Download our complete brochure to get started today!
                  </p>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px", transform: "translateZ(0px)" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="relative py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
                <div className="md:pr-12">
                  <small className="text-orange-500">About our gym</small>
                  <h3 className="text-4xl uppercase font-bold">Safe Body Building</h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-dumbbell fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">The latest & greatest gym equipment</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-hard-hat fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">5-inch, quality foam floor padding</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-users fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">3 professional trainers</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">Meet Our Trainers</h2>
                <p className="text-lg leading-relaxed m-4">
                  Our trainers are here to dedicate the time and effort that you need to get in the best shape of your life
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {/* Trainer Card 1 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1597347343908-2937e7dcc560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sam Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Gym Trainer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Trainer Card 2 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-up">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://i.pinimg.com/enabled/564x/72/fe/f5/72fef5a1d51b6e103a970a05c8d6c5e9.jpg"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jane Doe</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Gym Trainer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Trainer Card 3 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-left">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://i.pinimg.com/enabled/564x/f9/a7/a3/f9a7a30e3f6cada77cbd30f47f5a430f.jpg"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alex Jones</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Gym Trainer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-orange-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
