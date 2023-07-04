import Barchart from "./chart/barchart/barchart";
import '../../App.css'
import Report from "./chart/report/report";
import { useEffect } from "react";
import TopSelling from "./chart/topselling/topselling";
import Pesan from "../pesan/pesan";

export default function Chart() {
    useEffect(() => {
        document.title = "Dashboard | THUNDERCATS"
    })
    return (
        <div className="chart-container">
            <Report />
            <div className="main-chart">
                <Barchart />
                <TopSelling />
                <Pesan />
            </div>
        </div>
    )
}