import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => (
  <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0'>
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <section id='hero' className='snap-start'>
      <Hero />
    </section>

    <section id='about' className='snap-center'>
      <About />
    </section>

    <section id='experience' className='snap-center'>
      <WorkExperience />
    </section>

    <section id='skills' className='snap-start'>
      <Skills />
    </section>

    <section id='projects' className='snap-start'>
      <Projects />
    </section>
  </div>
);

export default Home;
