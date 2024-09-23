import React from "react";
import { HiPencil } from "react-icons/hi2";

const PopupButton = ({ fn = null, customCSS }) => {
  return (
    <button
      className={`${customCSS} size-6 grid place-content-center bg-secondary text-light rounded-full`}
      onClick={fn}
    >
      <HiPencil className="text-sm" />
    </button>
  );
};

export default PopupButton;
