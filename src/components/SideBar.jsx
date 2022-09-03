import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { ImCross } from "react-icons/im";
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
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "5px 10px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className='main-container'>
      <motion.div
        animate={{
          width: isOpen ? "250px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className='sidebar'
      >
        <div className='top_section'>
          {isOpen && (
            <motion.h1
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={showAnimation}
              className='logo'
            >
              SideBarMenu
            </motion.h1>
          )}
          <div className='bars' onClick={toggle}>
            {/* <FaBars onClick={toggle} /> */}
            {isOpen ? <ImCross /> : <FaBars />}
          </div>
        </div>
        <div className='search'>
          <div className='search_icon'>
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial='hidden'
                animate='show'
                exit='hidden'
                variants={inputAnimation}
                placeholder='Search ...'
              />
            )}
          </AnimatePresence>
        </div>
        <section className='routes'>
          {routes.map((item) => (
            <NavLink
              activeClassName='active'
              to={item.path}
              key={item.name}
              className='link'
            >
              <div className='icon'> {item.icon} </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    variants={showAnimation}
                    className='link_text'
                  >
                    {" "}
                    {item.name}{" "}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
