import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "../components/BackgroundCircle";
import Link from 'next/link';
import Image from 'next/image';


type Props = {};

export default function Hero({}: Props) {
    const [text, count]= useTypewriter({
      words: [
        "Hi, my name is Anita Deszczynska", 
        "Girl-who-likes-coffee.tsx", 
        "<AndLikesToCode />"
      ],
      loop: true,
      delaySpeed: 2000,
    });
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="relative h-32 w-32 mx-auto object-cover">
      <Image className="rounded-full"
         src="/images/me.jpg" alt="meImg"/>
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
         Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

 