import Image from "next/image";
import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="border-4 border-red-500 mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/*background image */}
      <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60 " />
      {/*Left side */}

      <div className="border-4 border-blue-500 relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          className="absolute left-[-50] top-[-30px] w-10 lg:w-[50px]"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h1 className="bold-52 lg:bold-70 ">Putuk Truno Camp Area</h1>
        <p className="text-[16px] font-[400] mt-6 text-gray-30 xl:max-w-[520px] ">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className=" my-11 flex flex-wrap gap-5  ">
          <div className=" flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="stars"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="text-[16px] font-[400] ml-2 lg:text-[20px] lg:font-[400] hover:underline hover:cursor-pointer ">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div
          className="w-full flex gap-1 flex-col sm:flex-row
         "
        >
          <Button type="button" title=" Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start border-4 border-purple-500">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-4 border-yellow-500">
              <p className="text-[16px] font-[400] text-gray-20">Location</p>

              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>

            <p className="text-[20px] bold-20 text-white whitespace-nowrap ">
              Aguas Calientes
            </p>
          </div>

          <div className="flex items-center justify-between :">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] text-gray-20 block ">
                Distance
              </p>
              <p className=" bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col  border-4 border-orange-500">
              <p className="text-[16px] font-[400] text-gray-20 block ">
                Elevation
              </p>
              <p className=" bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
/*
 <p className="text-[20px] font-[700] text-white whitespace-nowrap border-4 border-orange-500 ">
                Aguas Calientes
              </p> */
