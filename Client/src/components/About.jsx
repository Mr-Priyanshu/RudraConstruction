import backImage from "../../public/images/pageImage.png";
import NewCards from "../components/NewCards";
import about from "../../public/images/about.png";
import mapImage from '../../public/images/image3.png';
import MemberTwo from '../../public/images/team2.png';
import MemberThree from '../../public/images/team3.png';

function About() {
  return (
    <div>
        <div>
        
        <img className="w-full h-auto object-cover pt-12" src={backImage} alt="Background" />
        <div className="absolute  flex justify-center  md:inset-0 -mt-14 ps-32 sm:ps-0 sm:mt-44 ">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-white font-bold">ABOUT US</h1>
        </div>
        <NewCards />
        <div className="w-full h-auto flex flex-col justify-center md:flex-row">
          <div className="w-full md:w-3/4">
             <div className="h-[110px] bg-[#f4e4ca]"></div>
             <img className="relative h-[400px] md:h-[600px]" src={about} alt="aboutpage" />
             <div className="flex flex-row absolute top-[64rem] md:top-[955px] left-[20px] md:left-[55px] w-56 h-28 bg-white">
                <h1 className="mt-5 ml-5 text-4xl md:text-6xl font-bold text-[#fcdba6]">25</h1>
                <h3 className="mt-6 ml-3 text-sm md:text-xl font-bold">Years of Experience</h3>
             </div>
          </div>
          <div className="w-full md:w-2/4 relative top-[20px] md:top-10 md:flex md:flex-col md:justify-center md:items-center">
            <div className="md:w-[400px] md:ml-20">
             <h1 className="head text-left ml-6 text-lg md:text-2xl md:m-5">BEST ARCHITECT</h1>
             <h1 className="head text-left ml-6 text-[#FCDAA4] text-3xl md:text-6xl md:m-5">A SMALL EFFICIENT <span className="text-[#F9A31B]">INTERIOR</span></h1>
             <h1 className="head text-left ml-6 text-[#A2A2A2] text-3xl md:text-6xl md:m-5">DESIGNING TEAM</h1>
             <h1 className="head text-left ml-6 text-lg md:text-2xl md:m-5">WELCOME TO RUDRA CONSTRUCTION SHOWCASE</h1>
             <img className="w-[200px] md:w-[180px] h-auto md:ml-10" src={mapImage} alt="mapimage" />
            </div> 
          </div>
        </div>
        <div className="w-full h-[220px] mt-10 px-10 bg-[#fcdba6]">
            <div className="w-full h-auto flex flex-col md:flex-row md:justify-center md:items-center">
             <div className='flex justify-center items-center w-full md:w-[1050px] h-auto'>
              <div className="flex flex-wrap justify-center md:flex-row items-left md:justify-around text-lg md:text-xl font-bold py-10 md:py-20 mb-4 md:mb-8 gap-8 md:gap-32">
               <div className='flex py-2'>
                 <div className="text-2xl md:text-4xl pr-2">160</div>
                 <div>
                    <div className="text-black text-xs md:text-sm">SQUARE</div>
                    <div className="text-white text-xs md:text-sm">COMPLEX</div>
                 </div>
               </div>
               <div className='flex py-2'>
                 <div className="text-2xl md:text-4xl pr-2">180</div>
                 <div>
                    <div className="text-black text-xs md:text-sm">HAPPY</div>
                    <div className="text-white text-xs md:text-sm">CLIENTS</div>
                 </div>
               </div>
               <div className='flex py-2'>
                 <div className="text-2xl md:text-4xl pr-2">100</div>
                 <div>
                    <div className="text-black text-xs md:text-sm">COMPLETED</div>
                    <div className="text-white text-xs md:text-sm">PROJECTS</div>
                 </div>
               </div>
               <div className='flex py-2'>
               <div className="text-2xl md:text-4xl pr-2">198</div>
                  <div>
                     <div className="text-black text-xs md:text-sm">TEAM</div>
                     <div className="text-white text-xs md:text-sm">MEMBERS</div>
                  </div>
               </div>
               </div>
           </div>
          </div>
        </div>
        <div className="w-full bg-black">
          <h1 className="text-white text-3xl md:text-5xl text-center pt-10 md:pt-28">MEET THE <span className="text-[#fcdba6]">TEAM</span></h1>
          <h3 className="text-white text-lg md:text-xl text-center pt-3 md:pt-5">OUR TEAM MEMBER</h3>
          <div className="w-full flex justify-center items-center">
          <div className="mt-4 w-full md:w-[1025px] h-auto md:h-[500px] grid grid-cols-1 md:grid-cols-3">
              <div className="m-4 md:m-10 mt-5 ml-4 md:ml-20 mr-4 md:mr-0 col-span-1 bg-white border border-[#d0cfcf]">
                  <img src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2022/01/1140-companies-value-older-workers.jpg" alt="teammember" /> 
                  <h1 className="ml-4 md:ml-10 mt-10 font-bold">IVET HOUZE</h1> 
                  <h2 className="ml-4 md:ml-10">ARCHITECT ASSISTANT</h2>            
              </div>
              <div className="m-4 md:m-10 mt-5 col-span-1 border bg-white border-[#d0cfcf]">
                  <img src={MemberTwo} alt="teammember" />
                  <h1 className="ml-4 md:ml-10 mt-10 font-bold">JONEY VINO</h1>
                  <h2 className="ml-4 md:ml-10">ARCHITECT ASSISTANT</h2>
              </div>
              <div className="m-4 md:m-10 mt-5 mr-4 md:mr-20 ml-4 md:ml-0 col-span-1 bg-white border border-[#d0cfcf]">
                  <img src={MemberThree} alt="teammember" />
                  <h1 className="ml-4 md:ml-10 mt-10 font-bold">MARIA BILL</h1>
                  <h2 className="ml-4 md:ml-10">ARCHITECT ASSISTANT</h2>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
