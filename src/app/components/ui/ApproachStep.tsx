import { FC } from "react";

interface ApproachStepProps {
  approachStep: number;
  heading: string;
  text: string;
}

const ApproachStep: FC<ApproachStepProps> = ({
  approachStep,
  heading,
  text,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[#FFF7E2] px-[2rem] py-[3rem] h-full border border-t-4 border-t-[#3A643B] rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="p-6 flex justify-center items-center bg-[#3A643B]/70 border border-[#3A643B] w-20 h-20 rounded-full">
        <h4 className="text-[3rem] text-white">{approachStep}</h4>
      </div>
      <h3 className="text-[1.5rem] text-[#3A643B] font-semibold">{heading}</h3>
      <p className="text-center w-[80%]">{text}</p>
    </div>
  );
};

export default ApproachStep;
