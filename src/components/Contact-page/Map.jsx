import React from "react";

const Map = () => {
  return (
    <>
      <div className="w-full h-[500px] mb-10 ">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1801169036357!2d79.92041467536185!3d23.163625379075224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGuru%20InfoSystems%20-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%20%7C%20Best%20Software%20company%20in%20Jabalpur%20%7C%20IT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1719481460344!5m2!1sen!2sin"
          style={{ width: "100%", height: "500px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Map;
