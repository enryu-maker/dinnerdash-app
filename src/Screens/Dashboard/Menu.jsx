import React from 'react'
import SideTab from '../Components/SideTab'
import Header from '../Components/Header'

export default function Menu() {
    return (
        <div className="flex h-screen w-full">
            <SideTab />
            <div className=' w-[84%] ml-[16%]'>
                <Header />
                <div className='w-[100%] p-5 text-black bg-gray-100 '>
                    Menu
                </div>
            </div>
        </div>
    )
}
