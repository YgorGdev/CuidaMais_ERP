// src/pages/MoedaLista.tsx
import { useState } from 'react';
// Removi 'IconButton' da importação
import { Box, Paper, Typography, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
// Removi 'Visibility' e 'FilterList' da importação
import { Add, Edit, Delete, Search } from '@mui/icons-material';

const rows = [
  { id: 1, codigo: '01', simbolo: 'R$', descricao: 'REAL', taxa: '1.0000' },
  { id: 2, codigo: '02', simbolo: 'US$', descricao: 'DOLAR COMERCIAL', taxa: '5.1500' },
  { id: 3, codigo: '03', simbolo: 'EU', descricao: 'EURO', taxa: '5.5000' },
];

export function MoedaLista() {
  const [busca, setBusca] = useState('');
  const linhasFiltradas = rows.filter(r => r.descricao.toLowerCase().includes(busca.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Moedas</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Button variant="contained" startIcon={<Add />} component={Link} to="/financeiro/moedas/novo" sx={{ fontWeight: 'bold' }}>Incluir</Button>
          <Button variant="outlined" startIcon={<Edit />} component={Link} to="/financeiro/moedas/novo">Alterar</Button>
          <Button variant="outlined" color="error" startIcon={<Delete />}>Excluir</Button>
        </Box>
        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
          <TextField size="small" placeholder="Pesquisar..." fullWidth value={busca} onChange={e => setBusca(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
        </Box>
        <TableContainer sx={{ border: 1, borderColor: 'divider' }}>
          <Table size="small">
            <TableHead sx={{ bgcolor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Código</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Símbolo</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Taxa Padrão</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {linhasFiltradas.map((row) => (
                <TableRow key={row.id} hover sx={{ cursor: 'pointer' }} component={Link} to="/financeiro/moedas/novo" style={{ textDecoration: 'none' }}>
                  <TableCell>{row.codigo}</TableCell>
                  <TableCell>{row.simbolo}</TableCell>
                  <TableCell>{row.descricao}</TableCell>
                  <TableCell>{row.taxa}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}