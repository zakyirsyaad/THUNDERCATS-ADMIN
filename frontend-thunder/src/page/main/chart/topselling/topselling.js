import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

export default function TopSelling() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/transaksi');
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Calculate jenisProdukSet, jumlahProduk, and transaksi
    const jenisProdukSet = new Set(product.map((item) => item.jenis_product));
    const jumlahProduk = [...jenisProdukSet].map((jenis) => {
        const jumlah = product.reduce(
            (total, item) => (item.jenis_product === jenis ? total + item.jumlah_produk : total),
            0
        );
        return jumlah;
    });
    const transaksi = product.length;

    const data = {
        labels: [...jenisProdukSet],
        datasets: [
            {
                label: `Total ${transaksi} transaksi`,
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
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className='topchart-container'>
            <p className='label-dashboard'>Top Variant Product</p>
            <Pie data={data} className='pie' />
            <div className="data-count">
                {Array.from(jenisProdukSet).map((jenis, index) => (
                    <p key={index}>
                        {jenis}: {jumlahProduk[index]} Barang
                    </p>
                ))}
            </div>
        </div>
    );

}
