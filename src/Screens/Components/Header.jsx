import React from 'react'
import { MdOndemandVideo, MdOutlineNotificationsActive } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { Images } from '../../Assets/Images';
export default function Header() {
    const userNavigation = [
        { name: 'Sign out', href: '#' },
    ]
    return (
        <div className='h-[60px] sticky top-0 bg-white w-full px-4  flex justify-between items-center  border-b-[1px]'>
            <div className='space-x-6 flex '>
                <p className='text-black tracking-widest text-2xl font-normal font-poppins flex items-center'> <img src={Images.logo} className='h-6 w-auto'/> &nbsp;diner<span className='text-green-600 tracking-widest font-black'>Dash</span></p>
                <button
                    className="flex justify-center items-center text-sm  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins text-white"
                >
                    <MdOndemandVideo /> &nbsp; Watch Tutorial
                </button>
                <button
                    className="flex justify-center items-center text-sm  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins text-white"
                >
                    <IoBookOutline /> &nbsp; e-Book
                </button>
            </div>

            <div className='flex justify-center items-center space-x-10'>
                <button
                    className="flex justify-center items-center text-sm   text-black"
                >
                    <MdOutlineNotificationsActive size={22} />
                </button>
                <motion.div className='flex justify-center items-center space-x-2'>
                    <p className=' font-poppins text-sm font-semibold tracking-widest'>Admin </p> <div className='h-8 w-8 rounded-full bg-green-600'/>
                </motion.div>
            </div>
        </div>
    )
}
