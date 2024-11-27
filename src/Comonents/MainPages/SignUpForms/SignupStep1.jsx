/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../../../assets/logo.png";
import backgroundImage from "../../../assets/loginpageimg.png";
import Select from "react-select";
import stateData from "../../../statedata/statedata.json";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import {
  generateOtp,
  registerUser,
  verifyOtp,
} from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "../DesignModule.css";

const SignupStep1 = ({
  formData,
  formDataError,
  handleInputChange,
  handleSelectChange,
  handleNext,
  validate,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otpVal, setOtpVal] = useState("");
  const [otpError, setOtpError] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const { loading, error } = useSelector((state) => state.auth);
  // console.log("=====loading====>", loading, "=====error====>", error);

  const [stateCityData, setStateCityData] = useState(() => {
    // Create a sorted object
    const sortedStateData = Object.keys(stateData)
      .sort((a, b) => a.localeCompare(b))
      .reduce((acc, key) => {
        acc[key] = stateData[key];
        return acc;
      }, {});
    return sortedStateData;
  });

  const stateOptions = Object.keys(stateCityData).map((stateName) => ({
    value: stateName,
    label: stateName,
  }));

  const cityOptions = formData?.state
    ? stateCityData[formData?.state]
        .map((cityName) => ({
          value: cityName,
          label: cityName,
        }))
        .sort((a, b) => a.label.localeCompare(b.label))
    : [];

  const handleLogo = () => {
    navigate("/");
  };

  // const handleNextStep1 = async() => {
  //   if(!showOTP) {
  //       const isValid = await validate();
  //       // if(isValid) setShowOTP(true);
  //       if(isValid) {
  //         console.log("====formdata====>", formData);
  //         try {
  //           const response = await fetch("http://localhost:3000/api/signup", {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(formData)
  //           });
  //           console.log("response in register api", response);
  //           if(response.ok) {
  //             const  data  = await response.json();
  //             console.log("=======data=======>", data);
  //             // mobileNumber, otp, action
  //             try {
  //               const generateOtpResponse = await fetch("http://localhost:3000/api/otp", {
  //                 method: 'POST',
  //                 headers: {
  //                   'Content-Type': 'application/json'
  //                 },
  //                 body: JSON.stringify({
  //                   "mobileNumber": formData.mobileNumber,
  //                   "action": "generate"
  //                 })
  //               })
  //               const otpDataJson = await generateOtpResponse.json();
  //               console.log("=======otpDataJson======>", otpDataJson);
  //               if(generateOtpResponse.ok) {
  //                 setShowOTP(true);
  //               } else {
  //                 console.log("error in generate otp")
  //               }
  //             } catch (error) {
  //               console.log("error in generate otp api", error);
  //             }

  //           }
  //         } catch (error) {
  //           console.log("error in register api", error);
  //         }

  //       } else {
  //         console.log("all data needed");
  //       }
  //       return;
  //   } else {
  //       // const isVerified = true;
  //     console.log("====otpVal====>", otpVal.length);
  //     if (otpVal.length !== 4) {
  //       setOtpError("*Enter all values");
  //       return;
  //     }

  //     try {
  //       const verifyOtpResponse = await fetch("http://localhost:3000/api/otp", {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           "mobileNumber": formData.mobileNumber,
  //           "otp": otpVal,
  //           "action": "verify"
  //         })
  //       })

  //       const verifyOtpDataJson = await verifyOtpResponse.json();
  //       if(verifyOtpResponse.ok) {
  //         console.log("=======verifyOtpDataJson======>", verifyOtpDataJson);
  //         setOtpVal("");
  //         handleNext();

  //       }
  //     } catch (error) {
  //       console.log("error in verify otp api", error);
  //     }
  //     return;
  //   }
  // };

  const handleNextStep1 = async () => {
    if (!showOTP) {
      const isValid = await validate();
      // if(isValid) setShowOTP(true);
      if (isValid) {
        console.log("====formdata====>", formData);
        try {
          //   const registerResult = await dispatch(registerUser(formData)).unwrap();
          // console.log("=======data=======>", registerResult);

          // // if user is registered successfully call generate otp
          // if (registerResult) {
          //   const otpResult = await dispatch(generateOtp({ mobileNumber: formData.mobileNumber })).unwrap();
          //   console.log("=======otpDataJson======>", otpResult);
          //   setShowOTP(true); // Show OTP input field
          // } else {
          //   console.log("Something went wrong during register otp");
          // }

          setShowOTP(true); // after button css, need to remove this and open api call
        } catch (error) {
          console.error("Error during registration or OTP generation:", error);
        }
      } else {
        console.log("all data needed");
      }
      return;
    } else {
      // const isVerified = true;
      console.log("====otpVal====>", otpVal.length);
      if (otpVal.length !== 4) {
        setOtpError("*Enter all values");
        return;
      }

      try {
        //   const verifyResult = await dispatch(verifyOtp({ mobileNumber: formData.mobileNumber, otp: otpVal })).unwrap();
        //   console.log("=======verifyOtpDataJson======>", verifyResult);

        //  // if success clear otp value and move to next process
        //   if (verifyResult) {
        //     setOtpVal("");
        //     // setIsOtpVerified(true);
        //     handleNext(); // go to influencer page
        //   } else {
        //     console.log("OTP verification failed");
        //   }

        // after button css done, remove this and open api
        setOtpVal("");
        handleNext(); // go to influencer page
      } catch (error) {
        console.log("OTP verification failed i am in catch block");
      }
      return;
    }
  };

  const handleOtpChange = (otp) => {
    setOtpError("");
    const numericOtp = otp.replace(/[^0-9]/g, "");
    console.log("===numericOtp====>", numericOtp);
    if (numericOtp) setOtpVal(numericOtp);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-teal-50 to-teal-200 min-h-screen">
      {/* Left Section */}

      <div
        className="md:flex-[1.5] bg-cover bg-center relative md:rounded-r-[50px] overflow-hidden h-[50vh] md:h-auto"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-8 left-8 md:top-12 md:left-12 md:ml-10">
          <img
            src={logo}
            alt="Travso Logo"
            className="w-32 md:w-40 cursor-pointer"
            onClick={handleLogo}
          />{" "}
          {/* Logo size and responsiveness */}
        </div>
        <div className=" absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white text-left md:ml-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            TravSo: Spark Your <br /> Wanderlust
          </h1>
          <p className="mt-4 text-sm md:text-base hidden md:flex">
            Step into a world of breathtaking travel tales and awe-inspiring
            visuals. Let
            <br /> the beauty of these stories ignite your passion for adventure
            and set your
            <br />
            soul on a journey to explore the unknown.
          </p>
          <p className="mt-4 text-sm md:text-base flex md:hidden">
            Step into a world of breathtaking travel tales and awe-inspiring
            visuals. Let the beauty of these stories ignite your passion for
            adventure and set your soul on a journey to explore the unknown.
          </p>
          <div className="flex items-center mt-8 space-x-4 w-[50%] gap-[30px]">
            <div className="flex-1 relative">
              <div className="w-full h-0.5 bg-gray-300"></div>{" "}
              {/* Full horizontal line */}
              <div
                className="absolute top-0 left-0 h-0.5 bg-white"
                style={{ width: "30%" }}
              ></div>{" "}
              {/* 30% filled portion */}
            </div>
            <span className="text-sm">01 — 03</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-[1] flex justify-center items-center h-auto min-h-[50vh] md:min-h-screen">
        <div className="rounded-lg w-11/12 md:w-3/4 lg:w-3/5 md:mb-10 mt-10">
          <div>
            <h2 className="text-[36px] font-semibold mb-4 mt-2 text-center font-poppins text-customBlack">
              Sign Up
            </h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                />
                {formDataError.fullName && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.fullName}
                  </p>
                )}
              </div>
              <div className="relative w-full">
                <select
                  id="gender"
                  className="appearance-none bg-white text-customGray w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                  defaultValue=""
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-4 h-4 text-customGray"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {formDataError.gender && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.gender}
                  </p>
                )}
              </div>

              <div className="relative w-full">
                <Select
                  name="state"
                  options={stateOptions}
                  placeholder="Select State"
                  value={stateOptions.find(
                    (option) => option.value === formData.state
                  )}
                  onChange={(option) => handleSelectChange(option, "state")}
                  className="appearance-none bg-white text-[#364045] w-full p-[2px] border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                  isSearchable
                />
                {formDataError.state && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.state}
                  </p>
                )}
              </div>

              <div className="relative w-full">
                <Select
                  name="city"
                  options={cityOptions}
                  placeholder="Select City"
                  value={
                    cityOptions.find(
                      (option) => option.value === formData.city
                    ) || formData.city
                  }
                  onChange={(option) => handleSelectChange(option, "city")}
                  isSearchable
                  isDisabled={!formData.state}
                  className="appearance-none bg-white text-[#364045] w-full p-[2px] border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                />

                {formDataError.city && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.city}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="date"
                  placeholder="DOB"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="text-[#364045] w-full p-2 bg-white border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                />
                {formDataError.dob && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.dob}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-[#364045] w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                />
                {formDataError.email && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Mobile No."
                  value={formData.mobileNumber}
                  name="mobileNumber"
                  onChange={handleInputChange}
                  className="text-[#364045] w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                />
                {formDataError.mobileNumber && (
                  <p className="error text-left text-[#ff0000] text-sm">
                    {formDataError.mobileNumber}
                  </p>
                )}
              </div>

              {showOTP && (
                <div className="spaceuse">
                  <OTPInput
                    value={otpVal}
                    onChange={handleOtpChange}
                    numInputs={4}
                    renderSeparator={<span></span>}
                    renderInput={(props) => (
                      <input
                        {...props}
                        type="tel"
                        pattern="[0-9]*"
                        className="otp-input w-12 h-12 sm:w-16 sm:h-12 md:w-16 md:h-12 text-center text-xl border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                        onInput={(e) => {
                          if (!/^\d*$/.test(e.target.value)) {
                            e.target.value = ""; // Clear the value if it is not numeric
                          }
                        }}
                      />
                    )}
                  />
                  {otpError && (
                    <p className="error text-left text-[#ff0000] text-sm">
                      {otpError}
                    </p>
                  )}
                  <p>
                    Didn&apos;t receive a code?{" "}
                    <span className="text-teal-600 hover:underline text-base">
                      Resend
                    </span>
                  </p>
                </div>
              )}
              <button
                type="button"
                className="mt-5 w-full py-2 bg-teal-400 text-[white] font-semibold rounded-md hover:bg-teal-500 transition"
                onClick={handleNextStep1}
              >
                Next
              </button>
            </form>
            <p className="text-center mt-5 pb-10 md:pb-0 text-base">
              Already have an account?{" "}
              <a href="/login" className="text-teal-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupStep1;
