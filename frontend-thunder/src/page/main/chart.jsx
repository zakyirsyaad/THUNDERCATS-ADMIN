import Barchart from "./chart/barchart/barchart";
import '../../App.css'
import TopSelling from "./chart/topselling/topselling";
import Report from "./chart/report/report";

export default function Chart() {
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