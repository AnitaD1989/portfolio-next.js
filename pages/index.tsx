import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link';
import { PageInfo, Skill, Project, Social } from "../typing";
import type { GetStaticProps } from "next";
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProject';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocial } from '../utils/fetchSocials';
import Image from 'next/image';



type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Anita`s Portfolio</title>
      </Head>
      
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/*About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/*Skills */}
      <section id="skills" className="snap-start">
        <Skills />

      </section>

      {/*Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex item-center justify-center">
            <Image 
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
              src="https://img.freepik.com/premium-vector/pretty-business-woman-standing-with-arms-crossed_546897-360.jpg?w=2000" alt="" />
          </div>
         </footer>
        </Link>
      </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill [] = await fetchSkills();
  const projects: Project[]  = await fetchProjects();
  const socials: Social []= await fetchSocial();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      socials,
    },
  }
  

}









