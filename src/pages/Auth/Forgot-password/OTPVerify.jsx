import React from "react";
import { Link } from "react-router";
import InputBox from "../../../components/common/InputBox";

const OtpVerify = () => {
  return (
    <div className="w-full">
      <h2 className="text-black font-extrabold text-5xl">Enter Code</h2>
      <p className="text-base text-base-200 font-medium mt-1">
        Enter 6 digit code that we sent in your email address
      </p>
      <div>
        <div className="mt-5 shrink-0">
          <form action="">
            <fieldset className="fieldset">
              <InputBox
                label="Code"
                placeholder="Enter verification code"
                type="number"
              ></InputBox>

              <button className="btn btn-primary mt-4">Verify Code</button>
              <div className="text-base text-base-200 font-medium">
                Remember your password?
                <Link
                  to="/auth/signin"
                  className="link link-hover text-accent text-base ms-2"
                >
                  Signin
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
