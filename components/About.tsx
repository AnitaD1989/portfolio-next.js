import React from 'react'
import {motion} from "framer-motion";
import { PageInfo } from '../typing';

type Props = {
  pageInfo: PageInfo
};

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{duratiom: 1.5 }}
      className="top-24 sm:top-36 flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
      m-auto items-center xs-col flex-xs">
   

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0, opacity:1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src="/images/Oeschinensee.jpeg"
        className="rounded-full object-cover m-auto 
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl first:font-semibold">Here is a {" "}
        <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-base sm:h-full sm:overflow-y-auto">
          👋 I`m Anita a Junior Full Stack Developer, looking for new chellenges and opportunieties,
          here`s a little bit about me... I`ve been coding for over 2 years now, constantly learning 
          and improving my skills. I started coding for fun and it became my passion🌟 
          I am up to date with new technological and visual trends.
          To learn I mostly use the sources found on the Internet and I practice alot.
          I also took a part in Bootcamp from Kodilla school, where I was supported by the mentor 1:1.
          I am not afraid of breaking patterns and I love new challenges.
          Give me your idea or guidelines and I will take care of the rest.😊
        </p>
      </div>
    </motion.div>
  )
}