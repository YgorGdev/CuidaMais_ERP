// src/pages/FornecedorCadastro.tsx
import { useState } from 'react';
import { 
  Box, Paper, Typography, TextField, Button, Tabs, Tab, Divider, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import Grid from '@mui/material/Grid';
// --- CORREÇÃO 1: Importar o Link ---
import { Link } from 'react-router-dom'; 

// Ícones
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

// ... (O resto do código das abas e interface continua igual até o botão Fechar) ...
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export function FornecedorCadastro() {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 2, backgroundColor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Cadastro de Fornecedores
        </Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<SaveIcon />} sx={{ mr: 1, textTransform: 'none', fontWeight: 'bold' }}>
            Confirmar
          </Button>
          
          {/* --- CORREÇÃO 2: Usar Link ao invés de href para não recarregar a página --- */}
          <Button 
            variant="outlined" 
            color="error" 
            startIcon={<CloseIcon />}
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            component={Link}             // Isso faz o React controlar a navegação
            to="/financeiro/cadastros"   // Para onde ele vai
          >
            Fechar
          </Button>
          {/* ------------------------------------------------------------------------- */}

        </Box>
      </Box>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} textColor="primary" indicatorColor="primary" variant="scrollable" scrollButtons="auto" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab icon={<AssignmentIndIcon />} iconPosition="start" label="Cadastrais" />
          <Tab icon={<LocationOnIcon />} iconPosition="start" label="Endereço" />
          <Tab icon={<AccountBalanceIcon />} iconPosition="start" label="Financeiro / Fiscal" />
        </Tabs>

        <CustomTabPanel value={tabValue} index={0}>
          <Grid container spacing={2}>
            {/* @ts-ignore */}
            <Grid item xs={12} md={2}><TextField fullWidth label="Código" defaultValue="000001" size="small" InputProps={{ readOnly: true }} variant="filled" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={2}><TextField fullWidth label="Loja" defaultValue="01" size="small" variant="filled" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="CNPJ / CPF" placeholder="00.000.000/0000-00" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Tipo (Física/Jurídica)</InputLabel>
                <Select label="Tipo (Física/Jurídica)" defaultValue="J"><MenuItem value="J">Jurídica</MenuItem><MenuItem value="F">Física</MenuItem><MenuItem value="X">Outros</MenuItem></Select>
              </FormControl>
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12}><Divider /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={6}><TextField fullWidth label="Razão Social" required size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={6}><TextField fullWidth label="Nome Fantasia" required size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="Inscrição Estadual" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="Inscrição Municipal" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="Email Principal" size="small" /></Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={1}>
          <Grid container spacing={2}>
            {/* @ts-ignore */}
            <Grid item xs={12} md={2}><TextField fullWidth label="CEP" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={8}><TextField fullWidth label="Endereço (Rua/Av)" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={2}><TextField fullWidth label="Número" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="Bairro" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="Município" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={1}><TextField fullWidth label="UF" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={3}><TextField fullWidth label="País" defaultValue="Brasil" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={12}><TextField fullWidth label="Complemento" size="small" /></Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={2}>
          <Grid container spacing={2}>
             {/* @ts-ignore */}
             <Grid item xs={12}><Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>Dados Bancários</Typography></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={3}><TextField fullWidth label="Banco" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={2}><TextField fullWidth label="Agência" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={3}><TextField fullWidth label="Conta Corrente" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={2}><TextField fullWidth label="DV Conta" size="small" /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12}><Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>Condições Comerciais</Typography></Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Condição de Pagamento Padrão</InputLabel>
                <Select label="Condição de Pagamento Padrão" defaultValue=""><MenuItem value="001">30 Dias</MenuItem><MenuItem value="002">30/60 Dias</MenuItem><MenuItem value="003">À Vista</MenuItem></Select>
              </FormControl>
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}><TextField fullWidth label="Limite de Crédito" size="small" /></Grid>
          </Grid>
        </CustomTabPanel>
      </Paper>
    </Box>
  );
}