import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect  } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVTHAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptslice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
   
signOut(auth).then(() => {}).catch((error) => {
  navigate("/error");
});

  }  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && <div className="flex p-2 ">
        <select className="p-2 bg-gray-900 text-white m-2">
          {SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        <button className="py-2 px-4 m-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGPTSearchClick}>GPT Search</button>
        <img
          className="w-12 h-12"
          alt="usericon"
          src = {USER_AVTHAR}/>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
