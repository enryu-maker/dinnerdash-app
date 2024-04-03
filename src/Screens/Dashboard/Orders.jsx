import React from 'react'
import SideTab from '../Components/SideTab'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import AddOrder from './ModalComp/AddOrder';
export default function Orders() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="flex h-screen w-full font-poppins">
            <SideTab />
            <div className=' w-[84%] ml-[16%]'>
                <Header />
                <div class="container mx-auto p-4">
                    <div className='flex justify-between items-center pb-6'>
                        <h1 class="text-2xl font-bold  ">Food Orders</h1>
                        <div className=' space-x-4'>
                            <button class=" text-green-600 font-semibold tracking-wide">
                                Filter
                            </button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={()=>{
                                    setShowModal(true)
                                }}
                                className="text-sm  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins text-white"
                            >
                                Create Order
                            </motion.button>
                        </div>
                    </div>
                    <table class="min-w-full bg-white border-b-2 border-b-gray-100">
                        <thead className=''>
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Order ID</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Payment Method</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Date</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Table</th>
                                <th class="px-6 py-3 text-left text-sm font-semibold text-green-600 uppercase tracking-wider border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-100 border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">ORD12345</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Credit Card</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2024-04-01</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Table 5</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Pending</td>
                            </tr>
                            <tr class="bg-white border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">ORD12346</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Cash</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2024-04-02</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Table 3</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Completed</td>
                            </tr>
                            <tr class="bg-gray-100 border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">ORD12347</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Debit Card</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2024-04-03</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Table 8</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Processing</td>
                            </tr>
                            <tr class="bg-white border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">ORD12348</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">PayPal</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2024-04-04</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Table 2</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Cancelled</td>
                            </tr>
                            <tr class="bg-gray-100 border-b">
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">ORD12349</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Stripe</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">2024-04-05</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Table 10</td>
                                <td class="px-6 py-3 text-left text-sm font-regular text-gray-600 uppercase tracking-wider border-b">Pending</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            {showModal ? (
                <AddOrder setShowModal={setShowModal} />
            ) : null}
        </div>
    )
}
