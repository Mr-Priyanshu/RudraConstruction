import React from 'react'
import cardImageOne from '../../public/images/wing.png';
import cardImageTwo from '../../public/images/carbon.png';
import cardImageThree from '../../public/images/archi.png'

function Showcasecards() {
  return (
    <div>
       <div className="w-full pt-3 pb-3 md:h-[350px] bg-[#f4e4ca] md:grid grid-cols-3">
        <div className="bg-white col-span-1  m-20  md:pt-5 md:mt-20 md:mb-20 md:ml-40 md:mr-0 rounded-[10px]">
          <img className="w-[80px] h-auto px-5 py-2" src={cardImageOne} alt="cardimageone"/>
          <h1 className="cardhead font-bold px-5 py-2">DESIGN & PLANNING</h1>
          <p className="cardhead text-[gray] text-[10px] px-5 py-2">WHAT HE CAN DO ANY THING KAHSDJASDHASJD KAHDKASH HDKASH KHASD </p>
        </div>
        <div className="bg-white col-span-1 m-20 md:pt-5 rounded-[10px]">
          <img className="w-[80px] h-auto px-5 py-2" src={cardImageTwo} alt="cardimagetwo"/>
          <h1 className="cardhead font-bold px-5 py-2">CUSTOM SOLUTION </h1>
          <p className="cardhead text-[gray] text-[10px] px-5 py-2">WHAT HE CAN DO ANY THING KAHSDJASDHASJD KAHDKASH HDKASH KHASD </p>
        </div>
        <div className="bg-white col-span-1 m-20 md:pt-5  md:mt-20 md:mb-20 md:mr-40 md:ml-0 rounded-[10px]">
          <img className="w-[80px] h-auto px-5 py-2" src={cardImageThree} alt="cardimagethree"/> 
          <h1 className="cardhead font-bold px-4 md:px-5 py-2">ARCHITECTURE DESIGN</h1>
          <p className="cardhead text-[gray] text-[10px] px-4 md:px-5 py-2 font-'Gemunu Libre">WHAT HE CAN DO ANY THING KAHSDJASDHASJD KAHDKASH HDKASH KHASD </p>
        </div>
    </div>
    </div>
  )
}

export default Showcasecards
