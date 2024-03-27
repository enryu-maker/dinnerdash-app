import React from 'react'
import SideTab from '../Components/SideTab'
import Header from '../Components/Header';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
export default function Store() {
    const [activeTab, setActiveTab] = React.useState('Store Info');
    const [activeID, setActiveID] = React.useState(0);

    const data = [
        {
            id: 0,
            name: "Store Info"
        },
        {
            id: 1,
            name: "Tables"
        },
        {
            id: 2,
            name: "Opening Hours"
        },
        {
            id: 3,
            name: "Social Accounts"
        },
        {
            id: 4,
            name: "Wi-Fi"
        },
        {
            id: 5,
            name: "Location Details"
        },
    ]
    return (
        <div className="flex h-screen w-full">
            <SideTab />
            <div className=' w-[84%] ml-[16%]'>
                <Header />
                <div className='w-[100%] p-5 text-black bg-white'>
                    <p className=' text-2xl font-bold pb-3 text-gray-900 font-poppins'>
                        Tea Side #1
                    </p>
                    <div className="w-[100%] font-poppins ">
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
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
