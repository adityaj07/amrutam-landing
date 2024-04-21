import { FC } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { ibm_plex_sans, montserrat } from "@/app/fonts";
import { benefits } from "@/data";

const Hero: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[60%] bg-[#951D1C] relative">
        <Image
          src="/hero-blur.svg"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            overflow: "hidden",
            zIndex: 1,
          }}
          alt="Hero background"
        />
        <div>
          <Image
            src="/hero-img-desktop.png"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              overflow: "hidden",
              zIndex: -2,
            }}
            className="w-[50%] ml-[50%] min-h-[70%]"
            alt="Hero background"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 text-white z-20">
          <div className="flex flex-col justify-center w-full h-full ml-[6%]">
            <h2
              className={`${montserrat.className} text-[0.875rem] md:text-[1.1rem] lg:text-[1.75rem] mb-[0.5rem] leading-normal`}
            >
              Namaste, Welcome to Amrutam
            </h2>
            <h1
              className={`${ibm_plex_sans.className} md:text-[1.7rem] lg:text-[3rem] mb-[1rem] leading-normal`}
            >
              Step into Holistic Healing with{" "}
              <span className="underline underline-offset-[12px]">
                Ayurveda
              </span>
              <div>Book Consultation with certified Experts.</div>
            </h1>
            <p
              className={`${ibm_plex_sans.className} text-[0.875rem] text-[#C9C9C9] text-wrap mb-[3rem] leading-relaxed`}
            >
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic <br /> Guidance from Trusted Ayurvedic
              Doctors Anytime, anywhere.
            </p>
            <Button
              text="BOOK AN APPOINTMENT"
              className={`${ibm_plex_sans.className} bg-[#3A643B] text-[20px]rounded-lg font-medium rounded-md`}
            />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-wrap justify-center items-center gap-4 bg-[#FFF7E2] lg:py-6">
        {benefits.map((benefit) => (
          <div key={benefit.text} className="flex justify-center items-center gap-2 border-b-[#3A643B] py-2 my-2">
            <div className="p-4 rounded-full border border-[#3A643B] bg-white">
              <Image
                src={benefit.icon}
                alt={benefit.text}
                width={40}
                height={40}
                className="text-[#3A643B]"
              />
            </div>
            <span className="font-semibold text-[#3A643B] w-[70%] text-balance">{benefit.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
