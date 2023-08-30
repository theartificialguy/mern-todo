import React from "react";
import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons/lib";

interface IButton {
  text: string;
  onClick: () => void;
  Icon?: IconType;
  btnContainerStyle?: string;
  textStyle?: string;
  iconColor?: string;
  iconSize?: number;
}

const IconButton = ({
  text,
  Icon,
  onClick,
  btnContainerStyle = "",
  textStyle = "",
  iconColor = "black",
  iconSize = 16,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex flex-row items-center space-x-2",
        btnContainerStyle
      )}
    >
      <span className={twMerge("text-black font-normal text-base", textStyle)}>
        {text}
      </span>
      {Icon ? <Icon color={iconColor} size={iconSize} /> : null}
    </button>
  );
};

export default IconButton;
