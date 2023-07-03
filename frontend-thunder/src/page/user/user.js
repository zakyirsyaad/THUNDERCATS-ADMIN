import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import '../transaksi/transaksi.css';

export default function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/user');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        document.title = "User | THUNDERCATS"
    })

    return (
        <div className='table-container'>
            <h1>Daftar User</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID User</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Nama</TableCell>
                            <TableCell>No. Telepon</TableCell>
                            <TableCell>Kodepos</TableCell>
                            <TableCell>Alamat</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((user) => (
                            <TableRow key={user.username}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.nama}</TableCell>
                                <TableCell>{user.no_telp}</TableCell>
                                <TableCell>{user.kodepos}</TableCell>
                                <TableCell>{user.alamat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
