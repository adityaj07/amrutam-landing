import { FC } from "react";
import ApproachStep from "../ui/ApproachStep";
import { approachSteps } from "@/data";

interface AyurvedicApproachProps {}

const AyurvedicApproach: FC<AyurvedicApproachProps> = ({}) => {
  return (
    <div className="bg-white my-[6rem]">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="flex flex-col justify-center items-center gap-1 relative z-0">
          <h2 className="text-[#3A643B] font-bold text-[3rem]">
            Our Ayurvedic Approach
          </h2>
          <div className="w-full border-[2px] border-[#C3D0C4] absolute -z-[10] bottom-3"></div>
        </div>

        <p className="text-[#666666] max-w-[35%] text-center text-[16px]">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient&apos;s body type, medical history,
          and current health conditions.
        </p>
      </div>
      <div className="mt-[2rem] w-[80%] mx-auto flex flex-col lg:flex-row  justify-center items-center gap-6">
        {approachSteps.map((step) => (
          <ApproachStep
            approachStep={step.approachStep}
            heading={step.heading}
            text={step.text}
          />
        ))}
      </div>
    </div>
  );
};

export default AyurvedicApproach;
