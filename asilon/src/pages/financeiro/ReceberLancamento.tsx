// src/pages/ReceberLancamento.tsx
import { useState } from 'react';
import { 
  Box, Paper, Typography, TextField, Button, Tabs, Tab, Divider, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { Link } from 'react-router-dom';
import { Save, Close, AttachMoney, Description } from '@mui/icons-material';

const clientesMock = [{ id: 1, nome: 'MARIA DA SILVA (Responsável)' }, { id: 2, nome: 'JOSÉ SOUZA (Próprio)' }];
const naturezasMock = [{ id: 1, nome: '1.01.001 - MENSALIDADE' }, { id: 2, nome: '1.01.002 - MULTA' }];
const bancosMock = [{ id: 1, nome: '001 - BANCO DO BRASIL' }, { id: 2, nome: '000 - CAIXA PEQUENO' }];

export function ReceberLancamento() {
  const [tabValue, setTabValue] = useState(0);
  // @ts-ignore
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Lançamento de Recebimento</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>Confirmar</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/contas-a-receber/lancamentos" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} textColor="primary" indicatorColor="primary" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab icon={<AttachMoney />} iconPosition="start" label="Valores e Datas" />
          <Tab icon={<Description />} iconPosition="start" label="Observações e Rateio" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Cliente / Responsável</InputLabel>
                  <Select label="Cliente / Responsável" defaultValue="">
                    {clientesMock.map(c => <MenuItem key={c.id} value={c.id}>{c.nome}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Valor Total" required size="small" placeholder="R$ 0,00" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Vencimento" type="date" required size="small" InputLabelProps={{ shrink: true }} /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12}><Divider /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}>
                 <FormControl fullWidth size="small">
                    <InputLabel>Natureza Financeira</InputLabel>
                    <Select label="Natureza Financeira" defaultValue="">
                        {naturezasMock.map(n => <MenuItem key={n.id} value={n.id}>{n.nome}</MenuItem>)}
                    </Select>
                </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}>
                 <FormControl fullWidth size="small">
                    <InputLabel>Condição de Pagamento</InputLabel>
                    <Select label="Condição de Pagamento" defaultValue="001"><MenuItem value="001">À Vista</MenuItem><MenuItem value="002">30 dias</MenuItem></Select>
                </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}>
                 <FormControl fullWidth size="small">
                    <InputLabel>Banco/Conta</InputLabel>
                    <Select label="Banco/Conta" defaultValue="">
                        {bancosMock.map(b => <MenuItem key={b.id} value={b.id}>{b.nome}</MenuItem>)}
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={12}><TextField fullWidth label="Histórico / Detalhes do Lançamento" multiline rows={4} size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}><TextField fullWidth label="Centro de Custo" size="small" /></Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </Box>
  );
}