import Image from "next/image";
import { FC } from "react";
import Button from "../ui/Button";
import { ibm_plex_sans, montserrat } from "@/app/fonts";

interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <div className="w-full h-[60%] relative my-24">
      <Image
        src="/cta-blur.svg"
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
          src="/CTA-bg-img.png"
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
            overflow: "hidden",
            zIndex: -2,
          }}
          className="w-full h-full"
          alt="Hero background"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 text-white z-20">
        <div className={`flex flex-col justify-center items-center w-[50%] mx-auto h-full text-center text-[#FFF7E2] leading-relaxed font-medium drop-shadow-lg ${ibm_plex_sans.className}`}>
          <h2 className="text-[4rem]">Ready to restore harmony in your mind, body and spirit?</h2>
          <Button
            text="Book a consultation"
            className={`${ibm_plex_sans.className} bg-[#3A643B] text-[24px] rounded-lg font-medium px-[2rem] py-[20px] mt-8`}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
