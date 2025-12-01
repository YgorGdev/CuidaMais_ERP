import React from 'react';
import { 
  Box, Paper, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Chip, Button 
} from '@mui/material'; // <--- Removi o Divider daqui
import Grid from '@mui/material/Grid';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DownloadIcon from '@mui/icons-material/Download';

const retencoesMock = [
  { id: 1, fornecedor: 'Dr. Pedro (Médico PJ)', nota: '0045', emissao: '10/11/2025', tipo: 'IRRF (1.5%)', base: 'R$ 5.000,00', retido: 'R$ 75,00', status: 'Pendente' },
  { id: 2, fornecedor: 'Limpeza Total Ltda', nota: '1022', emissao: '12/11/2025', tipo: 'INSS (11%)', base: 'R$ 2.000,00', retido: 'R$ 220,00', status: 'Recolhido' },
  { id: 3, fornecedor: 'Segurança Forte', nota: '0099', emissao: '14/11/2025', tipo: 'PCC (4.65%)', base: 'R$ 3.500,00', retido: 'R$ 162,75', status: 'Pendente' },
];

export const Retencoes: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PriceCheckIcon fontSize="large" /> Controle de Retenções
      </Typography>
      
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Gestão de impostos retidos na fonte de terceiros (Serviços Tomados).
      </Typography>

      <Grid container spacing={3}>
        {/* Cards de Totais */}
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 2, borderLeft: '4px solid #d32f2f' }}>
              <Typography variant="caption">Total IRRF a Recolher</Typography>
              <Typography variant="h6" fontWeight="bold">R$ 450,00</Typography>
           </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 2, borderLeft: '4px solid #ed6c02' }}>
              <Typography variant="caption">Total CSRF (PCC) a Recolher</Typography>
              <Typography variant="h6" fontWeight="bold">R$ 325,50</Typography>
           </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 2, borderLeft: '4px solid #1976d2' }}>
              <Typography variant="caption">Total INSS a Recolher</Typography>
              <Typography variant="h6" fontWeight="bold">R$ 1.200,00</Typography>
           </Paper>
        </Grid>

        {/* Tabela */}
        <Grid size={{ xs: 12 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Emissão</TableCell>
                  <TableCell>Fornecedor</TableCell>
                  <TableCell>Nota</TableCell>
                  <TableCell>Imposto</TableCell>
                  <TableCell>Base Calc.</TableCell>
                  <TableCell>Valor Retido</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {retencoesMock.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.emissao}</TableCell>
                    <TableCell>{row.fornecedor}</TableCell>
                    <TableCell>{row.nota}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#d32f2f' }}>{row.tipo}</TableCell>
                    <TableCell>{row.base}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>{row.retido}</TableCell>
                    <TableCell>
                       <Chip label={row.status} color={row.status === 'Recolhido' ? 'success' : 'warning'} size="small" />
                    </TableCell>
                    <TableCell align="right">
                       <Button size="small" startIcon={<DownloadIcon />}>DARF</Button>
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