import React from 'react';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const tesMock = [
  { codigo: '001', desc: 'Compra de Material de Consumo', geraFin: 'Sim', atualizaEstoque: 'Sim', impostos: ['ICMS', 'PIS', 'COFINS'] },
  { codigo: '002', desc: 'Entrada de Medicamentos', geraFin: 'Sim', atualizaEstoque: 'Sim', impostos: ['Isento'] },
  { codigo: '501', desc: 'Prestação de Serviços (Mensalidade)', geraFin: 'Sim', atualizaEstoque: 'Não', impostos: ['ISS'] },
];

export const TesLista: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold">TES - Tipos de Entrada e Saída</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>Nova TES</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Gera Financeiro?</TableCell>
              <TableCell>Movimenta Estoque?</TableCell>
              <TableCell>Tributação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tesMock.map((row) => (
              <TableRow key={row.codigo} hover>
                {/* CORREÇÃO AQUI: sx={{ fontWeight: 'bold' }} */}
                <TableCell sx={{ fontWeight: 'bold' }}>{row.codigo}</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell>
                    <Chip label={row.geraFin} color={row.geraFin === 'Sim' ? 'success' : 'default'} size="small" variant="outlined" />
                </TableCell>
                <TableCell>{row.atualizaEstoque}</TableCell>
                <TableCell>{row.impostos.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};