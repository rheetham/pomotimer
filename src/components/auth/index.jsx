import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "./useGetUserInfo";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/timer");
  };

  //if (isAuth) {
  // return <Navigate to="/timer" />;
  // }

  return (
    <div>
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle}> Sign In With Google</button>
    </div>
  );
};
export default Auth;
