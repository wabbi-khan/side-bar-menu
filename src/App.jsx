import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Saved from "./pages/Saved";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase.config";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
function App() {
  // FIREBASE AUTHENTICATION WITH GOOGLE
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setisMenu] = useState(false);

  // ========== Log in ================
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };
  // ========================

  // ========== Log out ================
  const logout = () => {
    setisMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  console.log(user);
  return (
    <>
      {user ? (
        <button onClick={logout} className='logout'>
          Logout
        </button>
      ) : (
        <p className='login'>
          please Loging your main account
          <button onClick={login}>Login</button>
        </p>
      )}

      {user && user.email === "kwahab789@gmail.com" && (
        <>
          <Router>
            <SideBar>
              <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='/users' element={<Users />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/file-manager' element={<FileManager />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='*' element={<>not found</>} />
              </Routes>
            </SideBar>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
