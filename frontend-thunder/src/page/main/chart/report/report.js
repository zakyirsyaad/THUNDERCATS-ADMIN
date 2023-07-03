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


    return (
        <div className="report-container">
            <div className='report-box report-color1'>
                <span className="material-symbols-outlined icon-report">
                    receipt_long
                </span>
                <div>
                    <h3>Jumlah Pembeli</h3>
                    {user ? <p>Total: {user.length}</p> : <p>Data Not Found</p>}
                </div>
            </div>

            <div className='report-box report-color2'>
                <span className="material-symbols-outlined icon-report">
                    location_away
                </span>
                <div>
                    <h3>Transaksi Bulan Ini</h3>
                    {transaksi ? <p>Total: {transaksi.length}</p> : <p>Data Not Found</p>}
                </div>
            </div>

            <div className='report-box report-color3'>
                <span className="material-symbols-outlined icon-report">
                    inventory_2
                </span>
                <div>
                    <h3>Produk Terjual</h3>
                    {products ? <p>Total: {products.length}</p> : <p>Data Not Found</p>}
                </div>
            </div>
        </div>
    );
}
