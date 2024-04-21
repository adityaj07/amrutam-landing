import { cn } from "@/lib/utils";
import { FC } from "react";

interface ButtonProps {
  className: string;
  text: string;
}

const Button: FC<ButtonProps> = ({ className, text }) => {
  return (
    <div>
      <button className={cn("px-4 py-2", className)}>{text}</button>
    </div>
  );
};

export default Button;
