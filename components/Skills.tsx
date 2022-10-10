import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currence profieciency</h3>

        <div className='grid grid-cols-4 gap-5'>
          <Skill level={80} src="images/javascript-logo.png" directionLeft />
          <Skill level={90} src="images/html5-logo.png" directionLeft />
          <Skill level={80} src="images/css-logo.png" directionLeft />
          <Skill level={70} src="images/react-logo.png" directionLeft />
          <Skill level={70} src="images/node-logo.png" />
          <Skill level={90} src="images/typescript-logo.png" />
          <Skill level={60} src="images/redux-logo.png" />
          <Skill level={60} src="images/git-logo.png" />
        </div>
    </motion.div>
  )
}

export default Skills