
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/Image.png';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [formDataError, setFormDataError] = useState({});
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mobile");
  const [step, setStep] = useState(1); 
  const [otp, setOtp] = useState(["", "", "", ""]); 
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const toggleForgotPassword = () => {
    setForgotPasswordOpen(!isForgotPasswordOpen);
    setStep(1);
  };
  const handleNext = () => setStep(2); 
  const handleBackToInput = () => setStep(1); 
  const handleVerify = () => setStep(3); 

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);
  };

  const handleSubmitPassword = () => {
    console.log("Create Password:", createPassword);
    console.log("Confirm Password:", confirmPassword);
    setForgotPasswordOpen(false);
  };

  /* handle input changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    Object.keys(formDataError).forEach((inputName) => {
      if(inputName === name && value !== '') {
          delete formDataError[inputName];
      }
  });
};

// checking for input field validation

const validateInputs = async() => {

  let formErrors = {};

  // User Name validation
  if (!formData.username.trim()) {
    formErrors.username = "*User name is required";
  }

  // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/;
    if (!formData.password) {
        formErrors.password = "*Password is required";
    } else if (!passwordPattern.test(formData.password)) {
        formErrors.password = "*Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    setFormDataError(formErrors);
    return Object.keys(formErrors).length === 0;

}

const handleSubmit = async(e) => {
  e.preventDefault();
  const isValid = await validateInputs();

  if(isValid) {
    console.log("yes valid form")
    navigate("/header")
  } else {
    console.log("not a valid form")
  }

}

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-b from-teal-50 to-teal-200">
      {/* Left Section */}
      <div
        className="flex-[1.5] bg-cover bg-center relative md:rounded-r-[50px] overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-8 left-8 md:top-12 md:left-12 md:ml-10">
          <img src={logo} alt="Travso Logo" className="w-32 md:w-40" /> {/* Logo size and responsiveness */}
        </div>
        <div className=" absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white text-left md:ml-10">
          <h1 className="text-4xl md:text-5xl font-bold">The Whole World <br/> in One Place</h1>
          <p className="mt-4 text-sm md:text-base">
            Discover the most unique places, experiences,<br/> and amazing homes around the world.
          </p>
          <div className="flex justify-between items-center mt-8">
            <span className="text-sm">03 — 03</span>
            <div className="flex space-x-2">
              {/* Dots */}
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white opacity-50 rounded-full"></span>
              <span className="w-2 h-2 bg-white opacity-50 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-[1] flex justify-center items-center">
        <div className="rounded-lg w-11/12 md:w-3/4 lg:w-3/5">
          <h2 className="font-poppins text-[36px] text-[#364045] font-semibold mb-4 mt-2 text-center">Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
              <input
                type="text"
                name="username"
                placeholder="Unique ID"
                value={formData.username}
                onChange={handleChange}
                className="font-sans w-full p-2 border border-[#2DC6BE] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-sans placeholder:font-normal placeholder:text-customBlack placeholder:text-[16px]"
              />
                  {formDataError.username && <p className="error text-left text-[#ff0000] text-sm">{formDataError.username}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="font-sans w-full p-2 border border-[#2DC6BE] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-sans placeholder:font-normal placeholder:text-customBlack placeholder:text-[16px]"
              />
              {formDataError.password && <p className="error text-left text-[#ff0000] text-sm">{formDataError.password}</p>}
            </div>
            <button
              type="submit"
              className="font-roboto mt-5 w-full py-2 bg-teal-400 text-[white] font-semibold rounded-[12px] hover:bg-teal-500 transition"
            >
              Sign In
            </button>
          </form>
          <p className="font-roboto text-[16px] font-normal text-right mt-2 pb-10 md:pb-0 text-base">
            <Link
              className="text-teal-600 hover:underline"
              onClick={toggleForgotPassword}
            >
              Forgot Password?
            </Link>
          </p>
          <p className="font-roboto text-[16px] font-normal text-center mt-10 pb-10 md:pb-0 text-base">
            Don’t have an account? <Link to="/signup" className="text-teal-600 hover:underline">Signup</Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {isForgotPasswordOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/4 relative">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleForgotPassword}
              className="bg-black p-1 rounded absolute top-4 right-4 text-white cursor-pointer hover:text-white hover:bg-[#2DC6BE]"
              size="lg"
            />

            <h3 className="text-2xl font-semibold text-center mb-8">
              Forgot Password
              <hr />
            </h3>

            {step === 1 && (
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => {
                    setActiveTab("email");
                    handleBackToInput();
                  }}
                  className={`mx-4 px-4 py-2 ${
                    activeTab === "email"
                      ? "bg-teal-400 text-white"
                      : "bg-gray-200 text-black"
                  } rounded-2`}
                >
                  Email ID
                </button>
                <button
                  onClick={() => {
                    setActiveTab("mobile");
                    handleBackToInput();
                  }}
                  className={`px-4 px-4 py-2 ${
                    activeTab === "mobile"
                      ? "bg-teal-400 text-white"
                      : "bg-gray-200 text-black"
                  } rounded-2`}
                >
                  Mobile No.
                </button>
              </div>
            )}

            <div className="p-4">
              {step === 1 && (
                <div>
                  {activeTab === "email" && (
                    <form>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-white w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                      />
                      <button
                        onClick={handleNext}
                        className="mt-4 w-full py-2 bg-teal-400 text-white font-semibold rounded-[12px] hover:bg-teal-500 transition"
                      >
                        Next
                      </button>
                    </form>
                  )}
                  {activeTab === "mobile" && (
                    <form>
                      <input
                        type="number"
                        placeholder="Mobile Number"
                        className="bg-white w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                      />
                      <button
                        onClick={handleNext}
                        className="mt-4 w-full py-2 bg-teal-400 text-white font-semibold rounded-[12px] hover:bg-teal-500 transition"
                      >
                        Next
                      </button>
                    </form>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="flex-col justify-center space-x-2">
                  <p className="text-left mb-5 text-lg">Please Enter the OTP</p>
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-10 h-10 text-center border border-[#2DC6BE] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                    />
                  ))}
                  <button
                    onClick={handleVerify}
                    className="mt-4 w-full py-2 bg-teal-400 text-white font-semibold rounded-[12px] hover:bg-teal-500 transition"
                  >
                    Verify
                  </button>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmitPassword}>
                  <input
                    type="password"
                    placeholder="Create Password"
                    value={createPassword}
                    onChange={(e) => setCreatePassword(e.target.value)}
                    className="bg-white w-full p-2 mb-4 border border-[#2DC6BE] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-white w-full p-2 mb-4 border border-[#2DC6BE] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack"
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full py-2 bg-teal-400 text-white font-semibold rounded-[12px] hover:bg-teal-500 transition"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;