import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid'; 

export const MedicamentosPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
        Controle de Medicamentos
      </Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        {/* O container e o spacing continuam iguais */}
        <Grid container spacing={3}>
          
          {/* CORREÇÃO AQUI: 'item' foi removido e 'xs' virou 'size' */}
          <Grid size={12}> 
             <Typography>Mapa de checagem e horários (Em desenvolvimento)</Typography>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};