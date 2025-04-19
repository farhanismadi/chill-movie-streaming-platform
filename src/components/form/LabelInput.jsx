import React from "react";

export const LabelInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  const inputClasses =
    "h-8 bg-transparent border border-[#e7e3fc6b] rounded-full p-5 text-[#e7e3fc] text-sm placeholder:text-sm";

  return (
    <div className="flex flex-col text-left gap-1 mt-8">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  );
};
