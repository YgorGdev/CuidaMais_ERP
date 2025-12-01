// src/pages/ClienteLista.tsx
import { useState } from 'react';
import { 
  Box, Paper, Typography, Button, TextField, InputAdornment, Table, 
  TableBody, TableCell, TableContainer, TableHead, TableRow
  // IconButton foi removido daqui
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Add, Edit, Visibility, Delete, Search, FilterList } from '@mui/icons-material';

const rows = [
  { id: 1, nome: 'MARIA DA SILVA', cpf: '123.456.789-00', tipo: 'RESPONSÁVEL', telefone: '(62) 99999-8888', status: 'ATIVO' },
  { id: 2, nome: 'JOSÉ SOUZA', cpf: '987.654.321-11', tipo: 'PRÓPRIO', telefone: '(62) 98888-7777', status: 'ATIVO' },
  { id: 3, nome: 'ANA PEREIRA', cpf: '111.222.333-44', tipo: 'FAMILIAR', telefone: '(62) 97777-6666', status: 'INATIVO' },
];

export function ClienteLista() {
  const [busca, setBusca] = useState('');

  const linhasFiltradas = rows.filter((row) => 
    row.nome.toLowerCase().includes(busca.toLowerCase()) ||
    row.cpf.includes(busca)
  );

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Clientes (Responsáveis)</Typography>
      
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Button variant="contained" startIcon={<Add />} component={Link} to="/financeiro/clientes/novo" sx={{ fontWeight: 'bold' }}>Incluir</Button>
          <Button variant="outlined" startIcon={<Edit />} component={Link} to="/financeiro/clientes/novo">Alterar</Button>
          <Button variant="outlined" startIcon={<Visibility />} component={Link} to="/financeiro/clientes/novo">Visualizar</Button>
          <Button variant="outlined" color="error" startIcon={<Delete />}>Excluir</Button>
        </Box>

        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
          <TextField 
            size="small" 
            placeholder="Pesquisar por Nome ou CPF..." 
            fullWidth 
            value={busca} 
            onChange={e => setBusca(e.target.value)} 
            InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} 
          />
          <Button variant="contained" color="secondary" startIcon={<FilterList />}>Filtrar</Button>
        </Box>

        <TableContainer sx={{ border: 1, borderColor: 'divider' }}>
          <Table size="small">
            <TableHead sx={{ bgcolor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>CPF</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Tipo</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Telefone</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {linhasFiltradas.map((row) => (
                <TableRow key={row.id} hover sx={{ cursor: 'pointer' }} component={Link} to="/financeiro/clientes/novo" style={{ textDecoration: 'none' }}>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.cpf}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.telefone}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}