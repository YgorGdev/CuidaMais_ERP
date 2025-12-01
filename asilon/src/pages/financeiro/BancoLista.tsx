// src/pages/BancoLista.tsx
import { useState } from 'react';
import { Box, Paper, Typography, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add, Edit, Visibility, Delete, Search, FilterList } from '@mui/icons-material';

const rows = [
  { id: 1, codigo: '001', nome: 'BANCO DO BRASIL', agencia: '1234-5', conta: '99999-9' },
  { id: 2, codigo: '341', nome: 'ITAU', agencia: '5678', conta: '88888-8' },
  { id: 3, codigo: '000', nome: 'CAIXA PEQUENO (INTERNO)', agencia: '-', conta: '-' },
];

export function BancoLista() {
  const [busca, setBusca] = useState('');
  
  const linhasFiltradas = rows.filter(r => 
    r.nome.toLowerCase().includes(busca.toLowerCase()) || 
    r.codigo.includes(busca)
  );

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Bancos e Caixas</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Button variant="contained" startIcon={<Add />} component={Link} to="/financeiro/bancos/novo" sx={{ fontWeight: 'bold' }}>Incluir</Button>
          <Button variant="outlined" startIcon={<Edit />} component={Link} to="/financeiro/bancos/novo">Alterar</Button>
          <Button variant="outlined" startIcon={<Visibility />} component={Link} to="/financeiro/bancos/novo">Visualizar</Button>
          <Button variant="outlined" color="error" startIcon={<Delete />}>Excluir</Button>
        </Box>
        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
          <TextField size="small" placeholder="Pesquisar..." fullWidth value={busca} onChange={e => setBusca(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
          <Button variant="contained" color="secondary" startIcon={<FilterList />}>Filtrar</Button>
        </Box>
        <TableContainer sx={{ border: 1, borderColor: 'divider' }}>
          <Table size="small">
            <TableHead sx={{ bgcolor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Cód. Bacen</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Agência</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Conta</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {linhasFiltradas.map((row) => (
                <TableRow key={row.id} hover sx={{ cursor: 'pointer' }} component={Link} to="/financeiro/bancos/novo" style={{ textDecoration: 'none' }}>
                  <TableCell>{row.codigo}</TableCell>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.agencia}</TableCell>
                  <TableCell>{row.conta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}