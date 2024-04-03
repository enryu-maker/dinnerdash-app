import React from 'react'
import SideTab from '../Components/SideTab'
import Header from '../Components/Header'
import AddEmployee from './ModalComp/AddEmployee';
import { motion } from 'framer-motion';
export default function Employee() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="flex h-screen w-full font-poppins">
            <SideTab />
            <div className=' w-[84%] ml-[16%]'>
                <Header />
                <div class="container mx-auto p-4">
                    <div className='flex justify-between items-center pb-6'>
                        <h1 class="text-2xl font-bold  ">My Employees</h1>
                        <div className=' space-x-4'>
                            <button class=" text-green-600 font-semibold tracking-wide">
                                Filter
                            </button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => { setShowModal(true) }}
                                className="text-sm  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins text-white"
                            >
                                Add Employee
                            </motion.button>
                        </div>
                    </div>
                    <table class="min-w-full bg-white border-b-2 border-b-gray-100">
                        <thead className=''>
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Employee ID</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Name</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Number</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Joining Date</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-100 border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">EMP123</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">John Doe</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">9876543210</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2023-01-15</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">$50,000</td>
                            </tr>
                            <tr class="bg-white border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">EMP456</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Jane Smith</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">1234567890</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2023-02-20</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">$45,000</td>
                            </tr>
                            <tr class="bg-gray-100 border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">EMP789</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Alice Johnson</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">5555555555</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2023-03-10</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">$55,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {showModal ? (
                <AddEmployee setShowModal={setShowModal} />
            ) : null}
        </div>
    )
}
