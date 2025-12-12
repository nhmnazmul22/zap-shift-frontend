import React from "react";
import { Link } from "react-router";
import InputBox from "../../../components/common/InputBox";
import ImageUploadIcon from "../../../assets/image-upload.svg";

const NewPassword = () => {
  return (
    <div className="w-full">
      <h2 className="text-black font-extrabold text-5xl">Reset Password</h2>
      <p className="text-base text-base-200 font-medium mt-1">
        Reset your password
      </p>
      <div>
        <div className="mt-5 shrink-0">
          <form action="">
            <fieldset className="fieldset">
              <div className="flex flex-col gap-2">
                <InputBox
                  label="New Password"
                  placeholder="Enter your new password"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                ></InputBox>
                <InputBox
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                ></InputBox>
              </div>
              <button className="btn btn-primary mt-4">Reset Password</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
