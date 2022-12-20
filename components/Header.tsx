import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';

function Header() {
  return(
    <header className="sticky top-0 flex items-start justify-between max-w-7-xl mx-auto z-20 xl-items-center xs-col">
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      
      className="flex flex-row item-center">
        <SocialIcon 
          url="https://github.com/AnitaD1989"
          fgColor="gray" 
          bgColor="transparent"
        />
        <SocialIcon 
          url="https://linkedin.com/in/jaketrent" 
          fgColor="gray" 
          bgColor="transparent"
        />
        <SocialIcon 
          url="https://twitter.com/Anita39197630" 
          fgColor="gray" 
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/anita_deszczynska/"
          fgColor="gray" 
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact"> </Link>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
      
      className="flex flex-row item-center text-gray-300 cursor-pointer mr-4">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray" 
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 pt-4 mr-4">Get In Touch</p>
        


      </motion.div>
    </header>
  )
}

export default Header;