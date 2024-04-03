import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function AddItem({
    setShowModal
}) {
    const [inputs, setInputs] = React.useState([{ table_number: "", table_type: "" }]);
    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
    };
    return (
        <>
            <div
                className="justify-center space-x-1 items-center font-poppins flex fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className='w-[50%]  flex flex-col justify-between bg-white '>
                    <div className="flex items-start justify-between py-[14px] px-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                            Add Dish
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
                    <div className="flex flex-wrap space-y-2  justify-between py-[14px] px-5  border-solid border-blueGray-200 rounded-t">
                        <div className='w-[300px] my-2'>
                            <label
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Dish Photo <span className="text-red-600">*</span>
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
                                Dish Background
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
                                Price <span className="text-red-600">*</span>
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
                                htmlFor="salary"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Cateogry <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <Menu as="div" className="relative  w-[300px] inline-block text-center">
                                    <div>
                                        <Menu.Button
                                            className="inline-flex w-full justify-center items-center text-sm font-bold self-center p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                        >
                                            <p>Menu Cateogry <span className="text-red-600">*</span></p>
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            // onChange={(event) => handleChange(event, index)}
                                            className="z-10 mt-2   rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Inside"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Inside" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Inside
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Outside"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Outside" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Outside
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Mezzanine"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Mezzanine" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Mezzanine
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Courtyard"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Courtyard" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Courtyard
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Dine"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Dine" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Casual Dinning / Fine Dine
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <div className='w-[300px] my-2'>
                            <label
                                htmlFor="salary"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Sub Cateogry <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <Menu as="div" className="relative  w-[300px] inline-block text-center">
                                    <div>
                                        <Menu.Button
                                            className="inline-flex w-full justify-center items-center text-sm font-bold self-center p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                        >
                                            <p>Menu Sub-Cateogry <span className="text-red-600">*</span></p>
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            // onChange={(event) => handleChange(event, index)}
                                            className="z-10 mt-2   rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Inside"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Inside" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Inside
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Outside"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Outside" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Outside
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Mezzanine"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Mezzanine" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Mezzanine
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Courtyard"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Courtyard" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Courtyard
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                // item.table_type = "Dine"
                                                            }}
                                                            className={classNames(
                                                                // item.table_type == "Dine" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm w-full'
                                                            )}
                                                        >
                                                            Casual Dinning / Fine Dine
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <div className='w-full my-2'>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Description <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="email"
                                    name="email"
                                    type='text'
                                    // value={data.email}
                                    onChange={(e) => {
                                        // setData({ ...data, email: e.target.value });
                                    }}
                                    required
                                    className="block w-full text-xs p-5 border-2 py-3.5 text-gray-900 focus:outline-green-600"
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
                            Add Dish
                        </motion.button>
                    </div>
                </div>
                <div className='w-[25%] flex flex-col justify-between bg-white '>
                    <div className="flex items-start justify-between py-[14px] px-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-xl font-semibold">
                            Dish Preview
                        </h3>
                    </div>
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
