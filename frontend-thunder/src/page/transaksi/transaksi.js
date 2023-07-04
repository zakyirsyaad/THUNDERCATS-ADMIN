import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../transaksi/transaksi.css'

function Transaksi() {
    const [transaksi, setTransaksi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/transaksi') // Ganti URL dengan URL yang sesuai
            .then(response => response.json())
            .then(data => setTransaksi(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        document.title = "Transaksi | THUNDERCATS"
    })
    return (
        <div className='table-container'>
            <h1>Daftar Transaksi</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama Product</TableCell>
                            <TableCell>jenis product</TableCell>
                            <TableCell>Jumlah Product</TableCell>
                            <TableCell>Harga</TableCell>
                            <TableCell>Total Harga</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transaksi.map(transaksi => (
                            <TableRow key={transaksi.nama_product}>
                                <TableCell>{transaksi.nama_product}</TableCell>
                                <TableCell>{transaksi.jenis_product}</TableCell>
                                <TableCell>{transaksi.jumlah_produk}</TableCell>
                                <TableCell>Rp. {transaksi.harga.toLocaleString()}</TableCell>
                                <TableCell>Rp. {transaksi.total_harga.toLocaleString()}</TableCell>
                                <TableCell>{transaksi.status !== null ? transaksi.status : 'Tidak tersedia'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Transaksi;
