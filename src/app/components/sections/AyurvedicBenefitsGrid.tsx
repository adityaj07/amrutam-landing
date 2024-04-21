import { FC } from "react";
import AyurvedicConsultBox from "../ui/AyurvedicConsultBox";

const AyurvedicBenefitsGrid: FC = () => {
  return (
    <div className="bg-gradient-to-bl from-[#FFF7E2] to-[#FFFAEE] pt-[4rem]">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="flex flex-col justify-center items-center gap-1 relative z-0">
          <h2 className="text-[#3A643B] font-bold text-[2.3rem] lg:text-[3rem]">
            What sets Ayurvedic consultations apart?
          </h2>
          <div className="w-full border-[2px] border-[#C3D0C4] absolute -z-[10] bottom-3"></div>
        </div>

        <div className="mt-[2rem] max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AyurvedicConsultBox
            heading='" स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"'
            headingClassName="text-[2rem] text-[#3A643B] text-center w-[70%] mx-auto mb-[2rem]"
            text="[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]"
            textClassName="text-center text-[#3A643B] text-[20px] w-[80%] mx-auto"
            className="bg-white px-[2rem] py-[3rem] h-full col-span-2 border border-t-4 border-t-[#3A643B] rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
          <AyurvedicConsultBox
            image="/ayurvedic-consult-img-1.png"
            className="col-span-1"
            imageClassName=""
          />
          <AyurvedicConsultBox
            heading="Precise diagnosis"
            headingClassName="text-[1.5rem] text-[#3A643B] text-start font-semibold "
            text="Ayurveda&apos;s core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment."
            textClassName="pt-4"
            className="bg-white px-[2rem] py-[3rem] h-full col-span-1 border border-t-4 border-t-[#3A643B] rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
          <AyurvedicConsultBox
            heading="Zero side-effects"
            headingClassName="text-[1.5rem] text-[#3A643B] text-start font-semibold"
            text="Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs."
            textClassName="pt-4"
            className="bg-white px-[2rem] py-[3rem] h-full border border-t-4 border-t-[#3A643B] rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] col-span-1"
          />
          <AyurvedicConsultBox
            image="/ayurvedic-consult-img-2.png"
            className="col-span-1"
            imageClassName=""
          />
          <AyurvedicConsultBox
            heading="Individual Treatment"
            headingClassName="text-[1.5rem] text-[#3A643B] text-start font-semibold"
            text="All treatments are personalized based on a person&apos;s unique constitution and health concerns."
            textClassName="pt-4"
            className="bg-white px-[2rem] py-[3rem] h-full border border-t-4 border-t-[#3A643B] rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] col-span-1"
          />
          <AyurvedicConsultBox
            image="/ayurvedic-consult-img-3.png"
            className="col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default AyurvedicBenefitsGrid;
