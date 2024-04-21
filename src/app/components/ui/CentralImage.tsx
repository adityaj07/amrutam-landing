import Image from "next/image";
import { FC } from "react";
import AyurvedaInfoProperties from "./AyurvedaInfoProperties";

const CentralImage: FC = () => {
  return (
    <div className="relative h-fit w-fit">
        {/* The  */}
      <AyurvedaInfoProperties
        heading="Personalized Wellness"
        text="Get treatements made just for you based on your individual doshas
            (body type)"
        icon="/central-logo-1.svg"
        iconBg="bg-[#EDF5FA]"
        textClassName="max-w-[45%]"
        className="top-10 -left-[45rem]"
      />

      <AyurvedaInfoProperties
        heading="Focus on prevention"
        text="Stop problems even before they start"
        icon="/central-logo-2.svg"
        iconBg="bg-[#EAF2EA]"
        textClassName="max-w-[60%]"
        className="top-0 bottom-0 -left-[28rem]"
      />

      <AyurvedaInfoProperties
        heading="Mind-Body Connection"
        text="Keep your mind and body in sync for a happy life."
        icon="/central-logo-3.svg"
        iconBg="bg-[#FCF1F1]"
        textClassName="max-w-[60%]"
        className="bottom-10 -left-[30rem]"
      />

      <AyurvedaInfoProperties
        heading="Holistic Healing"
        text="Fix the root problem for long-lasting health."
        icon="/central-logo-4.svg"
        iconBg="bg-[#F5F3FC]"
        textClassName="max-w-[60%] text-start"
        className="top-10 -right-[30rem] flex-row-reverse text-start"
        propInfoClassName="justify-start items-start"
      />

      <AyurvedaInfoProperties
        heading="Natural Remedies"
        text="Using herbs and natural therapies for healing."
        icon="/central-logo-5.svg"
        iconBg="bg-[#FEF6ED]"
        textClassName="max-w-[60%] text-start"
        className="top-0 bottom-0 -right-[34rem] flex-row-reverse text-start"
        propInfoClassName="justify-start items-start"
      />

      <AyurvedaInfoProperties
        heading="Boosting immunity"
        text="Stay strong and healthy for life, not just for today."
        icon="/central-logo-6.svg"
        iconBg="bg-[#EAF2EA]"
        textClassName="max-w-[65%] text-start"
        className="bottom-10 -right-[30rem] flex-row-reverse text-start"
        propInfoClassName="justify-start items-start"
      />

     {/* Central Image with lady and design */}
      <Image
        src="/central-img-lady.svg"
        alt="Ayurveda's Magic With Us"
        width={580}
        height={580}
        style={{
          zIndex: 0,
        }}
        className="absolute bottom-0"
      />
      <Image
        src="/central-img-design.svg"
        alt="Ayurveda's Magic With Us"
        width={600}
        height={600}
        style={{
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default CentralImage;
