import React from 'react'
import { Images } from '../../../Assets/Images'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tables() {
    const [inputs, setInputs] = React.useState([{ table_number: "", table_type: "" }]);

    const handleAddInput = () => {
        setInputs([...inputs, { table_number: "", table_type: "" }]);
    };

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
    };
    return (
        <div className=' flex flex-col  mt-5 font-poppins'>
            <p
                className="text-2xl tracking-wider font-bold font-poppins text-green-600"
            >
                Tables
            </p>
            <div className='flex flex-wrap justify-between'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='h-[150px] bg-[url("/src/Assets/Image/table.png")] bg-no-repeat bg-contain bg-white my-2 w-[150px]'>
                    <p
                        className="text-xl tracking-widest self-center font-bold font-poppins text-gray-900"
                    >
                        I1
                    </p>
                </motion.button>
            </div>
            <p
                className="text-2xl tracking-wider font-bold font-poppins text-gray-800"
            >
                Add New Tables
            </p>
            <div className="container flex flex-wrap mt-4 mx-2 justify-between">
                {inputs.map((item, index) => (
                    <div className="input_container space-y-2 w-[45%]" key={index}>
                        <label
                            htmlFor="table_number"
                            className="block text-sm text-left font-bold font-poppins text-gray-900"
                        >
                            Table Number <span className="text-red-600">*</span>
                        </label>
                        <input
                            name="table_number"
                            type="text"
                            value={item.wifi_name}
                            onChange={(event) => handleChange(event, index)}
                            className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                        />
                        <Menu as="div" className="relative  w-[300px] inline-block text-center">
                            <div>
                                <Menu.Button
                                    className="inline-flex w-full justify-center items-center text-sm font-bold self-center p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                                >
                                    <p>Table  Type <span className="text-red-600">*</span></p>
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
                                    onChange={(event) => handleChange(event, index)}
                                    className="z-10 mt-2   rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => {
                                                        item.table_type = "Inside"
                                                    }}
                                                    className={classNames(
                                                        item.table_type == "Inside" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
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
                                                        item.table_type = "Outside"
                                                    }}
                                                    className={classNames(
                                                        item.table_type == "Outside" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
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
                                                        item.table_type = "Mezzanine"
                                                    }}
                                                    className={classNames(
                                                        item.table_type == "Mezzanine" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
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
                                                        item.table_type = "Courtyard"
                                                    }}
                                                    className={classNames(
                                                        item.table_type == "Courtyard" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
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
                                                        item.table_type = "Dine"
                                                    }}
                                                    className={classNames(
                                                        item.table_type == "Dine" ? 'bg-green-100 text-gray-900' : 'text-gray-700',
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
                        {inputs.length > 1 && (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex w-[30%] justify-center  bg-red-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                                onClick={() => handleDeleteInput(index)}>Delete</motion.button>
                        )}
                        <div className=' flex space-x-5 py-3'>
                            {index === inputs.length - 1 && (
                                <>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex w-[30%] justify-center  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                                        onClick={() => handleAddInput()}>Add</motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex w-[30%] justify-center  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                                        onClick={() => {
                                            console.log(inputs)
                                        }}>Save</motion.button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
