import "./App.css";
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
function App() {
  return (
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
  );
}

export default App;
