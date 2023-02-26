/* eslint-disable react/jsx-key */
import React from 'react';
import { motion } from "framer-motion";
import { Project } from '../typing';
import Link from "next/link";


type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0 top-56 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) =>(
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img 
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2}}
              whileInView={{opacity: 1, y:0}}
              viewport={{ once: true}}
            src="https://media.istockphoto.com/photos/flying-tablet-laptop-and-mobile-phone-showing-online-shop-website-picture-id1157329704?b=1&k=20&m=1157329704&s=612x612&w=0&h=MoD4RH1prqNNAoRmEweyDVWfeYL31TGEkfUa8-p9-yk="
            alt="mobile devices"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className= "text-4xl font-semibold text-center">
                <span className= "underline decoration-[#F7AB0A]/50"> Case Study {i + 1} of {projects.length}:</span> Pizzeria {""}
              </h4>
              <p className="text-lg text-center md:text-left">
               Italian restuarant with menu, prices calculation and table booking option. 
              </p>
            </div>
          </div>

        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>

  )
}

export default Projects