import React, { useState } from "react";
import { Link } from "react-router";
import InputBox from "../../../components/common/InputBox";
import ImageUploadIcon from "../../../assets/image-upload.svg";
import { useForm } from "react-hook-form";
import { toBase64 } from "../../../lib/utils";

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isLoading },
  } = useForm();
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("imageFile", file, { shouldDirty: true, shouldValidate: true });
      const url = URL.createObjectURL(file);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
    } else {
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return "";
      });
    }
  };

  const handleRegister = async (data) => {
    if (errors) {
      console.log(errors);
    }
    if (data.imageFile) {
      data.imgUrl = await toBase64(data.imageFile);
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.imageFile);
    formData.append("imgUrl", data.imgUrl);

    setTimeout(() => {
      const obj = Object.fromEntries(formData.entries());
      console.log(obj);
    }, 2000);
  };

  return (
    <div className="w-full">
      <h2 className="text-black font-extrabold text-5xl">Create an Account</h2>
      <p className="text-base text-base-200 font-medium mt-1">
        Register with ZapShift
      </p>
      <div>
        <div className="mt-5 shrink-0">
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <div className="avatar mb-2 relative">
                <div className="bg-neutral w-14 rounded-full">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Image upload icon" />
                  ) : (
                    <img src={ImageUploadIcon} alt="Image upload icon" />
                  )}
                </div>
                <input
                  type="file"
                  className="absolute border w-14 h-14 rounded-full opacity-0"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputBox
                  label="Full Name"
                  placeholder="Enter your Name"
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  isError={errors?.fullName && true}
                  errorMessage={errors?.fullName?.message}
                ></InputBox>
                <InputBox
                  label="Email"
                  placeholder="Enter your Email"
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  isError={errors?.email && true}
                  errorMessage={errors?.email?.message}
                ></InputBox>
                <InputBox
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
                      message:
                        "Must contain 8 chars, upper, lower, number & special character",
                    },
                  })}
                  isError={errors?.password && true}
                  errorMessage={errors?.password?.message}
                ></InputBox>
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="btn btn-primary mt-4"
              >
                {isLoading ? "Creating Account..." : "Register"}
              </button>
              <div className="text-base text-base-200 font-medium">
                Already have an account?
                <Link
                  to="/auth/signin"
                  className="link link-hover text-accent text-base ms-2"
                >
                  Signin
                </Link>
              </div>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <button className="btn w-full bg-[#E9ECF1] shadow-none text-black border-neutral-200 hover:shadow-sm transition-all duration-200">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
