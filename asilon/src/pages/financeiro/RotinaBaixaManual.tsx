// src/pages/RotinaBaixaManual.tsx
import { useState } from 'react';
import { 
  Box, Paper, Typography, Button, TextField, Divider, Table, 
  TableBody, TableCell, TableContainer, TableHead, TableRow, FormControl, InputLabel, Select, MenuItem,
  InputAdornment 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Save, Close, CheckBox, Search } from '@mui/icons-material';

// Dados Mock de Títulos Abertos
const titulosAbertos = [
  { id: 1, cliente: 'MARIA DA SILVA', vencimento: '2025-12-10', valor: 3500.00, titulo: '001/25' },
  { id: 2, cliente: 'JOSÉ SOUZA', vencimento: '2025-11-20', valor: 50.00, titulo: '002/25' },
  { id: 3, cliente: 'ANA PEREIRA', vencimento: '2025-12-10', valor: 3500.00, titulo: '003/25' },
];

export function RotinaBaixaManual() {
  const [selecionado, setSelecionado] = useState(titulosAbertos[0]);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Baixa Manual de Recebimentos</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>Título: {selecionado.titulo} / Cliente: {selecionado.cliente}</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>
            Confirmar Baixa
          </Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/contas-a-receber/lancamentos" sx={{ fontWeight: 'bold' }}>
            Voltar
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* --- COLUNA ESQUERDA: DETALHES DO PAGAMENTO --- */}
        
        {/* @ts-ignore */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Detalhes da Baixa</Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12}><TextField fullWidth label="Valor Original" size="small" disabled defaultValue={selecionado.valor.toFixed(2)} /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12}><TextField fullWidth label="Desconto / Juros" size="small" defaultValue="0.00" /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12}><TextField fullWidth label="Valor Recebido" size="small" required defaultValue={selecionado.valor.toFixed(2)} /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12}>
                <FormControl fullWidth size="small" required>
                  <InputLabel>Conta Bancária (Destino)</InputLabel>
                  <Select label="Conta Bancária" defaultValue="001"><MenuItem value="001">001 - Banco do Brasil</MenuItem><MenuItem value="002">341 - Itaú</MenuItem></Select>
                </FormControl>
              </Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Data do Crédito" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Nº Documento / Cheque" size="small" /></Grid>

            </Grid>
          </Paper>
        </Grid>

        {/* --- COLUNA DIREITA: TÍTULOS EM ABERTO PARA SELEÇÃO --- */}
        
        {/* @ts-ignore */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Títulos em Aberto</Typography>
            <Divider sx={{ mb: 2 }} />
            
            <TextField size="small" placeholder="Pesquisar..." fullWidth InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} sx={{ mb: 2 }}/>

            <TableContainer sx={{ border: 1, borderColor: 'divider' }}>
              <Table size="small">
                <TableHead sx={{ bgcolor: 'action.hover' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Título</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Cliente</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Vencimento</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Valor (R$)</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {titulosAbertos.map((titulo) => (
                    <TableRow key={titulo.id} hover onClick={() => setSelecionado(titulo)} selected={selecionado.id === titulo.id} sx={{ cursor: 'pointer' }}>
                      <TableCell>{titulo.titulo}</TableCell>
                      <TableCell>{titulo.cliente}</TableCell>
                      <TableCell>{titulo.vencimento}</TableCell>
                      <TableCell align="right">{titulo.valor.toFixed(2).replace('.', ',')}</TableCell>
                      <TableCell><Button size="small" startIcon={<CheckBox />} disabled={selecionado.id === titulo.id}>Dar Baixa</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}