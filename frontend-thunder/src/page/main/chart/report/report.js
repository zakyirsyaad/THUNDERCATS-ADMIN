import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Report() {
    const [products, setProducts] = useState(null);
    const [user, setUser] = useState(null);
    const [transaksi, setTransaksi] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsResponse = await axios.get('http://localhost:3001/product');
                setProducts(productsResponse.data);

                const userResponse = await axios.get('http://localhost:3001/user');
                setUser(userResponse.data);

                const transaksiResponse = await axios.get('http://localhost:3001/transaksi');
                setTransaksi(transaksiResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getTotalQuantity = () => {
        let total = 0;

        // Menghitung jumlah produk jika transaksi sudah tersedia
        if (transaksi) {
            transaksi.forEach((item) => {
                total += item.jumlah_produk;
            });
        }

        return total;
    };


    return (
        <div className="report-container">
            <div className='report-box report-color1'>
                <span className="material-symbols-outlined icon-report">
                    receipt_long
                </span>
                <div>
                    <h3>Jumlah Pembeli</h3>
                    {user ? <p>Total: {user.length} Pembeli</p> : <p>Data Not Found</p>}
                </div>
            </div>

            <div className='report-box report-color2'>
                <span className="material-symbols-outlined icon-report">
                    location_away
                </span>
                <div>
                    <h3>Jumlah Transaksi</h3>
                    {transaksi ? <p>Total: {transaksi.length} Transaksi</p> : <p>Data Not Found</p>}
                </div>
            </div>

            <div className='report-box report-color3'>
                <span className="material-symbols-outlined icon-report">
                    inventory_2
                </span>
                <div>
                    <h3>Jumlah Produk Terjual</h3>
                    {products ? <p>Total:  {getTotalQuantity()} barang</p> : <p>Data Not Found</p>}
                </div>
            </div>
        </div>
    );
}
