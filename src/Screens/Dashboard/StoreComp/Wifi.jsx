import React from 'react'

export default function Wifi() {
    const [inputs, setInputs] = React.useState([{ wifi_name: "", password: "" }]);

    const handleAddInput = () => {
        setInputs([...inputs, { wifi_name: "", password: "" }]);
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
        <div className=' flex justify-center items-center mt-5 font-poppins'>
            <div className="container flex flex-wrap justify-between">
                {inputs.map((item, index) => (
                    <div className="input_container space-y-2 w-[45%]" key={index}>
                        <label
                            htmlFor="wifi_name"
                            className="block text-sm text-left font-bold font-poppins text-gray-900"
                        >
                            WiFi Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            name="wifi_name"
                            type="text"
                            value={item.wifi_name}
                            onChange={(event) => handleChange(event, index)}
                            className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                        />
                        <label
                            htmlFor="password"
                            className="block text-sm text-left font-bold font-poppins text-gray-900"
                        >
                            Password <span className="text-red-600">*</span>
                        </label>
                        <input
                            name="password"
                            type="text"
                            value={item.password}
                            onChange={(event) => handleChange(event, index)}
                            className="block w-full p-5 border-2 py-1.5 text-gray-900 focus:outline-green-600"
                        />
                        {inputs.length > 1 && (
                            <button 
                            className="flex w-[30%] justify-center  bg-red-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                            onClick={() => handleDeleteInput(index)}>Delete</button>
                        )}
                        <div className=' flex space-x-5 py-3'>
                            {index === inputs.length - 1 && (
                                <>
                                    <button
                                        className="flex w-[30%] justify-center  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                                        onClick={() => handleAddInput()}>Add</button>
                                    <button
                                        className="flex w-[30%] justify-center  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                                        onClick={() => {
                                            console.log(inputs)
                                        }}>Save</button>
                                </>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
