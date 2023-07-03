import './barchart.css'
import { CategoryScale, Chart as chartJs, LinearScale, LineElement, PointElement, ArcElement } from "chart.js"
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from "react"
import axios from 'axios'

chartJs.register(
    LineElement, LinearScale, CategoryScale, PointElement, ArcElement
)

export default function Barchart() {
    const [transaksi, settransaksi] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/product')
                settransaksi(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    const data = {
        labels: transaksi?.map(x => x.id_product),
        datasets: [
            {
                label: `Total ${transaksi?.length} penjualan`,
                data: transaksi?.map(x => x.id_transaksi),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    }

    return (
        <section className="barchart-container">
            <p className='label-dashboard'>Laporan Penjualan</p>
            <Line data={data} className='bar' />
        </section>
    )
}
