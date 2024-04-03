import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Dashboard/Home'
import Menu from '../Dashboard/Menu'
import Store from '../Dashboard/Store'
import Customer from '../Dashboard/Customer'
import Orders from '../Dashboard/Orders'
import Employee from '../Dashboard/Employee'

export default function HomeNav() {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate to={"/home/dashboard"} />} />
            <Route path='/home/dashboard' element={<Home />} />
            <Route path='/home/menus' element={<Menu />} />
            <Route path='/home/stores' element={<Store />} />
            <Route path='/home/customer' element={<Customer />} />
            <Route path='/home/orders' element={<Orders />} />
            <Route path='/home/employee' element={<Employee />} />

        </Routes>
    )
}
