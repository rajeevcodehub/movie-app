import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [isUserExist, setUserExist] = useState(true);
  const toggleSignInForm = () => {
    setUserExist(!isUserExist);
  };

  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="image"
        />
      </div>
      <form className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isUserExist ? "Sign In" : "Sign Up"}
        </h1>
        {!isUserExist && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 bg-gray-700 w-full my-2 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 bg-gray-700 w-full my-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 bg-gray-700 my-2 w-full rounded-lg"
        />
        <button className="text-white w-full my-4 h-12 text-1xl rounded-lg bg-red-700">
          {isUserExist ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between">
          <div>
            <input type="checkbox" value="Remember Me" className="h-4" />
            <label className="text-[#737373]">Remember Me</label>
          </div>
          <h2 className="text-[#737373]">Need Help?</h2>
        </div>

        <div className="text-white flex gap-2 mt-16">
          <h2 className="text-[#737373]">
            {isUserExist ? "New to Netflix" : "Already a Member?"}
          </h2>
          <Link onClick={toggleSignInForm}>
            {isUserExist ? "Sign Up Now" : "Sign In"}
          </Link>
        </div>
        <div className="text-white mt-2 leading-4">
          <p className="text-[#737373]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot &nbsp;
            <Link className="text-blue-800">Learn more.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;