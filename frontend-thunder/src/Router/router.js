import { Routes, Route } from "react-router-dom"
import SignIn from "../page/login/signin"
import DashboardLayout from "../component/indexDashbordLayout"
import Chart from "../page/main/chart"
import Transaksi from "../page/transaksi/transaksi"
import User from "../page/user/user"
import Inventaris from "../page/inventaris/inventaris"

export default function IndexRouter(props) {
    const isLoggedIn = localStorage.getItem("token") === null ? false : true
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="chart" element={<Chart />} />
                <Route path="transaksi" element={<Transaksi />} />
                <Route path="user" element={<User />} />
                <Route path="inventaris" element={<Inventaris />} />
            </Route>
        </Routes>
    )
}