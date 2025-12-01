import React from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SaveIcon from '@mui/icons-material/Save';

const residentesLista = [
  { id: 1, nome: 'Sr. João Silva', quarto: '101' },
  { id: 2, nome: 'Dona Maria', quarto: '102' },
  { id: 3, nome: 'Sr. Pedro', quarto: '103' },
];

export const SinaisVitais: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MonitorHeartIcon fontSize="large" /> Coleta de Sinais Vitais (Ronda)
      </Typography>
      
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Data: {new Date().toLocaleDateString()} | Turno: Manhã
      </Typography>

      <Grid container spacing={2}>
        {residentesLista.map((res) => (
          /* CORREÇÃO AQUI: Usando 'size' e removendo 'item' */
          <Grid size={{ xs: 12 }} key={res.id}>
            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Avatar>{res.nome.charAt(0)}</Avatar>
              <Box sx={{ minWidth: 150 }}>
                <Typography fontWeight="bold">{res.nome}</Typography>
                <Typography variant="caption">Quarto {res.quarto}</Typography>
              </Box>
              
              <TextField label="PA (mmHg)" placeholder="120/80" size="small" sx={{ width: 100 }} />
              <TextField label="Temp (ºC)" placeholder="36.5" size="small" sx={{ width: 100 }} />
              <TextField label="Glicemia" placeholder="mg/dL" size="small" sx={{ width: 100 }} />
              <TextField label="Sat O2" placeholder="98%" size="small" sx={{ width: 100 }} />
              
              <Button variant="contained" size="small" startIcon={<SaveIcon />}>Salvar</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};