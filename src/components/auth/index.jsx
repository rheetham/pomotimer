import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "./useGetUserInfo";
import TimelineIcon from "@mui/icons-material/Timeline";
import "./index.css";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      email: results.user.email,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/timer");
    localStorage.setItem("name", JSON.stringify(authInfo.name));
  };  
  
  // if (isAuth) {
  // return <Navigate to="/timer" />;
  // }

  return (
    <div className="signIn">
      <div className="icon">
        <TimelineIcon className="logo" fontSize="large"/><h1>Zenith</h1>
      </div>
      <hr></hr>

      <button className="signInButton" onClick={signInWithGoogle}> Sign In With Google To Continue</button>
    </div>
  );
};
export default Auth;
