const Login = () => {
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="image"
        />
      </div>
      <form className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">Sign In</h1>
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
        <button className="text-white w-full my-4 h-12 text-1xl rounded-lg bg-red-500">
          Sign In
        </button>
        <div className="flex justify-between">
          <div>
            <input type="checkbox" value="Remember Me" className="h-4" />
            <label className="text-white">Remember Me</label>
          </div>
          <h2 className="text-white">Need Help?</h2>
        </div>
      </form>
    </div>
  );
};

export default Login;
