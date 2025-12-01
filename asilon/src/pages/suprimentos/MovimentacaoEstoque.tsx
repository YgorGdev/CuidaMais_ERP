import React from 'react';
import { Box, Paper, Typography, TextField, Button, MenuItem, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SaveIcon from '@mui/icons-material/Save';

export const MovimentacaoEstoque: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SwapHorizIcon fontSize="large" /> Movimentação Manual
      </Typography>

      <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto', mt: 4 }}>
         <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
               <Typography variant="h6">Registrar Entrada / Saída / Perda</Typography>
               <Divider />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
               <TextField select label="Tipo de Movimento" fullWidth defaultValue="saida">
                  <MenuItem value="entrada">Entrada (Ajuste)</MenuItem>
                  <MenuItem value="saida">Saída (Consumo Interno)</MenuItem>
                  <MenuItem value="perda">Perda / Quebra / Validade</MenuItem>
               </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
               <TextField type="date" label="Data" fullWidth defaultValue="2025-11-17" />
            </Grid>

            <Grid size={{ xs: 12 }}>
               <TextField label="Produto" placeholder="Digite para buscar..." fullWidth />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
               <TextField label="Quantidade" type="number" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
               <TextField label="Lote (Opcional)" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
               <TextField label="Centro de Custo" select fullWidth defaultValue="enf">
                  <MenuItem value="enf">Enfermagem</MenuItem>
                  <MenuItem value="coz">Cozinha</MenuItem>
                  <MenuItem value="adm">Administrativo</MenuItem>
               </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
               <TextField label="Histórico / Justificativa" multiline rows={3} fullWidth />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
               <Button variant="contained" size="large" startIcon={<SaveIcon />}>Confirmar Movimento</Button>
            </Grid>
         </Grid>
      </Paper>
    </Box>
  );
};