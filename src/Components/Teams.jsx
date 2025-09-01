import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from 'motion/react'
const Teams = () => {
  return (
    <motion.div 
    initial= "hidden"
    whileInView="visible"
    viewport={{once: true}}
    
    className='flex flex-col gap-7 items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Meet our team' desc='We are a team of passionate professionals who are dedicated to helping you achieve your goals.'/>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
                teamData.map((team, index)=>(
                    <motion.div
                        initial = {{opacity: 0, y: 20}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration: 0.4, delay: index * 0.1}}
                        viewport={{once:true}}
                        key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>

                        <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <h3 className='text-xs opacity-60'>{team.title}</h3>
                        </div>

                    </motion.div>
                ))
            }
        </div>

    </motion.div>


  )
}

export default Teams