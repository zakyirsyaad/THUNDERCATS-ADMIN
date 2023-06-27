import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../transaksi/transaksi.css'

function Transaksi() {
    const [transaksi, setTransaksi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/transaksi') // Ganti URL dengan URL yang sesuai
            .then(response => response.json())
            .then(data => setTransaksi(data.data))
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
                            <TableCell>ID Transaksi</TableCell>
                            <TableCell>Tanggal Transaksi</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transaksi.map(transaksi => (
                            <TableRow key={transaksi.id_transaksi}>
                                <TableCell>{transaksi.id_transaksi}</TableCell>
                                <TableCell>{transaksi.tgl_transaksi ? transaksi.tgl_transaksi : 'Data tidak tersedia'}</TableCell>
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
