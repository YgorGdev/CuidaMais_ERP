import React from 'react';
import { 
  Box, Paper, Typography, TextField, Button, Checkbox, FormControlLabel, Divider 
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid Padrão
import ReceiptIcon from '@mui/icons-material/Receipt';
import SendIcon from '@mui/icons-material/Send';

export const NotasSaida: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ReceiptIcon fontSize="large" /> Emissão de Nota Fiscal (Serviço)
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        MATA461 - Faturamento de Serviços Prestados (RPS)
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Grid container spacing={3}>
            
          {/* Dados do Tomador */}
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>1. Dados do Tomador (Cliente)</Typography>
            <Divider />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
             <TextField label="Código Cliente" fullWidth size="small" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
             <TextField label="Razão Social / Nome" fullWidth size="small" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
             <TextField label="CNPJ / CPF" fullWidth size="small" />
          </Grid>

          {/* Dados do Serviço */}
          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>2. Detalhes do Serviço</Typography>
            <Divider />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
             <TextField label="Cód. Serviço (LC 116)" defaultValue="04.03" fullWidth size="small" />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
             <TextField label="Descrição do Serviço" defaultValue="Prestação de serviços de assistência integral a idosos ref. Mês 11/2025" fullWidth size="small" />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
             <TextField label="Valor Total (R$)" fullWidth size="small" />
          </Grid>

          {/* Impostos */}
          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>3. Retenções e Impostos</Typography>
            <Divider />
          </Grid>
          <Grid size={{ xs: 12, md: 12 }} sx={{ display: 'flex', gap: 3 }}>
             <FormControlLabel control={<Checkbox />} label="Reter ISS" />
             <FormControlLabel control={<Checkbox />} label="Reter INSS" />
             <FormControlLabel control={<Checkbox />} label="Reter IRRF" />
          </Grid>

          {/* Botões */}
          <Grid size={{ xs: 12 }} sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
             <Button variant="outlined">Pré-visualizar</Button>
             <Button variant="contained" size="large" startIcon={<SendIcon />}>Transmitir NFS-e</Button>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};