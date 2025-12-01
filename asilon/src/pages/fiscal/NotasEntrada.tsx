import React from 'react';
import { Box, Paper, Typography, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const notasMock = [
  { num: '000459', serie: '1', emissao: '15/11/2025', fornecedor: 'Farmácia Vida', valor: '1.250,00', status: 'Classificada' },
  { num: '009921', serie: '1', emissao: '16/11/2025', fornecedor: 'Dist. Alimentos ABC', valor: '3.400,00', status: 'Pendente' },
];

export const NotasEntrada: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>Documento de Entrada</Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
           <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Pesquisar por Fornecedor ou Nº" size="small" />
           </Grid>
           <Grid size={{ xs: 12, md: 2 }}>
              <Button variant="outlined" fullWidth startIcon={<SearchIcon />}>Filtrar</Button>
           </Grid>
           <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" startIcon={<AddIcon />}>Incluir Documento</Button>
           </Grid>
        </Grid>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#e0e0e0' }}>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>Série</TableCell>
              <TableCell>Emissão</TableCell>
              <TableCell>Fornecedor</TableCell>
              <TableCell align="right">Valor Total</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notasMock.map((row) => (
              <TableRow key={row.num} hover>
                <TableCell>
                    <div style={{ 
                        width: 12, height: 12, borderRadius: '50%', 
                        backgroundColor: row.status === 'Classificada' ? 'green' : 'orange' 
                    }} title={row.status}></div>
                </TableCell>
                <TableCell>{row.num}</TableCell>
                <TableCell>{row.serie}</TableCell>
                <TableCell>{row.emissao}</TableCell>
                <TableCell>{row.fornecedor}</TableCell>
                <TableCell align="right">R$ {row.valor}</TableCell>
                <TableCell align="center">
                    <Button size="small">Classificar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};