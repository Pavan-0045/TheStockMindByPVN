 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
const LoginPage = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(""); //email and password store user input 
  const [password, setPassword] = useState(""); 

  const handleGoogleSignIn = () => { // user signin with google an alert shows user redirect to 
    alert("✅ Logged in successfully with Google!");
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();  //stop the page refreshing 
    if (email === "test@example.com" && password === "123456") {
      alert("✅ Login successful!");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid credentials. Try again."); 
    }
  };

  const handleForgotPassword = () => {
    const enteredEmail = prompt("🔑 Enter your registered email:"); //A popup appears asking the user to type their email.
    if (enteredEmail) {
      alert(`📧 Password reset link sent to ${enteredEmail}`); //After typing, another message shows telling the user that a password reset link has been sent to that email.
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-[#6941C6] text-white flex flex-col justify-center items-center rounded-b-3xl lg:rounded-r-3xl lg:rounded-b-none p-10 relative">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-white text-[#6941C6] rounded-full px-6 py-2 inline-block">
            The<span className="text-red-500">Stock</span>Mind
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xs sm:max-w-sm">
            Re-imagining inventory management experience with advanced data
            analytics for optimum performance.
          </p>
        </div>
        <p className="absolute bottom-4 left-6 text-xs text-white/60">
          © TheUnityWare 2024
        </p>
      </div>

     
      <div className="flex justify-center items-center w-full lg:w-1/2 px-6 sm:px-10 py-10">
        <div className="max-w-sm w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            Welcome back
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Welcome back! Please enter your details.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
          
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //store values 
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

           
            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)} //store password 
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
                required
              />
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2 gap-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2 accent-purple-600" />
                  Remember for 30 days
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-purple-600 hover:underline"
                >
                  Forgot password
                </button>
              </div>
            </div>

          
            <button
              type="submit"
              className="w-full bg-[#6C3BFF] text-white py-2 rounded-md hover:bg-[#5a2de0] transition"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn} //signin with google 
              className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-50 transition"
            >
              <img
                src="/src/Icons/Social icon.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
