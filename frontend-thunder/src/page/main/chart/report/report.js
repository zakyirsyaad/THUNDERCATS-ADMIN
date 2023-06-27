import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Report() {
    const [products, setProducts] = useState(null);
    const [user, setUser] = useState(null);
    const [transaksi, setTransaksi] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await axios.get('http://localhost:3001/transaksi'); //produk terjual
                setProducts(products.data.data);

                const user = await axios.get('http://localhost:3001/user'); //jumlah pengguna
                setUser(user.data.data);

                const transaksi = await axios.get('http://localhost:3001/transaksi'); //Transaki bulan ini
                setTransaksi(transaksi.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const calculateTotalStock = (products) => {
        if (!products || products.length === 0) {
            return 0; // Mengembalikan 0 jika tidak ada produk atau array produk kosong
        }

        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i].stok;
        }

        return total;
    };




    const totalStock = calculateTotalStock(products);



    return (
        <div className="report-container">
            <div className='report-box report-color1'>
                <span class="material-symbols-outlined icon-report">
                    receipt_long
                </span>
                <div>
                    <h3>Jumlah Pengguna</h3>
                    {user ? <p>Total: {user.length}</p> : <p>Data Not Found</p>}
                </div>
            </div>

            <div className='report-box report-color2'>
                <span class="material-symbols-outlined icon-report">
                    location_away
                </span>
                <div>
                    <h3>Transaksi Bulan Ini</h3>
                    {transaksi ? <p>Total: {transaksi.length}</p> : <p>Data Not Found</p>}
                </div>
            </div>

            <div className='report-box report-color3'>
                <span class="material-symbols-outlined icon-report">
                    inventory_2
                </span>
                <div>
                    <h3>Produk Terjual</h3>
                    {totalStock ? <p>{totalStock}</p> : <p>Data Not Found</p>}
                </div>
            </div>
        </div>
    );
}
