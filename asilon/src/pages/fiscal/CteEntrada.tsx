import React from 'react';
import { Box, Paper, Typography, Button, TextField, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SaveIcon from '@mui/icons-material/Save';

export const CteEntrada: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LocalShippingIcon fontSize="large" /> Entrada de CT-e (Frete)
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Lançamento de Conhecimento de Transporte Eletrônico para composição de custos.
      </Typography>

      <Paper sx={{ p: 4 }}>
         <Grid container spacing={3}>
            
            {/* Cabeçalho do Documento */}
            <Grid size={{ xs: 12 }}>
               <Typography variant="h6" sx={{ color: '#1976d2' }}>Dados do CT-e</Typography>
               <Divider />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
               <TextField label="Chave de Acesso (44 dígitos)" fullWidth size="small" />
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
               <TextField label="Número" fullWidth size="small" />
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
               <TextField label="Série" fullWidth size="small" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
               <TextField type="date" label="Data Emissão" fullWidth size="small" InputLabelProps={{ shrink: true }} />
            </Grid>

            {/* Valores */}
            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
               <Typography variant="h6" sx={{ color: '#1976d2' }}>Valores e Impostos</Typography>
               <Divider />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
               <TextField label="Valor Total do Frete (R$)" fullWidth size="small" />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
               <TextField label="Base Cálculo ICMS" fullWidth size="small" />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
               <TextField label="Valor ICMS" fullWidth size="small" />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
               <TextField label="Peso da Carga (Kg)" fullWidth size="small" />
            </Grid>

            {/* Botões */}
            <Grid size={{ xs: 12 }} sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
               <Button variant="outlined">Importar XML</Button>
               <Button variant="contained" startIcon={<SaveIcon />}>Lançar Frete</Button>
            </Grid>

         </Grid>
      </Paper>
    </Box>
  );
};