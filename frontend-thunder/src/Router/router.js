import { Routes, Route } from "react-router-dom"
import React from "react"
import './loader.css'
const LazySign = React.lazy(() => import("../page/login/signin"))
const LazyDashboarLayout = React.lazy(() => import("../component/indexDashbordLayout"))
const LazyChart = React.lazy(() => import("../page/main/chart"))
const LazyTransaksi = React.lazy(() => import("../page/transaksi/transaksi"))
const LazyUser = React.lazy(() => import("../page/user/user"))
const LazyInventaris = React.lazy(() => import("../page/inventaris/inventaris"))
// import DashboardLayout from "../component/indexDashbordLayout"
// import Chart from "../page/main/chart"
// import Transaksi from "../page/transaksi/transaksi"
// import User from "../page/user/user"
// import Inventaris from "../page/inventaris/inventaris"

export default function IndexRouter(props) {
    const isLoggedIn = localStorage.getItem("token") === null ? false : true

    const Loading = () =>
        <div className="loading-container">

            <div class="gearbox">
                <div class="overlay"></div>
                <div class="gear one">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear two">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear three">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear four large">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>

        </div>;

    return (
        <Routes>
            <Route path="/" element={<React.Suspense fallback={<Loading />}><LazySign /></React.Suspense>} />
            <Route path="/" element={<React.Suspense fallback={<Loading />}><LazyDashboarLayout /></React.Suspense>}>
                <Route path="dashboard" element={<React.Suspense fallback={<Loading />}><LazyChart /></React.Suspense>} />
                <Route path="transaksi" element={<React.Suspense fallback={<Loading />}><LazyTransaksi /></React.Suspense>} />
                <Route path="user" element={<React.Suspense fallback={<Loading />}><LazyUser /></React.Suspense>} />
                <Route path="inventaris" element={<React.Suspense fallback={<Loading />}><LazyInventaris /></React.Suspense>} />
            </Route>
        </Routes>
    )
}