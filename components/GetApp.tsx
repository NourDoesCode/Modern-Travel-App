import React from "react";
import Button from "./Button";
import Image from "next/image";

function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app ">
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-12 w-full ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>

          <p className="text-[16px] font-[400] text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col xl:flex-row gap-3 whitespace-nowrap w-full ">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full={true}
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full={true}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp;

//border-4 border-purple-800
//border-4 border-blue-700
//border-4 border-yellow-500
//border-4 border-red-600
