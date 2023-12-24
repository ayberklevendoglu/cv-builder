import React from "react";
import Input from "./Input";

export const Personal = () => {
  return (
    <div className="w-60 p-4">
      <h1 className="text-2xl font-semibold">Personal Details</h1>
      <Input header={"Full name"} inputType={"text"} />
    </div>
  );
};
export default Personal;
