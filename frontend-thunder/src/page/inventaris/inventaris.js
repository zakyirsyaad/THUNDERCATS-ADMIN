import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../transaksi/transaksi.css'

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/product?') // Ganti URL dengan URL yang sesuai
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        document.title = "Inventaris | THUNDERCATS"
    })

    return (
        <div className='table-container'>
            <h1>Daftar Produk</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Product</TableCell>
                            <TableCell>Nama Product</TableCell>
                            <TableCell>Jenis Product</TableCell>
                            <TableCell>Stok</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow key={product.id_product}>
                                <TableCell>{product.id_product}</TableCell>
                                <TableCell>{product.nama_product}</TableCell>
                                <TableCell>{product.jenis_product}</TableCell>
                                <TableCell>{product.stok !== null ? product.stok : 'Tidak tersedia'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ProductList;
