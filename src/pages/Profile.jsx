import React from "react";
import { ProfileInfo } from "../components/profile/ProfileInfo";

export const Profile = () => {
  return (
    <div className="text-[#e7e3fc] px-10 pt-24">
      <h3 className="text-2xl font-medium mb-4">Profil Saya</h3>
      <ProfileInfo />
    </div>
  );
};
