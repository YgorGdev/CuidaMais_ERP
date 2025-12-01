// src/pages/RotinaRelatorios.tsx
import { Box, Paper, Typography, Button, TextField, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Print, Close } from '@mui/icons-material';

export function RotinaRelatorios() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Relatórios de Cobrança</Typography>
        <Box>
          <Button variant="contained" color="primary" startIcon={<Print />} sx={{ mr: 1, fontWeight: 'bold' }}>
            Gerar Relatório
          </Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/contas-a-receber/lancamentos" sx={{ fontWeight: 'bold' }}>
            Fechar
          </Button>
        </Box>
      </Box>

      <Paper sx={{ width: '100%', mb: 2, p: 3 }}>
        <Typography variant="h6" gutterBottom>Filtros de Seleção</Typography>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Tipo de Relatório</InputLabel>
              <Select label="Tipo de Relatório" defaultValue="1">
                <MenuItem value="1">Extrato por Cliente</MenuItem>
                <MenuItem value="2">Lista de Títulos em Aberto</MenuItem>
                <MenuItem value="3">Relatório de Inadimplência</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}><TextField fullWidth label="Cliente Inicial" size="small" /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={4}><TextField fullWidth label="Cliente Final" size="small" /></Grid>

          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Data de Vencimento (Inicial)" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}><TextField fullWidth label="Data de Vencimento (Final)" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Status do Título</InputLabel>
              <Select label="Status do Título" defaultValue="A"><MenuItem value="A">Aberto</MenuItem><MenuItem value="P">Pago</MenuItem></Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}