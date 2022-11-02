import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
      md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
      cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="image.png"
        alt="image"
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Some header text</h4>
        <p className='font-bold text-2xl mt-1'>Some paragraph text</p>
        <div className='flex space-x-2 my-2'>
          <div className='h-10 w-16 rounded-full relative' >
            <Image
              layout='fill'
              objectFit='contain'
              src="/images/javascript-logo.png"
              alt="javascript-logo"
            />
          </div>
          <div className='h-10 w-16 rounded-full relative' >
            <Image
              layout='fill'
              objectFit='contain'
              src="/images/javascript-logo.png"
              alt="javascript-logo"
            />
          </div>
          <div className='h-10 w-16 rounded-full relative' >
            <Image
              layout='fill'
              objectFit='contain'
              src="/images/javascript-logo.png"
              alt="javascript-logo"
            />
          </div>
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
          <li>Summary points Summary points Summary points </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;