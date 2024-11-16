
import {useState} from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/Image.png';
import logo from '../../assets/logo.png';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [formDataError, setFormDataError] = useState({});

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
          <h2 className="text-[32px] font-semibold mb-4 mt-2 text-center">Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
                {formDataError.username && <span className="text-left font-small text-red-600">{formDataError.username}</span>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {formDataError.password && <span className="text-left font-medium text-red-600">{formDataError.password}</span>}
            <button
              type="submit"
              className="mt-5 w-full py-2 bg-teal-400 text-[white] font-semibold rounded-md hover:bg-teal-500 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center mt-10 pb-10 md:pb-0 text-base">
            Don’t have an account? <Link to="/signup" className="text-teal-600 hover:underline">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;