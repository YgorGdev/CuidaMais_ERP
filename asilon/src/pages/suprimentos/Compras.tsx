import React from 'react';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';

const pedidosMock = [
  { id: 101, data: '17/11/2025', fornecedor: 'Farmácia Central', total: 'R$ 1.200,00', status: 'Pendente', itens: 'Medicamentos Diversos' },
  { id: 102, data: '15/11/2025', fornecedor: 'Higiene Plus', total: 'R$ 3.500,00', status: 'Aprovado', itens: 'Fraldas e Luvas' },
  { id: 103, data: '10/11/2025', fornecedor: 'Supermercado Atacadista', total: 'R$ 890,00', status: 'Recebido', itens: 'Alimentos Perecíveis' },
];

export const ComprasPage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ShoppingCartIcon fontSize="large" /> Pedidos de Compra
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>Novo Pedido</Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
           <TableContainer component={Paper}>
             <Table>
               <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                 <TableRow>
                   <TableCell>Nº Pedido</TableCell>
                   <TableCell>Data</TableCell>
                   <TableCell>Fornecedor</TableCell>
                   <TableCell>Resumo</TableCell>
                   <TableCell>Valor</TableCell>
                   <TableCell>Status</TableCell>
                   <TableCell align="right">Ações</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {pedidosMock.map((row) => (
                   <TableRow key={row.id} hover>
                     <TableCell sx={{ fontWeight: 'bold' }}>#{row.id}</TableCell>
                     <TableCell>{row.data}</TableCell>
                     <TableCell>{row.fornecedor}</TableCell>
                     <TableCell>{row.itens}</TableCell>
                     <TableCell>{row.total}</TableCell>
                     <TableCell>
                        <Chip 
                          label={row.status} 
                          color={row.status === 'Recebido' ? 'success' : row.status === 'Pendente' ? 'warning' : 'primary'} 
                          size="small" 
                        />
                     </TableCell>
                     <TableCell align="right">
                        <Button size="small">Ver</Button>
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};