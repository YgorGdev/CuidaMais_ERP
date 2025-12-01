import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export const DetalheResidente: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4">Detalhes do Residente</Typography>
      <Paper sx={{ p: 3 }}>Informações do Prontuário</Paper>
    </Box>
  );
};