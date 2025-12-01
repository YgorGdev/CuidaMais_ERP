import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  TextField, 
  MenuItem, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Card, 
  CardContent, 
  Divider,
  Chip
} from '@mui/material';
import { 
  AttachMoney, 
  CompareArrows, 
  AddCircleOutline, 
  RemoveCircleOutline, 
  AccountBalance 
} from '@mui/icons-material';

// =========================================================
// TELA 1: MOVIMENTO DE CAIXINHA (Pequenas Despesas)
// =========================================================
export const MovimentoCaixinha: React.FC = () => {
  // Dados falsos para exemplo
  const [transacoes] = useState([
    { id: 1, data: '18/11/2025', desc: 'Compra de Pão e Leite', tipo: 'SAIDA', valor: 45.50 },
    { id: 2, data: '18/11/2025', desc: 'Reposição de Caixa (Saque)', tipo: 'ENTRADA', valor: 500.00 },
    { id: 3, data: '17/11/2025', desc: 'Uber para Exame Sr. João', tipo: 'SAIDA', valor: 25.90 },
  ]);

  return (
    <Box>
      <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
        Livro Caixa (Pequenas Despesas)
      </Typography>

      {/* CARD DE SALDO */}
      <Grid container spacing={2} mb={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">Saldo em Mãos</Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                R$ 428,60
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* FORMULÁRIO DE LANÇAMENTO RÁPIDO */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Novo Lançamento</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <TextField label="Descrição (Ex: Farmácia, Padaria)" fullWidth size="small" />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField label="Valor (R$)" fullWidth size="small" />
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <TextField select label="Tipo" fullWidth size="small" defaultValue="SAIDA">
              <MenuItem value="ENTRADA">Entrada (+)</MenuItem>
              <MenuItem value="SAIDA">Saída (-)</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Button variant="contained" fullWidth color="success" startIcon={<AttachMoney />}>
              Lançar
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* TABELA DE MOVIMENTAÇÃO */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transacoes.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.data}</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="center">
                  {row.tipo === 'ENTRADA' ? (
                    <Chip icon={<AddCircleOutline />} label="Entrada" color="success" size="small" variant="outlined" />
                  ) : (
                    <Chip icon={<RemoveCircleOutline />} label="Saída" color="error" size="small" variant="outlined" />
                  )}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: row.tipo === 'SAIDA' ? 'error.main' : 'success.main' }}>
                  {row.tipo === 'SAIDA' ? '- ' : '+ '}
                  {row.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// =========================================================
// TELA 2: TRANSFERÊNCIA ENTRE CONTAS
// =========================================================
export const TransferenciaContas: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
        Transferência entre Contas
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Registre saques, depósitos ou transferências bancárias internas.
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3} alignItems="center">
            {/* Origem */}
            <Grid size={{ xs: 12, md: 5 }}>
                <Paper variant="outlined" sx={{ p: 2, bgcolor: '#fff3e0' }}>
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <RemoveCircleOutline color="error" />
                        <Typography fontWeight="bold">SAI DE (Origem)</Typography>
                    </Box>
                    <TextField select label="Conta de Origem" fullWidth size="small" defaultValue="1">
                        <MenuItem value="1">Banco Itaú - Ag 3030</MenuItem>
                        <MenuItem value="2">Caixa Econômica</MenuItem>
                        <MenuItem value="3">Cofre (Físico)</MenuItem>
                    </TextField>
                </Paper>
            </Grid>

            {/* Ícone Central */}
            <Grid size={{ xs: 12, md: 2 }} display="flex" justifyContent="center">
                <CompareArrows sx={{ fontSize: 40, color: 'gray' }} />
            </Grid>

            {/* Destino */}
            <Grid size={{ xs: 12, md: 5 }}>
                <Paper variant="outlined" sx={{ p: 2, bgcolor: '#e8f5e9' }}>
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <AddCircleOutline color="success" />
                        <Typography fontWeight="bold">VAI PARA (Destino)</Typography>
                    </Box>
                    <TextField select label="Conta de Destino" fullWidth size="small" defaultValue="3">
                        <MenuItem value="1">Banco Itaú - Ag 3030</MenuItem>
                        <MenuItem value="2">Caixa Econômica</MenuItem>
                        <MenuItem value="3">Cofre (Físico)</MenuItem>
                    </TextField>
                </Paper>
            </Grid>
            
            <Grid size={{ xs: 12 }}><Divider /></Grid>

            {/* Dados da Transação */}
            <Grid size={{ xs: 12, md: 4 }}>
                <TextField label="Data da Transferência" type="date" fullWidth InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <TextField label="Valor (R$)" fullWidth placeholder="0,00" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Button variant="contained" fullWidth size="large" startIcon={<AccountBalance />}>
                    Confirmar Transferência
                </Button>
            </Grid>
        </Grid>
      </Paper>

      {/* Histórico Recente */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Últimas Transferências</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Origem</TableCell>
                    <TableCell>Destino</TableCell>
                    <TableCell align="right">Valor</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>10/11/2025</TableCell>
                    <TableCell>Banco Itaú</TableCell>
                    <TableCell>Cofre (Físico)</TableCell>
                    <TableCell align="right">R$ 1.000,00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>05/11/2025</TableCell>
                    <TableCell>Caixa Econômica</TableCell>
                    <TableCell>Banco Itaú</TableCell>
                    <TableCell align="right">R$ 5.000,00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};