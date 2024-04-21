import { inknut_antiqua } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface AyurvedicConsultBoxProps {
  heading?: string;
  text?: string;
  image?: string;
  className?: string;
  headingClassName?: string;
  imageClassName?: string;
  textClassName?: string;
}

const AyurvedicConsultBox: FC<AyurvedicConsultBoxProps> = ({
  heading,
  text,
  image,
  className,
  headingClassName,
  imageClassName,
  textClassName,
}) => {
  return (
    <div className={cn(className)}>
      <h3 className={cn(headingClassName, `${inknut_antiqua.className}`)}>
        {heading}
      </h3>
      <p className={cn("text-[18px] text-start text-[#414141]", textClassName)}>
        {text}
      </p>
      {image && (
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className={cn(
            "h-full w-full rounded-2xl drop-shadow-lg",
            imageClassName
          )}
        />
      )}
    </div>
  );
};

export default AyurvedicConsultBox;
