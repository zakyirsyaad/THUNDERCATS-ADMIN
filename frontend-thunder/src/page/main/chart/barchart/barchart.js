import './barchart.css';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

Chart.register(...registerables);

export default function Barchart() {
    const [transaksi, settransaksi] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/transaksi')
                settransaksi(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    const jenisProdukSet = new Set(transaksi.map((item) => item.nama_product));
    const jumlahProduk = [...jenisProdukSet].map((jenis) => {
        const jumlah = transaksi.reduce(
            (total, item) => (item.nama_product === jenis ? total + item.jumlah_produk : total),
            0
        );
        return jumlah;
    });

    const data = {
        labels: [...jenisProdukSet],
        datasets: [
            {
                label: `Total ${transaksi.length} transaksi`,
                data: jumlahProduk,
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
                borderWidth: 1,
            },
        ],
    };


    return (
        <section className="barchart-container">
            <p className='label-dashboard'>Product Terlaris</p>
            <Bar data={data} className='bar' />
        </section>
    )
}
