import Navbar from "../components/Navbar";
import backImage from "../../public/images/pageImage.png";
import NewCards from "../components/NewCards";
import about from "../../public/images/about.png";
import mapImage from '../../public/images/image3.png';
import MemberOne from '../../public/images/team1.png';
import MemberTwo from '../../public/images/team2.png';
import MemberThree from '../../public/images/team3.png';
import Vedioimage from '../../public/images/vedioimage.png';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
        <div>
        <Navbar/>
        <img className="w-full h-auto object-cover" src={backImage} alt="Background" />
        <div className="absolute top-20 left-36 sm:top-28 sm:left-80 md:inset-0 flex flex-col justify-center items-center ">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-white font-bold">ABOUT US</h1>
            <h3 className="text-xs sm:text-sm md:text-md lg:text-4xl text-white mt-2">ABOUT</h3>
        </div>
        <NewCards/>
        <div className="w-full h-auto flex flex-row">
          <div className="w-3/4">
             <div className="h-[110px] bg-[#f4e4ca]"></div>
             <img className="relative h-[600px]" src={about} alt="aboutpage"/>
             <div className="flex flex-row absolute top-[955px] left-[55px] w-56 h-28 bg-white">
                <h1 className="mt-5 ml-5 text-6xl font-bold text-[#fcdba6]">25</h1>
                <h3 className="mt-6 ml-3 text-xl font-bold">Years of Experience</h3>
             </div>
          </div>
          <div className="w-1/4 relative top-[80px] md:top-10 md:w-2/4 md:flex md:flex-col md:justify-center md:items-center">
            <div className="md:w-[400px] md:ml-20">
             <h1 className="head text-left ml-6 md:text-2xl md:m-5">BEST ARCHITECT</h1>
             <h1 className="head text-left ml-6  text-[#FCDAA4] md:text-6xl md:m-5">A SMALL EFFICIENT <span className="text-[#F9A31B]">INTERIOR</span></h1>
             <h1 className="head text-left ml-6  text-[#A2A2A2] md:text-6xl md:m-5 ">DESIGNING TEAM</h1>
             <h1 className="head text-left ml-6 md:text-2xl md:m-5 ">WELCOME TO RUDRA CONSTRUCTION SHOWCASE</h1>
             <img className="w-[300px] md:w-[180px] h-auto md:ml-10" src={mapImage} alt="mapimage"/>
            </div> 
          </div>
        </div>
        <div className="w-full h-[220px] bg-[#fcdba6]">
            <div className="w-full h-auto flex md:justify-center md:items-center">
             <div className='flex justify-center items-center w-[1050px] h-auto'>
              <div className="flex flex-col md:flex-row items-left md:justify-around  text-xl font-bold py-20 mb-8 md:gap-32">
               <div className='flex py-4'>
                 <div className="text-4xl pr-2">160</div>
                 <div>
                    <div className="text-black text-sm ">SQUARE</div>
                    <div className="text-white text-sm ">COMPLEX</div>
                 </div>
               </div>
               <div className='flex py-4 '>
                 <div className="text-4xl pr-2">180</div>
                 <div>
                    <div className="text-black text-sm">HAPPY</div>
                    <div className="text-white text-sm">CLIENTS</div>
                 </div>
               </div>
               <div className='flex py-4'>
                 <div className="text-4xl pr-2">100</div>
                 <div>
                    <div className="text-black text-sm">COMPLETED</div>
                    <div className="text-white text-sm">PROJECTS</div>
                 </div>
                 </div>
               <div className='flex py-4'>
               <div className="text-4xl pr-2">198</div>
                  <div>
                     <div className="text-black text-sm">TEAM</div>
                     <div className="text-white text-sm">MEMEBERS</div>
                  </div>
               </div>
               </div>
           </div>
          </div>
        </div>
        <div className="w-full h-[600px] bg-black">
          <h1 className="text-white text-5xl text-center pt-28">MEET THE <span className="text-[#fcdba6]">TEAM</span></h1>
          <h3 className="text-white text-xl text-center pt-5">OUR TEAM MEMBER</h3>
          <div className="w-full h-[500px] flex justify-center items-center">
          <div className="mt-4 w-[1025px] h-[500px] grid grid-cols-3">
              <div className="m-10 mt-5 ml-20 mr-0 col-span-1 bg-white border border-[#d0cfcf]">
                  <img src={MemberOne} alt="teammember"/> 
                  <h1 className="ml-10 mt-10 font-bold">IVET HOUZE</h1> 
                  <h2 className="ml-10">ARCHITECT ASSISTANT</h2>            
              </div>
              <div className="m-10 mt-5 col-span-1 border bg-white border-[#d0cfcf]">
                  <img src={MemberTwo} alt="teammember"/>
                  <h1 className="ml-10 mt-10 font-bold">JONEY VINO</h1>
                  <h2 className="ml-10">ARCHITECT ASSISTANT</h2>
              </div>
              <div className="m-10 mt-5 mr-20 ml-0 col-span-1 bg-white border border-[#d0cfcf]">
                  <img src={MemberThree} alt="teammember"/>
                  <h1 className="ml-10 mt-10 font-bold">MARIA BILL</h1>
                  <h2 className="ml-10 ">ARCHITECT ASSISTANT</h2>
              </div>
          </div>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <div className="relative w-[1000px] h-[500px] bg-[#fcdba6]">
               <img className="absolute top-10 right-10" src={Vedioimage} alt="img"/>
            </div>
          </div>
          <div className="mt-20"><Footer/></div>
        </div>
      </div>
    </div>
  )
}

export default About