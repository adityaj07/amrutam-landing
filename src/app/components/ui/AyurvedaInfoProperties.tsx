import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface AyurvedaInfoPropertiesProps {
  heading: string;
  text: string;
  iconBg: string;
  icon: string;
  className?: string;
  textClassName?: string;
  propInfoClassName?: string;
}

const AyurvedaInfoProperties: FC<AyurvedaInfoPropertiesProps> = ({
  heading,
  text,
  iconBg,
  icon,
  className,
  textClassName,
  propInfoClassName,
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-4 absolute",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-end items-end gap-2",
          propInfoClassName
        )}
      >
        <h3 className="text-[20px] font-semibold">{heading}</h3>
        <p className={cn("text-end text-[16px] text-[#515151]", textClassName)}>
          {text}
        </p>
      </div>
      <div
        className={cn(
          `bg-[#EDF5FA] rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center`,
          iconBg
        )}
      >
        <Image
          src={icon}
          alt={heading}
          width={20}
          height={20}
          className="w-fit"
        />
      </div>
    </div>
  );
};

export default AyurvedaInfoProperties;
