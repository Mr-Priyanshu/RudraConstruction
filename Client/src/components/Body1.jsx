import { useState, useEffect } from "react";
import backimg from "/images/herosection.png";
// import backimg from "../Assets/herosection.mp4";
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const writeAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const deleteAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

// Styled components
const AnimatedText = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled.span`
  display: inline-block;
  overflow: hidden;
  // white-space: nowrap;
  animation: ${props => props.animation === 'write' ? writeAnimation : deleteAnimation} ${props => props.animationDuration} linear forwards;
`;

const Body1 = () => {
  const [animationType, setAnimationType] = useState('write');





  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationType('delete');
      setTimeout(() => {
        setAnimationType('write');
      }, 1000); // Time before writing new text
    }, 1000); // Time before deleting text
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img
        src={backimg}
        alt="Background"
        className="object-cover h-dvh  xl:w-[125rem]   "
      />
      {/* <video src={backimg} muted autoPlay loop className="object-cover h-dvh  xl:w-[125rem] blur-sm fill-transparent "></video> */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:ms-16 md:pl-40 md:pt-24 overflow-hidden">
        <h1 className=" md:text-[100px] leading-tight md:leading-[140px]  w-1394 h-172 left-266 top-373   text-7xl  tracking-wider text-orange-300 "
          style={{ textShadow: 'rgb(0, 2, 0) 1px 5px 5px' }}>
          LET YOUR HOME BE
        </h1>
        <h1 className="md:text-[100px]  sm:mt-0 py-0 sm:p-0 leading-tight md:leading-[140px]  w-1345 h-344 left-266 top-558  text-7xl tracking-wider text-gray-400"
          style={{ textShadow: 'rgb(0, 2, 0) 1px 5px 5px' }}>
          UNIQUE 
          <br />
          AND
        </h1>
        <h1 className="md:text-[100px] leading-tight md:leading-[140px]  w-1345 h-344 left-266 top-558   text-7xl tracking-wider text-gray-400">
          STYLISH
        </h1>
      </div>
    </div>
  );
};

export default Body1;
