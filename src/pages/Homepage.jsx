import React from "react";
import { Hero } from "../components/homepage/Hero";
import { HomepageContent } from "../components/homepage/HomepageContent";

export const Homepage = () => {
  return (
    <div className="mt-16">
      <Hero />
      <HomepageContent />
    </div>
  );
};
