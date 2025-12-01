import React from 'react';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const cfopMock = [
  { codigo: '1.102', descricao: 'Compra para comercialização', tipo: 'Entrada' },
  { codigo: '1.556', descricao: 'Compra de material para uso ou consumo', tipo: 'Entrada' },
  { codigo: '5.933', descricao: 'Prestação de serviço tributado pelo ISSQN', tipo: 'Saída' },
];

export const NaturezasOperacao: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>Naturezas de Operação (CFOP)</Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
         <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
               <TextField fullWidth label="Buscar CFOP ou Descrição" size="small" />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
               <Button variant="outlined" fullWidth startIcon={<SearchIcon />}>Buscar</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
               <Button variant="contained" startIcon={<AddIcon />}>Novo CFOP</Button>
            </Grid>
         </Grid>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>CFOP</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cfopMock.map((row) => (
              <TableRow key={row.codigo} hover>
                <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>{row.codigo}</TableCell>
                <TableCell>{row.descricao}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell align="right">
                   <Button size="small">Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};