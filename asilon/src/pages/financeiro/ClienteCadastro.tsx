// src/pages/ClienteCadastro.tsx
import { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Tabs, Tab, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid v1
import { Link } from 'react-router-dom';
import { Save, Close, Person, Phone, Payment } from '@mui/icons-material';

export function ClienteCadastro() {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <Box>
      {/* Cabeçalho de Ações */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Cadastro de Cliente</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>Confirmar</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/financeiro/clientes" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>

      {/* Área do Formulário */}
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} textColor="primary" indicatorColor="primary" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab icon={<Person />} iconPosition="start" label="Dados Pessoais" />
          <Tab icon={<Phone />} iconPosition="start" label="Contatos" />
          <Tab icon={<Payment />} iconPosition="start" label="Financeiro" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {/* ABA 1: DADOS PESSOAIS */}
          {tabValue === 0 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={2}><TextField fullWidth label="Código" size="small" disabled defaultValue="AUTO" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={2}>
                <FormControl fullWidth size="small">
                    <InputLabel>Tipo Pessoa</InputLabel>
                    <Select label="Tipo Pessoa" defaultValue="F"><MenuItem value="F">Física</MenuItem><MenuItem value="J">Jurídica</MenuItem></Select>
                </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}><TextField fullWidth label="CPF/CNPJ" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}><TextField fullWidth label="RG / IE" size="small" /></Grid>
              
              {/* @ts-ignore */}
              <Grid item xs={12}><Divider /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Nome Completo" required size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Data Nascimento" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Profissão" size="small" /></Grid>

              {/* @ts-ignore */}
              <Grid item xs={12} md={2}><TextField fullWidth label="CEP" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Endereço" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={2}><TextField fullWidth label="Número" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={2}><TextField fullWidth label="Bairro" size="small" /></Grid>
            </Grid>
          )}

          {/* ABA 2: CONTATOS */}
          {tabValue === 1 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Email Principal" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Email Secundário" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Celular (WhatsApp)" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={3}><TextField fullWidth label="Telefone Fixo" size="small" /></Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={6}><TextField fullWidth label="Nome de Recado" size="small" /></Grid>
            </Grid>
          )}

          {/* ABA 3: FINANCEIRO */}
          {tabValue === 2 && (
            <Grid container spacing={2}>
              {/* @ts-ignore */}
              <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Vencimento Preferencial</InputLabel>
                    <Select label="Vencimento Preferencial" defaultValue="05"><MenuItem value="05">Dia 05</MenuItem><MenuItem value="10">Dia 10</MenuItem><MenuItem value="20">Dia 20</MenuItem></Select>
                  </FormControl>
              </Grid>
              {/* @ts-ignore */}
              <Grid item xs={12} md={8}><TextField fullWidth label="Observações Financeiras" multiline rows={3} size="small" /></Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </Box>
  );
}