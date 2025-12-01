import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export const CadastroResidente: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4">Novo Residente</Typography>
      <Paper sx={{ p: 3 }}>Formulário de Cadastro</Paper>
    </Box>
  );
};