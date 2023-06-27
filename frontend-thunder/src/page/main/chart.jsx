import Barchart from "./chart/barchart/barchart";
import '../../App.css'
import TopSelling from "./chart/topselling/topselling";
import Report from "./chart/report/report";
import { useEffect } from "react";

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
            </div>
        </div>
    )
}