'use client'

import { useState, useEffect } from "react";

import { FaCircleUser } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLongArrowAltDown } from "react-icons/fa";
import Section from "./components/Section";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";
function App() {

  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition < screenHeight * 0.5) {
        setActiveStep(1);
      } else if (scrollPosition >= screenHeight * 0.2 && scrollPosition < screenHeight * 1.5) {
        setActiveStep(2);
      } else if (scrollPosition >= screenHeight * 1.5 && scrollPosition < screenHeight * 2.5) {
        setActiveStep(3);
      } else {
        setActiveStep(4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div >
      <div className=" bgimg2 pb-[1300px] ">
        <header className=" flex items-center justify-between pl-20 pr-20 pt-16">
          <img src="/logo.svg" alt="" />
          <nav className="flex items-center gap-10 text-lg font-semibold">
            <p className="text-[18px] font-sans  hover:text-[#FBD784] cursor-pointer "  >Equipment</p>
            <p className="text-[18px] font-sans  hover:text-[#FBD784] cursor-pointer "  >About us</p>
            <p className="text-[18px] font-sans  hover:text-[#FBD784] cursor-pointer "  >Blog</p>
          </nav>
          <span className="flex items-center text-2xl gap-3">
            <FaCircleUser />
            <p className="hover:text-[#FBD784] cursor-pointer  text-lg font-semibold">Account</p>
          </span>
        </header>
        <main className=" pr-20 pt-[198px]  flex justify-between">
          <div id="folow" className="flex items-center text-2xl  gap-3">
            <p className=" text-lg font-semibold">Follow us</p>
            <FaInstagram />
            <IoLogoTwitter />
          </div>
          <div className="flex flex-col gap-6">
            <h3 id="h3" className="flex items-center gap-6 w-[150px] ">
              <img src="/chzq.svg" alt="" />
              <img src="/text.svg" alt="" />
            </h3>
            <h2 className="text-[68px]">Be prepared For The <br /> Mountains And Beyond!</h2>
            <span className="flex items-center gap3">
              <p>Scroll down</p>
              <FaLongArrowAltDown />
            </span>
          </div>
          {/* <div className="cursoruchun flex gap-8">
            <span className="flex flex-col items-end text-[18px] gap-16">
              <h3>Start</h3>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </span>
            <div className="w-[4px] flex items-start rounded-md bg-[#FFFFFF]">
              <div className="bg-[#222] h-1/3  w-1"></div>
            </div>
          </div> */}
          <div className="relative">
            <div className="fixed top-[60%] right-10 transform -translate-y-1/2 p-6 text-white  z-10">

              <div className="text-center  ">
                <div className="flex flex-col gap-12 ">
                  <span className={`text-lg ${activeStep === 1 ? 'text-[#FBD784] font-sans' : 'text-white'}`}>Start</span>
                  <span className={`text-lg ${activeStep === 2 ? 'text-[#FBD784] font-sans' : 'text-white'}`}>01</span>
                  <span className={`text-lg ${activeStep === 3 ? 'text-[#FBD784] font-sans' : 'text-white'}`}>02</span>
                  <span className={`text-lg ${activeStep === 4 ? 'text-[#FBD784] font-sans' : 'text-white'}`}>03</span>
                </div>
              </div>
            </div>
          </div>
          {/* sssssssssssssssssssssssssssss */}
        </main>
      </div>
      <div className="bg-[#0B1D26] pb-[400px]  pl-[279px] pr-[230px]     ">
        <div className="flex items-center justify-between ">
          <div className="nolbr ">
            <div className="absolute mt-16 ml-36">
              <p>
                <img src="/get.png" alt="" />
              </p>
              <h2 className="text-7xl pt-8">What level of  hiker <br /> are you?</h2>
              <p className="hover:text-[#FBD784] cursor-pointer  pt-[27px]">
                Determining what level of hiker you are can be an important tool when <br /> planning future hikes. This hiking level guide will help you plan hikes <br /> according to different hike ratings set by various websites like All Trails and <br /> Modern Hiker. What type of hiker are you – novice, moderate, advanced <br />
                moderate, expert, or expert backpacker?
              </p>
              <p>

              </p>
            </div>
          </div>
          <img className=" " src="/sayyox.png" alt="" />
        </div>
      </div>
      <Section />
      <Section3 />
      <Footer />
    </div>
  )

}

export default App;

