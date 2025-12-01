import { useState } from 'react';
import { Box, Paper, Typography, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add, Edit, Delete, Search } from '@mui/icons-material';

const rows = [
  { id: 1, codigo: '1001', descricao: 'ADMINISTRAÇÃO', classe: 'SINTÉTICO' },
  { id: 2, codigo: '1002', descricao: 'ENFERMAGEM', classe: 'ANALÍTICO' },
  { id: 3, codigo: '1003', descricao: 'COZINHA / NUTRIÇÃO', classe: 'ANALÍTICO' },
];

export function CentroCustoLista() {
  const [busca, setBusca] = useState('');
  const linhasFiltradas = rows.filter(r => r.descricao.toLowerCase().includes(busca.toLowerCase()));

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Centros de Custo</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Button variant="contained" startIcon={<Add />} component={Link} to="/financeiro/centro-custo/novo" sx={{ fontWeight: 'bold' }}>Incluir</Button>
          <Button variant="outlined" startIcon={<Edit />} component={Link} to="/financeiro/centro-custo/novo">Alterar</Button>
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
                <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Classe</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {linhasFiltradas.map((row) => (
                <TableRow key={row.id} hover sx={{ cursor: 'pointer' }} component={Link} to="/financeiro/centro-custo/novo" style={{ textDecoration: 'none' }}>
                  <TableCell>{row.codigo}</TableCell>
                  <TableCell>{row.descricao}</TableCell>
                  <TableCell>{row.classe}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}