import { FC } from "react";
import CentralImage from "../ui/CentralImage";

interface AyurvedaInformationProps {}

const AyurvedaInformation: FC<AyurvedaInformationProps> = ({}) => {
  return (
    <div className="bg-white mt-[4rem]">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="flex flex-col justify-center items-center gap-1 relative z-0">
          <h2 className="text-[#3A643B] font-bold text-[3rem]">
            Discover Ayurveda&apos;s Magic With Us
          </h2>
          <div className="w-full border-[2px] border-[#C3D0C4] absolute -z-[10] bottom-3"></div>
        </div>

        <p className="text-[#666666] max-w-[31%] text-center text-[16px]">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It&apos;s like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>

        <div className="mt-[2rem] w-full flex justify-center items-center relative">
          <CentralImage />
        </div>
      </div>
    </div>
  );
};

export default AyurvedaInformation;
