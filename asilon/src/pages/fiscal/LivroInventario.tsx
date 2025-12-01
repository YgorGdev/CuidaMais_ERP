import React from 'react';
import { Box, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PrintIcon from '@mui/icons-material/Print';

const inventarioMock = [
  { codigo: 'MAT001', desc: 'Fralda Geriátrica G', unid: 'PCT', qtd: 150, custo: '35,00', total: '5.250,00' },
  { codigo: 'MED055', desc: 'Losartana 50mg', unid: 'CX', qtd: 40, custo: '12,50', total: '500,00' },
  { codigo: 'ALI003', desc: 'Arroz Tipo 1 - 5kg', unid: 'PCT', qtd: 20, custo: '28,00', total: '560,00' },
];

export const LivroInventario: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AutoStoriesIcon fontSize="large" /> Livro Registro de Inventário (Bloco H)
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
         <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
               <TextField 
                 type="date" 
                 label="Data do Fechamento" 
                 fullWidth 
                 defaultValue="2025-12-31"
                 InputLabelProps={{ shrink: true }} 
               />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
               <Button variant="contained" startIcon={<PrintIcon />}>Gerar Relatório Legal</Button>
            </Grid>
         </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Descrição do Produto</TableCell>
                  <TableCell>Unid.</TableCell>
                  <TableCell align="right">Quantidade</TableCell>
                  <TableCell align="right">Custo Unit. (Médio)</TableCell>
                  <TableCell align="right">Valor Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventarioMock.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.codigo}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>{row.desc}</TableCell>
                    <TableCell>{row.unid}</TableCell>
                    <TableCell align="right">{row.qtd}</TableCell>
                    <TableCell align="right">R$ {row.custo}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold', bgcolor: '#f5f5f5' }}>R$ {row.total}</TableCell>
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