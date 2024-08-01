import React from "react";
import Image from "next/image";
import { FEATURES } from "@/constants";
function Features() {
  return (
    <section className=" flex items-center justify-center flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div
        className="max-container padding-container  relative w-full flex justify-end
        "
      >
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="./phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
          />
        </div>
        <div className="z-20  flex flex-col lg:w-[60%] w-full  ">
          <div className="relative ">
            <Image
              src="./camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="left-[-5px] absolute top-[-20px] w-10  lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 ">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
type FeatureItem = {
  title: string;
  icon: string;
  variant?: string;
  description: string;
};

const FeatureItem = ({ title, icon, variant, description }: FeatureItem) => {
  return (
    <li className="flex flex-1 flex-col items-start w-full">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-3 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
//border-4  border-red-700
//border-4 border-purple-800
//border-4 border-blue-700
//border-4 border-yellow-500
//border-4 border-red-600
