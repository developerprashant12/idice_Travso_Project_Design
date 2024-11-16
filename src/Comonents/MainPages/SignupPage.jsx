import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupStep1 from "./SignUpForms/SignupStep1";
import InfluencerPage from "./SignUpForms/InfluencerPage";
import AlmostPage from "./SignUpForms/AlmostPage";

const SignupPage = () => {
  const navigate = useNavigate();
  const [showBoxes, setShowBoxes] = useState(false);

  /* kk code starts */

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    mobileNumber: "",
    state: "",
    city: "",
    isInfluencer: false,
    smlink1: "",
    smlink2: "",
    userName: "",
    password: "",
    confirmPassword: "",
    description: "",
  });
  const [formDataError, setFormDataError] = useState({});

  const validate = () => {
    let formErrors = {};

    // validation for step 1 inputs
    if (step === 1) {
      // Full Name validation
      if (!formData.fullName.trim()) {
        formErrors.fullName = "*Full name is required";
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        formErrors.email = "*Email is required";
      } else if (!emailPattern.test(formData.email)) {
        formErrors.email = "*Invalid email format";
      }

      // Date of Birth validation
      if (!formData.dob.trim()) {
        formErrors.dob = "*Date of Birth is required.";
      }

      // Mobile validation
      const mobilePattern = /^[0-9]{10}$/;
      if (!formData.mobileNumber) {
        formErrors.mobileNumber = "*Mobile number is required";
      } else if (!mobilePattern.test(formData.mobileNumber)) {
        formErrors.mobileNumber = "*Mobile number should be 10 digits";
      }

      // State validation
      if (!formData?.state?.trim()) {
        formErrors.state = "*State is required";
      }

      // City validation
      if (!formData.city.trim()) {
        formErrors.city = "*City is required";
      }

      // Gender validation
      if (!formData.gender.trim()) {
        formErrors.gender = "*Gender is required";
      }

      setFormDataError(formErrors);
      return Object.keys(formErrors).length === 0;
    }

    // validation for step 2 inputs
    if (step === 2) {
      // social media link validation
      if (
        formData.isInfluencer &&
        !formData.smlink1.trim() &&
        !formData.smlink2.trim()
      ) {
        formErrors.smLinkError = "*Atleast one social media link is required";
      }

      setFormDataError(formErrors);
      return Object.keys(formErrors).length === 0;
    }

    // validation for step 3 inputs
    if (step === 3) {
      // User Name validation
      if (!formData.userName.trim()) {
        formErrors.userName = "*User name is required";
      }

      // Password validation
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/;
      if (!formData.password) {
        formErrors.password = "*Password is required";
      } else if (!passwordPattern.test(formData.password)) {
        formErrors.password =
          "*Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
      }

      // confirm password
      if (!formData.confirmPassword) {
        formErrors.confirmPassword = "*Confirm Password is required";
      } else if (formData.confirmPassword !== formData.password) {
        formErrors.confirmPassword = "*Password does not match";
      }

      // Description validation
      if (!formData.description.trim()) {
        formErrors.description = "*Description is required";
      }

      setFormDataError(formErrors);
      return Object.keys(formErrors).length === 0;
    }
  };

  // handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    Object.keys(formDataError).forEach((inputName) => {
      if (inputName === name && value !== "") {
        delete formDataError[inputName];
      } else if (
        (inputName === "smLinkError" && name === "smlink1") ||
        (name === "smlink2" && value !== "")
      ) {
        delete formDataError[inputName];
      }

      // else if(value === '') {
      //   setFormDataError((prev)=>({
      //     ...prev,
      //     [name]: `*${name} is required`,
      //   }))
      // }
    });
  };

  // handle change on city and state select
  const handleSelectChange = (selectedOption, name) => {
    if (name === "state") {
      setFormData((prevData) => ({
        ...prevData,
        city: "",
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.value : "",
    }));

    if (formDataError[name]) {
      setFormDataError((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleNext = async (e) => {
    // e.preventDefault();
    console.log("====formData====>", formData);
    // if (step === 2) {
    //   const isVerified = true;
    //   console.log("====otpVal====>", otpVal.length);
    //   if (otpVal.length !== 4) {
    //     setOtpError("*Enter all values");
    //     return;
    //   }
    //   if (isVerified) {
    //     setOtpVal("");
    //     setStep(step + 1);
    //   }
    //   return;
    // }

    const validated = await validate();
    console.log("=====validated====>", validated);
    if (validated) setStep(step + 1);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validate();
    if(isValid) {
      console.log("valid form");
      try {
        navigate('/login');
        // Call API to register the user
    // fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Registration successful:", data);
    //   })
    //   .catch((error) => console.error("Error:", error));
      } catch (error) {
        console.log("error in register api call", error);
      }
    } else {
       console.log("form is not valid")
    }

  };

  const handleBackStep = () => {
    step === 1 ? setStep(1) : setStep(step - 1);
  };

  /* kk code ends */

  const handleInputChangeMobile = (e) => {
    const value = e.target.value;
    // setPhoneNumber(value);

    // Show boxes if the input is 10 digits long
    if (value.length === 10) {
      setShowBoxes(true);
    } else {
      setShowBoxes(false);
    }
  };

  /* to check whether user is influencer */
  const handleInfluencerType = async(isInfluencer) => {
      setFormData({ ...formData, isInfluencer: isInfluencer })
  }

  return (
    <div>
        {
          step === 1 && (
            <SignupStep1 
              formData={formData}
              formDataError={formDataError}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              handleNext={handleNext}
              validate={validate}
            />
          )
        }

        {
          step === 2 && (
            <div>
              <InfluencerPage 
                formData={formData}
                formDataError={formDataError}
                handleInputChange={handleInputChange}
                handleInfluencerType={handleInfluencerType}
                handleNext={handleNext}
                handleBackStep={handleBackStep}
              />
            </div>
          )
        }

        {
          step === 3 && (
            <div>
              <AlmostPage 
                formData={formData}
                formDataError={formDataError}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleBackStep={handleBackStep}
              />
            </div>
          )
        }
    </div>
  );
};

export default SignupPage;
