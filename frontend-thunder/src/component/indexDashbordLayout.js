import * as React from 'react'
import { Outlet } from "react-router-dom"
import Sidebar from './sidebar/sidebar'
import './indexDashboard.css'

export default function dashboardLayout() {
    return (
        <div className='index-layout'>
            <Sidebar />
            <Outlet />
        </div >
    )
}
