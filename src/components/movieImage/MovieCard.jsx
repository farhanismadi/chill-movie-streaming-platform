import React from "react";

export const MovieCard = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="object-cover rounded-lg w-full h-40" />
  );
};
