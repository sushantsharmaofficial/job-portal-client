import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Authentication/Firebase.config";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google login

  const handleClickGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
    >
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">Welcome back</span>
        <span className="font-light text-gray-400 mb-8">
          Welcom back! Please enter your details
        </span>
        <div className="py-4">
          <span className="mb-2 text-md">Email</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            name="pass"
            id="pass"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div className="flex justify-between w-full py-4">
          <div className="mr-24">
            <input type="checkbox" name="ch" id="ch" className="mr-2" />
            <span className="text-md">Remember for 30 days</span>
          </div>
          <span className="font-bold text-md">Forgot password</span>
        </div>
        <button
          className="w-full bg-blue text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Sign in
        </button>
        <button onclick={handleClickGoogle}
          className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue hover:text-white"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="img" className="w-6 h-6 inline mr-2" />
          Sign in with Google
        </button>
        <div className="text-center text-gray-400">
          Dont'have an account?
          <span className="font-bold text-blue">Sign up for free</span>
        </div>
      </div>
      <div className="relative">
        <img
          src='https://imgs.search.brave.com/bJ_O4JkkHx-F5WZOH2nssDQTpyf1O7IwPtOMhyT1iBs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nbGFtb3VyLmNv/bS9waG90b3MvNTY5/NWUwMzhkOWRhYjlm/ZjQxYjRiMDFhL21h/c3Rlci93XzE2MDAs/Y19saW1pdC9pbnNw/aXJlZC0yMDE1LTEy/LXdvcmstY29tcHV0/ZXItc3RhbmRpbmct/b2ZmaWNlLW1haW4u/anBn'
          alt="img"
          className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
        <div
          className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
        >
          <span className="text-white text-xl"
            >Find your dream job here"<br /> Login in with google <br /> Never imagine working without it."
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
