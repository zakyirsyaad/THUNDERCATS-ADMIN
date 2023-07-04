import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './pesan.css'

function Pesan() {
    const [pesan, setPesan] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/pesan') // Ganti URL dengan URL yang sesuai
            .then(response => response.json())
            .then(data => setPesan(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='table-pesan'>
            <p className='label-dashboard'>Pesan Pembeli</p>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Pesan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pesan.map(pesan => (
                            <TableRow key={pesan.nama}>
                                <TableCell>{pesan.nama}</TableCell>
                                <TableCell>{pesan.email}</TableCell>
                                <TableCell>{pesan.pesan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Pesan;
