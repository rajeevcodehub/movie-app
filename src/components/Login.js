import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import validation from "../utils/validation";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { NetflixBackgroungImage, PROFILE_IMAGE_URL } from "../utils/constant";

const Login = () => {
  const [error, setError] = useState("");
  const [isUserExist, setUserExist] = useState(true);
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setUserExist(!isUserExist);
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    const validate = validation(
      emailRef.current.value,
      passwordRef.current.value
    );
    setError(validate);
    if (validate) return;

    if (!isUserExist) {
      createUser(emailRef.current.value, passwordRef.current.value);
    }
    if (isUserExist) {
      signIn(emailRef.current.value, passwordRef.current.value);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameRef.current.value,
          photoURL:
           PROFILE_IMAGE_URL ,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            console.log("user profile updated");
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error);
        // ..
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NetflixBackgroungImage} alt="image" />
      </div>
      <form className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isUserExist ? "Sign In" : "Sign Up"}
        </h1>
        {!isUserExist && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 bg-gray-700 w-full my-2 rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 bg-gray-700 w-full my-2 rounded-lg"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 bg-gray-700 my-2 w-full rounded-lg"
        />

        <button
          className="text-white w-full my-4 h-12 text-1xl rounded-lg bg-red-700"
          onClick={(event) => {
            handleSubmitButton(event);
          }}
        >
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
