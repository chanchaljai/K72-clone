import React from "react";

const HomeTopText = () => {
  return (
    <div className="flex flex-col  text-center pt-3">
      <div className="text-[8vw] uppercase leading-[8vw]">The spark for</div>
      <div className="text-[8vw] uppercase leading-[8vw] flex justify-center items-center gap-3">
        all
          <div className="h-[6.4vw] w-[15vw] rounded-full overflow-hidden">
              <video
          className='h-full w-full object-cover'
           style={{
      borderRadius: "100px",
      transform: "translateZ(0)",   // 👈 GPU fix
    }}
          autoPlay
          loop
          muted
          src="/vid1.mp4"
        />
          </div>
        

        things
      </div>
      <div className="text-[8vw] uppercase leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeTopText;
