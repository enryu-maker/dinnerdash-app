import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

export default function AuthNav() {
  return (
    <Routes>
        <Route exact path='/' element={<Navigate to={"/auth/login"}/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/auth/register' element={<Register/>}/>
    </Routes>
  )
}
