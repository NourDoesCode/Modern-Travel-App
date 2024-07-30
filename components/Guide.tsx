import React from "react";
import Image from "next/image";

function Guide() {
  return (
    <section className="flex items-center justify-center flex-col ">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24 ">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div
          className="flex flex-wrap justify-between
        gap-5 lg:gap-10"
        >
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] ">
            Guide You to Easy Path
          </h2>
          <p className="text-[16px] font-[400] text-gray-30 xl:max-w3-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto max-w-[1440px] relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex items-center justify-between flex-col  ">
            <div className="flex w-full flex-col ">
              <div className=" flex items-center justify-between w-full gap-16">
                <p className="text-[16px] font-[400] text-gray-30">
                  Destination
                </p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col mt-8 ">
              <p className="text-[16px] font-[400] text-gray-30">Start track</p>

              <p className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
//border-4  border-red-700
//border-4 border-purple-800
//border-4 border-blue-700
//border-4 border-yellow-500
//border-4 border-red-600
