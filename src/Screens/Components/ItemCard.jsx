import React from 'react'

export default function ItemCard() {
    return (
        <div
            className=' flex flex-col m-2 px-1 items-center justify-evenly h-[220px] w-[200px] shadow-lg rounded-md font-poppins'
        >
            <img
                className=' object-cover rounded-md'
                src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <h1 class="text-sm self-start text-gray-900 overflow-hidden">Shoe Juice</h1>
            <h1 class="text-lg font-semibold self-start">$22</h1>
        </div>
    )
}
