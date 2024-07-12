import React from "react";

function IntHero() {
  return (
    <>
      <center>
        <div className=" max-w-5xl  mt-20">
          <img src="/images/Interior2.png" alt="Description of image" />
          <div className="text-start p-2">
            <h1 className=" mt-10 font-serif text-4xl font-semibold">
              Interior Design
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              adipisci asperiores veniam? Cupiditate at illo consequuntur
              recusandae ex odit quaerat! Nobis, illo! Animi deserunt molestias
              maiores! At alias aliquam ullam dicta aliquid maiores saepe
              necessitatibus vel magni ut vitae, provident vero repudiandae
              impedit possimus perferendis odit sit reiciendis magnam porro.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              adipisci asperiores veniam? Cupiditate at illo consequuntur
              recusandae ex odit quaerat! Nobis, illo! Animi deserunt molestias
              maiores! At alias aliquam ullam dicta aliquid maiores saepe
              necessitatibus vel magni ut vitae, provident vero repudiandae
              impedit possimus perferendis odit sit reiciendis magnam porro.
            </p>
            <div className="flex gap-5 mt-10">
              <div className="w-[50%]">
                <img src="/images/Interior2.png" alt="Description of image" />
              </div>
              <div className="w-[50%]">
                <img src="/images/Interior2.png" alt="Description of image" />
              </div>
            </div>
            <p className="mt-10">
              Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
              ✅ Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
              ✅ Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
              ✅ Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
              ✅ Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
              ✅ Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
              ✅ Interior design is about creating beautiful, functional spaces
              that reflect your personal style and meet your practical needs.
              <br />
            </p>
            <div className="my-6 ">
              <div className=" items-center gap-16 p-8 mx-auto max-w-4xl bg-white  rounded-md text-[#333] font-[sans-serif]">
                <div className="flex gap-2 justify-center font-serif font-semibold md:text-4xl text-2xl mb-5  ">
                  <h1 className=" text-yellow-600 ">REQUEST</h1>
                  <h1 className=" ">A VISIT</h1>
                </div>
                <form
                  action="https://fabform.io/f/xxxxx"
                  method="post"
                  className="ml-auto space-y-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <span className="flex gap-2 ">
                    <input
                      type="Date"
                      placeholder="date"
                      className="w-full rounded-md py-2.5 px-4 border  text-sm outline-[#007bff]"
                    />
                    <input
                      type="time"
                      placeholder="time"
                      className="w-full rounded-md py-2.5 px-4 border  text-sm outline-[#007bff]"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    name="message"
                    className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                  ></textarea>
                  <button
                    type="submit"
                    className="text-white bg-[#ebd04b] hover:bg-orange-600 font-semibold rounded-md text-md px-4 py-2 w-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default IntHero;
