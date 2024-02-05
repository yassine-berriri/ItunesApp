import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

export default function CustomTable({ items, onRowClick, isClickable }) {
    const sendDataToParent = (row) => {
        // Call the callback function and pass the data
        if (isClickable){
            onRowClick(row);
        }
        else {
            console.log('no callback function');
        }
     
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Logo</TableCell>
                        <TableCell align="center">ArtistName</TableCell>
                        <TableCell align="center">TrackName</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row, index) => (
                        <TableRow
                            onClick={() => sendDataToParent(row)}
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Avatar alt={`Avatar n°`} src={row.artworkUrl30} />
                            </TableCell>
                            <TableCell align="center">{row.trackName}</TableCell>
                            <TableCell align="center">{row.artistName}</TableCell>
                           
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

  