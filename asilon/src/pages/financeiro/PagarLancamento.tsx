// src/pages/PagarLancamento.tsx
import { useState } from 'react';
import { 
  Box, Paper, Typography, TextField, Button, Tabs, Tab, Divider, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { Link } from 'react-router-dom';
import { Save, Close, AttachMoney, Description, QrCode } from '@mui/icons-material';

// Mocks
const fornecedoresMock = [{ id: 1, nome: 'ENEL DISTRIBUICAO' }, { id: 2, nome: 'SANEAGO' }, { id: 3, nome: 'FARMACIA CENTRAL' }];
const naturezasMock = [{ id: 1, nome: '2.01.001 - ENERGIA ELETRICA' }, { id: 2, nome: '2.01.005 - MEDICAMENTOS' }];
const bancosMock = [{ id: 1, nome: '001 - BANCO DO BRASIL' }, { id: 2, nome: '000 - CAIXA PEQUENO' }];

export function PagarLancamento() {
  const [tabValue, setTabValue] = useState(0);
  // @ts-ignore
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'error.main' }}>Lançamento de Pagamento (Despesa)</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>Confirmar</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/contas-a-pagar/lancamentos" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} textColor="primary" indicatorColor="primary" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab icon={<AttachMoney />} iconPosition="start" label="Dados do Título" />
          <Tab icon={<QrCode />} iconPosition="start" label="Boleto / Pix" />
          <Tab icon={<Description />} iconPosition="start" label="Rateio e Obs" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {/* ABA 1: DADOS PRINCIPAIS */}
          {tabValue === 0 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Fornecedor</InputLabel>
                  <Select label="Fornecedor" defaultValue="">
                    {fornecedoresMock.map(f => <MenuItem key={f.id} value={f.id}>{f.nome}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Número do Documento (NF)" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Série" size="small" /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12}><Divider /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Data de Emissão" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Vencimento Real" type="date" required size="small" InputLabelProps={{ shrink: true }} /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Valor do Título" required size="small" placeholder="R$ 0,00" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Previsão de Pagamento" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12}><Divider /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12} md={6}>
                 <FormControl fullWidth size="small">
                    <InputLabel>Natureza (Classificação)</InputLabel>
                    <Select label="Natureza (Classificação)" defaultValue="">
                        {naturezasMock.map(n => <MenuItem key={n.id} value={n.id}>{n.nome}</MenuItem>)}
                    </Select>
                </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}>
                 <FormControl fullWidth size="small">
                    <InputLabel>Carteira / Portador</InputLabel>
                    <Select label="Carteira / Portador" defaultValue="">
                        {bancosMock.map(b => <MenuItem key={b.id} value={b.id}>{b.nome}</MenuItem>)}
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
          )}

          {/* ABA 2: CÓDIGO DE BARRAS */}
          {tabValue === 1 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12}><TextField fullWidth label="Linha Digitável (Código de Barras)" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12}><TextField fullWidth label="Chave PIX" size="small" /></Grid>
            </Grid>
          )}

          {/* ABA 3: RATEIO */}
          {tabValue === 2 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12}><TextField fullWidth label="Histórico / Observações" multiline rows={3} size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Centro de Custo" size="small" /></Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </Box>
  );
}