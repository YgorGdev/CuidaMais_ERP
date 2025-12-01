import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Checkbox,
  TextField,
  MenuItem,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import { Print, Email, CheckCircle, Warning } from '@mui/icons-material';

// --- DADOS MOCKADOS (Para simular o banco de dados) ---
const residentesMock = [
  { id: 1, nome: 'Maria da Silva', quarto: '101', valorBase: 4500 },
  { id: 2, nome: 'João dos Santos', quarto: '102', valorBase: 3800 },
  { id: 3, nome: 'Ana Oliveira', quarto: '103', valorBase: 5000 },
];

const boletosMock = [
  { id: 101, residente: 'Maria da Silva', vencimento: '10/11/2023', valor: 4500, status: 'PAGO' },
  { id: 102, residente: 'João dos Santos', vencimento: '10/11/2023', valor: 3800, status: 'PENDENTE' },
  { id: 103, residente: 'Ana Oliveira', vencimento: '10/11/2023', valor: 5000, status: 'ATRASADO' },
];

// =========================================================
// TELA 1: GERAÇÃO DE MENSALIDADE
// =========================================================
export const GeracaoMensalidade: React.FC = () => {
  const [mes, setMes] = useState('11');
  const [ano, setAno] = useState('2023');

  return (
    <Box>
      <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
        Geração de Mensalidades em Lote
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Selecione os residentes para gerar o financeiro do mês de competência.
      </Typography>

      {/* Filtros */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          {/* CORREÇÃO: Grid size */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField select label="Mês" fullWidth value={mes} onChange={e => setMes(e.target.value)}>
              <MenuItem value="10">Outubro</MenuItem>
              <MenuItem value="11">Novembro</MenuItem>
              <MenuItem value="12">Dezembro</MenuItem>
            </TextField>
          </Grid>
          
          {/* CORREÇÃO: Grid size */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField select label="Ano" fullWidth value={ano} onChange={e => setAno(e.target.value)}>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
            </TextField>
          </Grid>

          {/* CORREÇÃO: Grid size */}
          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="flex-end">
            <Button variant="contained" size="large" startIcon={<CheckCircle />}>
              Gerar Faturamento
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabela de Residentes */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell padding="checkbox"><Checkbox /></TableCell>
              <TableCell>Residente</TableCell>
              <TableCell>Quarto</TableCell>
              <TableCell>Valor Base (R$)</TableCell>
              <TableCell>Status Contrato</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {residentesMock.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell padding="checkbox"><Checkbox defaultChecked /></TableCell>
                {/* CORREÇÃO: fontWeight deve ser via sx */}
                <TableCell sx={{ fontWeight: 'bold' }}>{row.nome}</TableCell>
                <TableCell>{row.quarto}</TableCell>
                <TableCell>{row.valorBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                <TableCell><Chip label="Ativo" color="success" size="small" variant="outlined" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// =========================================================
// TELA 2: EMISSÃO DE BOLETOS
// =========================================================
export const EmissaoBoletos: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
        Emissão e Controle de Boletos
      </Typography>
      
      <Paper sx={{ p: 3, mt: 2 }}>
        <Grid container spacing={2} sx={{ mb: 3 }} alignItems="center">
           {/* CORREÇÃO: Grid size */}
           <Grid size={{ xs: 12, md: 8 }}>
             <Typography variant="h6">Faturas Geradas (Novembro/2023)</Typography>
           </Grid>
           
           {/* CORREÇÃO: Grid size */}
           <Grid size={{ xs: 12, md: 4 }} display="flex" gap={1} justifyContent="flex-end">
              <Button variant="outlined" startIcon={<Email />}>Enviar por E-mail</Button>
              <Button variant="contained" startIcon={<Print />}>Imprimir Lote</Button>
           </Grid>
        </Grid>
        <Divider sx={{ mb: 2 }} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Sacado (Residente)</TableCell>
                <TableCell>Vencimento</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boletosMock.map((boleto) => (
                <TableRow key={boleto.id}>
                  <TableCell>#{boleto.id}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{boleto.residente}</TableCell>
                  <TableCell>{boleto.vencimento}</TableCell>
                  <TableCell>{boleto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                  <TableCell align="center">
                    <Chip 
                      label={boleto.status} 
                      color={boleto.status === 'PAGO' ? 'success' : boleto.status === 'ATRASADO' ? 'error' : 'warning'} 
                      size="small" 
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton color="primary" title="Imprimir"><Print /></IconButton>
                    <IconButton color="default" title="Detalhes"><Warning /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};