"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/Image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  textStyle,
  rightIcon,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="" fill className="object-contain ml-2" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
