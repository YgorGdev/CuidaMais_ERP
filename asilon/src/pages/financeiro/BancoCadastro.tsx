// src/pages/BancoCadastro.tsx
import { Box, Paper, Typography, TextField, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid v1
import { Link } from 'react-router-dom';
import { Save, Close } from '@mui/icons-material';

export function BancoCadastro() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Cadastro de Banco</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>Confirmar</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/financeiro/bancos" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>
      <Paper sx={{ width: '100%', mb: 2, p: 3 }}>
        <Grid container spacing={2}>
          {/* @ts-ignore */}
          <Grid item xs={12} md={2}><TextField fullWidth label="Cód. Bacen" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6}><TextField fullWidth label="Nome do Banco" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}><TextField fullWidth label="Descrição Interna" size="small" /></Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Agência" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Conta Corrente" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Gerente" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Telefone Agência" size="small" /></Grid>
        </Grid>
      </Paper>
    </Box>
  );
}