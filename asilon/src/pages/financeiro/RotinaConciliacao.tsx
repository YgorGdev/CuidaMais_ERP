// src/pages/RotinaConciliacao.tsx
import { Box, Paper, Typography, Button, TextField, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'; // <-- CORRIGIDO: Apenas componentes usados
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Close, CloudUpload, Link as LinkIcon } from '@mui/icons-material'; // Ícones
// O restante dos imports de ícones e componentes não estavam sendo usados e foram removidos

// Mock Data
const extratoBancario = [
    { id: 1, data: '2025-11-15', descricao: 'DOC RECEBIDO CLIENTE 1', valor: 3500.00, status: 'NOVO' },
    { id: 2, data: '2025-11-15', descricao: 'TARIFA BANCÁRIA', valor: -15.00, status: 'NOVO' },
    { id: 3, data: '2025-11-14', descricao: 'TED CLIENTE 2', valor: 300.00, status: 'CONCILIADO' },
];
const lancamentosSistema = [
    { id: 1, vencimento: '2025-11-15', cliente: 'MARIA DA SILVA', valor: 3500.00, titulo: '001/25', status: 'ABERTO' },
    { id: 2, vencimento: '2025-11-14', cliente: 'JOSÉ SOUZA', valor: 300.00, titulo: '002/25', status: 'CONCILIADO' },
];

export function RotinaConciliacao() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Conciliação Bancária</Typography>
        <Box>
          <Button variant="contained" startIcon={<CloudUpload />} sx={{ mr: 1, fontWeight: 'bold' }}>Importar Extrato (OFX/TXT)</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/contas-a-receber/lancamentos" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}><TextField fullWidth label="Conta Bancária" size="small" defaultValue="001 - Banco do Brasil" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Data Inicial" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Data Final" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={2}><Button fullWidth variant="contained" sx={{ height: '40px' }}>Buscar</Button></Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {/* --- COLUNA ESQUERDA: EXTRATO BANCÁRIO --- */}
        {/* @ts-ignore */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Extrato Bancário (A Conciliar)</Typography>
          <TableContainer component={Paper} sx={{ border: 1, borderColor: 'divider' }}>
            <Table size="small">
              <TableHead sx={{ bgcolor: 'action.hover' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Data</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="right">Valor</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {extratoBancario.map((e) => (
                  <TableRow key={e.id} sx={{ cursor: 'pointer', bgcolor: e.status === 'CONCILIADO' ? 'success.dark' : 'transparent' }}>
                    <TableCell>{e.data}</TableCell>
                    <TableCell>{e.descricao}</TableCell>
                    <TableCell align="right" sx={{ color: e.valor > 0 ? 'success.light' : 'error.light' }}>{e.valor.toFixed(2).replace('.', ',')}</TableCell>
                    <TableCell><Button size="small" startIcon={<LinkIcon />} disabled={e.status === 'CONCILIADO'}>Conciliar</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* --- COLUNA DIREITA: LANÇAMENTOS NO SISTEMA --- */}
        {/* @ts-ignore */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Lançamentos no Sistema (Em Aberto)</Typography>
          <TableContainer component={Paper} sx={{ border: 1, borderColor: 'divider' }}>
            <Table size="small">
              <TableHead sx={{ bgcolor: 'action.hover' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Cliente</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Vencimento</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="right">Valor</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lancamentosSistema.map((l) => (
                  <TableRow key={l.id} sx={{ cursor: 'pointer', bgcolor: l.status === 'CONCILIADO' ? 'success.dark' : 'transparent' }}>
                    <TableCell>{l.cliente}</TableCell>
                    <TableCell>{l.vencimento}</TableCell>
                    <TableCell align="right">{l.valor.toFixed(2).replace('.', ',')}</TableCell>
                    <TableCell>{l.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}