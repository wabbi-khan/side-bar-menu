import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
//routes
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/orders",
    name: "Order",
    icon: <BsCartCheck />,
  },

  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
  },
];
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='main-container'>
      <motion.div animate={{ width: "200px" }} className='sidebar'>
        <div className='top_section'>
          <h1 className='logo'>SideBar Menu</h1>
          <div className='bars'>
            <FaBars />
          </div>
        </div>
        <div className='search'>
          <div className='search_icon'>
            <BiSearch />
          </div>
          <input placeholder='Search ...' />
        </div>
        <section className='routes'>
          {routes.map((item) => (
            <NavLink to={item.path} key={item.name} className='link'>
              <div className='icon'> {item.icon} </div>
              <div className='link_text'> {item.name} </div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
