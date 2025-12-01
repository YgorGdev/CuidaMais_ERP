// src/pages/NaturezaCadastro.tsx
import { Box, Paper, Typography, TextField, Button, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Save, Close } from '@mui/icons-material';

export function NaturezaCadastro() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Cadastro de Natureza</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>Confirmar</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/financeiro/naturezas" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>
      <Paper sx={{ width: '100%', mb: 2, p: 3 }}>
        <Grid container spacing={2}>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Código" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6}><TextField fullWidth label="Descrição" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}>
             <FormControl fullWidth size="small">
                <InputLabel>Tipo</InputLabel>
                <Select label="Tipo" defaultValue="D"><MenuItem value="R">Receita</MenuItem><MenuItem value="D">Despesa</MenuItem></Select>
            </FormControl>
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12}><Divider /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}>
             <FormControl fullWidth size="small">
                <InputLabel>Analítico/Sintético</InputLabel>
                <Select label="Analítico/Sintético" defaultValue="A"><MenuItem value="A">Analítico</MenuItem><MenuItem value="S">Sintético</MenuItem></Select>
            </FormControl>
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}><TextField fullWidth label="Conta Contábil" size="small" /></Grid>
        </Grid>
      </Paper>
    </Box>
  );
}