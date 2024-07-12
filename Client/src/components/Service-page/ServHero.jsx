import React from "react";

function ServHero() {
  return (
    <>
      <div className="relative w-full h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="w-full h-80"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <center className="text-white">
              <h1 className="text-6xl font-serif font-semibold ">Services</h1>
              <p className="text-2xl">
                DIVERSIFIED SERVICES. UNVARYING QUALITY.
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServHero;
