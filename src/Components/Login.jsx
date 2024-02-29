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
    <div className="h-[500px] w-full flex items-center justify-center">
      <div>
        <h1 className="text-blue text-3xl mb-10 ">Login</h1>
        
        <div onClick={handleClickGoogle}>
          <p className="py-2 px-5 border rounded bg-blue">Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
