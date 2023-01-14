import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";
import { GiCardExchange } from "react-icons/gi";
import { BiCommand } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SidebarMenu from "./sidebarMenu";

function Sidebar({ children }) {
  const routes = [
    {
      path: "/",
      name: "Aspect Scores",
      icon: <BsSpeedometer2 />,
    },
    {
      path: "/benchmark",
      name: "Benchmark",
      icon: <BiCommand />,
    },
    {
      path: "/time-series",
      name: "Time Series",
      icon: <MdShowChart />,
    },
    {
      path: "/driver-analysis",
      name: "Driver Analysis",
      icon: <GiCardExchange />,
    },
    {
      path: "/aspect-details",
      name: "Aspect Details",
      icon: <BiGridAlt />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
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
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className='flex flex-row space-x-8'>
        <div className='bg-black text-white h-[100%] overflow-y-auto  sticky top-0  z-50'>
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className='bg-black text-white h-screen overflow-y-auto'
          >
            <div className='flex items-center  justify-center px-2.5 py-3'>
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex mx-auto text-3xl'
                  >
                    ReQiew
                  </motion.h1>
                )}
                <div className='text-xl mt-4 mb-4 float-right hover:cursor-pointer'>
                  <FaBars onClick={toggle} className='pt-2' />
                </div>
              </AnimatePresence>
            </div>

            <section
              className={
                isOpen
                  ? "mt-8  mx-4 flex flex-col  space-y-8"
                  : "flex flex-col  space-y-8"
              }
            >
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className={
                      isOpen
                        ? "flex px-3 py-2 text-xl text-white  space-x-4 border-transparent border-solid border-2 transition-all ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                        : "flex px-3 text-md py-2 text-white  border-transparent border-solid border-2 transition-all ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                    }
                    activeClassName={
                      isOpen ? "active " : "active p-0 rounded-full"
                    }
                  >
                    <div className='flex justify-center space-x-4 items-center'>
                      <div className='icon'>{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='text-sm whitespace-nowrap'
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
        </div>
        <main className='w-screen ml-0'>{children}</main>
      </div>
    </>
  );
}

export default Sidebar;
