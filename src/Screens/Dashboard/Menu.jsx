import React from 'react'
import SideTab from '../Components/SideTab'
import Header from '../Components/Header'
import { IoFilterSharp } from "react-icons/io5";
import ItemCard from '../Components/ItemCard';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import AddItem from './ModalComp/AddItem';
import { motion } from 'framer-motion';
export default function Menu() {
    const [activeTab, setActiveTab] = React.useState('Garam Garam');
    const [activeID, setActiveID] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);
    const data = [
        {
            id: 0,
            name: "Garam Garam",
        },
        {
            id: 1,
            name: "Thanda Thanda",
        },
        {
            id: 2,
            name: "Kabhi Kabhi",
        },
    ]
    return (
        <div className="flex h-screen w-full font-poppins">
            <SideTab />
            <div className=' w-[84%] ml-[16%]'>
                <Header />
                <div class="container mx-auto p-4">
                    <div className='flex justify-between items-center pb-6'>
                        <h1 class="text-2xl font-bold  ">Menu</h1>
                        <div className='flex space-x-4'>
                            {/* <button class=" flex items-center space-x-2 text-black font-semibold tracking-wide">
                                <IoFilterSharp /> &nbsp; Filter
                            </button> */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowModal(true)}
                                className="text-sm  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins text-white"
                            >
                                Add Item
                            </motion.button>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-evenly'>
                        <div className="w-[100%] font-poppins h-auto ">
                            <Tabs value={activeTab}>
                                <TabsHeader
                                    className="rounded-none border-none bg-transparent w-[100%]"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2  shadow-none border-green-600 rounded-none",
                                    }}
                                >
                                    {data?.map((item, index) => (
                                        <Tab
                                            key={item?.name}
                                            value={item?.name}
                                            onClick={() => {
                                                setActiveTab(item?.name)
                                                setActiveID(item?.id)
                                            }}
                                            className={
                                                activeTab === item?.name ? "text-green-600 font-poppins text-base font-bold tracking-wider" : "text-gray-900 tracking-wider text-base font-poppins"
                                            }
                                        >
                                            {item?.name}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody className='flex flex-wrap ' >
                                    <ItemCard />
                                    <ItemCard />

                                </TabsBody>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
                <AddItem setShowModal={setShowModal} />
            ) : null}
        </div>
    )
}
