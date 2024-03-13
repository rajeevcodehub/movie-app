import NetfNetflix_Logo from "../resources/Netflix_Logo_PMS.png";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {  useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    navigate("/gptsearch");
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
    // This will be called when component unmounts
  }, []);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NetfNetflix_Logo} alt="netflix-logo" />
      <div className="gap-8">
        {!user && (
          <div className="bg-red-700 rounded w-20 text-center items-center h-8">
            <Link to="/login" className=" ">
              Sign In
            </Link>{" "}
          </div>
        )}
        
        {user && (
          <div className="flex my-4 gap-4">
            <button className=" bg-red-700 text-black p-1 text-center items-center rounded-md" onClick={handleGPTSearch}>GPT Search</button>
            <button
              onClick={handleSignOut}
              className=" bg-red-700 rounded w-20 text-center items-center  h-8"
            >
              Sign out
            </button>
            <img
              src={user?.photoURL}
              alt="user"
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
