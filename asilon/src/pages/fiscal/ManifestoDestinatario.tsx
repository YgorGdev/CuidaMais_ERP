import React from 'react';
import { Box, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SyncIcon from '@mui/icons-material/Sync';

const manifestoMock = [
  { chave: '3525 1100 0000 0000 1234 ...', emitente: 'Distribuidora Farmacêutica A', valor: 'R$ 4.500,00', emissao: '18/11/2025', sit: 'Confirmada' },
  { chave: '3525 1199 9999 9999 5678 ...', emitente: 'Supermercado Atacadista', valor: 'R$ 890,00', emissao: '19/11/2025', sit: 'Sem Manifesto' },
  { chave: '3525 1188 8888 8888 9012 ...', emitente: 'Fornecedor Desconhecido Ltda', valor: 'R$ 12.000,00', emissao: '19/11/2025', sit: 'Desconhecida' },
];

export const ManifestoDestinatario: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <MoveToInboxIcon fontSize="large" /> Manifesto (MD-e)
        </Typography>
        <Button variant="contained" startIcon={<SyncIcon />}>Buscar na SEFAZ</Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3, bgcolor: '#e3f2fd' }}>
          <Typography variant="body2">
              Aqui aparecem todas as notas fiscais emitidas contra o CNPJ do Asilo. É necessário confirmar a operação para realizar a entrada (download do XML).
          </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Emitente</TableCell>
                  <TableCell>Chave de Acesso</TableCell>
                  <TableCell>Emissão</TableCell>
                  <TableCell>Valor Total</TableCell>
                  <TableCell>Situação</TableCell>
                  <TableCell align="center">Manifestar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {manifestoMock.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ fontWeight: 'bold' }}>{row.emitente}</TableCell>
                    <TableCell sx={{ fontSize: '0.85rem', fontFamily: 'monospace' }}>{row.chave}</TableCell>
                    <TableCell>{row.emissao}</TableCell>
                    <TableCell>{row.valor}</TableCell>
                    <TableCell>
                        <Chip 
                            label={row.sit} 
                            color={row.sit === 'Confirmada' ? 'success' : row.sit === 'Desconhecida' ? 'error' : 'default'} 
                            size="small" 
                        />
                    </TableCell>
                    <TableCell align="center">
                        <Button size="small" startIcon={<CheckCircleIcon />} color="success" sx={{ mr: 1 }}>Confirmar</Button>
                        <Button size="small" startIcon={<CancelIcon />} color="error">Desconhecer</Button>
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