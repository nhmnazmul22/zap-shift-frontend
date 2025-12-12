import React from "react";
import { Link } from "react-router";
import InputBox from "../../../components/common/InputBox";

const ForgotPassword = () => {
  return (
    <div className="w-full">
      <h2 className="text-black font-extrabold text-5xl">Forgot Password</h2>
      <p className="text-base text-base-200 font-medium mt-1">
        Enter your email address and we’ll send you a reset link.
      </p>
      <div>
        <div className="mt-5 shrink-0">
          <form action="">
            <fieldset className="fieldset">
              <InputBox
                label="Email"
                placeholder="Enter your Email"
                type="email"
              ></InputBox>

              <button className="btn btn-primary mt-4">Send code</button>
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

export default ForgotPassword;
