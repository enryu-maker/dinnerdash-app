import { motion } from 'framer-motion'
import React from 'react'
export default function AddEmployee({
    setShowModal
}) {
    return (
        <>
            <div
                className="justify-center items-center font-poppins flex fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className='w-[50%] h-[55%] flex flex-col justify-between bg-white '>
                    <div className="flex items-start justify-between py-[14px] px-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                            Add Employee
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-7 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <p className="">
                                ×
                            </p>
                        </motion.button>
                    </div>
                    <div className="flex flex-wrap justify-between py-[14px] px-5  border-solid border-blueGray-200 ">
                        <div className='w-[300px] my-2'>
                            <label
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Employee Photo <span className="text-red-600">*</span>
                            </label>

                            <div className="mt-2">
                                <label for="file-input" class="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" class="block  w-full border-2 text-sm focus:z-10 focus:border-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                                file:bg-gray-100 file:border-0
                                file:me-4
                                file:py-3 file:px-4
                                // dark:file:bg-gray-700 dark:file:text-gray-400"/>
                            </div>
                        </div>
                        <div className='w-[300px] my-2'>

                            <label
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Aadhaar Card Photo <span className="text-red-600">*</span>
                            </label>

                            <div className="mt-2">
                                <label for="file-input" class="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" class="block  w-full border-2 text-sm focus:z-10 focus:border-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                                file:bg-gray-100 file:border-0
                                file:me-4
                                file:py-3 file:px-4
                                // dark:file:bg-gray-700 dark:file:text-gray-400"/>
                            </div>
                        </div>
                        <div className='w-[300px] my-2'>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Name <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    // value={data.email}
                                    onChange={(e) => {
                                        // setData({ ...data, email: e.target.value });
                                    }}
                                    required
                                    className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                />
                            </div>
                        </div>
                        <div className='w-[300px] my-2'>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Mobile Number <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    // value={data.email}
                                    onChange={(e) => {
                                        // setData({ ...data, email: e.target.value });
                                    }}
                                    required
                                    className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                />
                            </div>
                        </div>
                        <div className='w-[300px] my-2'>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Joining Date <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type='date'
                                    // value={data.email}
                                    onChange={(e) => {
                                        // setData({ ...data, email: e.target.value });
                                    }}
                                    required
                                    className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                />
                            </div>
                        </div>
                        <div className='w-[300px] my-2'>
                            <label
                                htmlFor="salary"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Salary <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="salary"
                                    name="salary"
                                    type="number"
                                    // value={data.email}
                                    onChange={(e) => {
                                        // setData({ ...data, email: e.target.value });
                                    }}
                                    required
                                    className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end py-[14px] px-5 border-t  border-solid border-blueGray-200 rounded-b">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-sm  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px]  px-3 py-1.5 tracking-wider font-poppins text-white"
                        >
                            Add Employee
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
