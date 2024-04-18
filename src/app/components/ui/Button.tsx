import { cn } from "@/lib/utils";
import { FC } from "react";

interface ButtonProps {
  className: string;
  text: string;
}

const Button: FC<ButtonProps> = ({ className, text }) => {
  return (
    <div>
      <button className={cn(className, "px-4 py-2")}>{text}</button>
    </div>
  );
};

export default Button;
