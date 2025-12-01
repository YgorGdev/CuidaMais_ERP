// src/pages/fiscal/ApuracaoImpostos.tsx
import React from 'react';
import { Box, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import CalculateIcon from '@mui/icons-material/Calculate';
import DownloadIcon from '@mui/icons-material/Download';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const guiasMock = [
  { imposto: 'ISS (Próprio)', periodo: '10/2025', vencimento: '15/11/2025', valor: 'R$ 1.250,00', status: 'Pago' },
  { imposto: 'PIS/COFINS/CSLL', periodo: '10/2025', vencimento: '20/11/2025', valor: 'R$ 890,00', status: 'Aberto' },
  { imposto: 'INSS (Folha)', periodo: '10/2025', vencimento: '20/11/2025', valor: 'R$ 4.500,00', status: 'Aberto' },
];

export const ApuracaoImpostos: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CalculateIcon fontSize="large" /> Apuração de Impostos
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
           <Alert severity="info">Período de Apuração Atual: <strong>Novembro/2025</strong> (Em aberto)</Alert>
        </Grid>

        {/* Cards de Resumo */}
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 3, bgcolor: '#e3f2fd', borderLeft: '4px solid #1976d2' }}>
              <Typography variant="subtitle2" color="textSecondary">Faturamento do Período</Typography>
              <Typography variant="h5" fontWeight="bold">R$ 45.000,00</Typography>
           </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 3, bgcolor: '#fff3e0', borderLeft: '4px solid #ed6c02' }}>
              <Typography variant="subtitle2" color="textSecondary">Base de Cálculo ISS</Typography>
              <Typography variant="h5" fontWeight="bold">R$ 42.500,00</Typography>
           </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 3, bgcolor: '#ffebee', borderLeft: '4px solid #d32f2f' }}>
              <Typography variant="subtitle2" color="textSecondary">Total a Recolher (Estimado)</Typography>
              <Typography variant="h5" fontWeight="bold">R$ 2.125,00</Typography>
           </Paper>
        </Grid>

        {/* Botão de Ação */}
        <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
           <Button variant="contained" size="large" startIcon={<AttachMoneyIcon />}>Encerrar Período e Gerar Guias</Button>
        </Grid>

        {/* Tabela de Guias */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Guias de Recolhimento (DARF / DAS / DAM)</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Imposto/Contribuição</TableCell>
                  <TableCell>Período</TableCell>
                  <TableCell>Vencimento</TableCell>
                  <TableCell>Valor</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {guiasMock.map((row, idx) => (
                  <TableRow key={idx}>
                    {/* CORREÇÃO AQUI: Usando sx={{ fontWeight: 'bold' }} */}
                    <TableCell sx={{ fontWeight: 'bold' }}>{row.imposto}</TableCell>
                    <TableCell>{row.periodo}</TableCell>
                    <TableCell>{row.vencimento}</TableCell>
                    <TableCell>{row.valor}</TableCell>
                    <TableCell>
                       <Chip label={row.status} color={row.status === 'Pago' ? 'success' : 'warning'} size="small" />
                    </TableCell>
                    <TableCell align="right">
                       <Button size="small" startIcon={<DownloadIcon />}>Boleto</Button>
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