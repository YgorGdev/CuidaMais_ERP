import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Divider } from '@mui/material'; // Removi Paper pois não estava usando
import Grid from '@mui/material/Grid';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export const CardapioSemanal: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <RestaurantMenuIcon fontSize="large" /> Cardápio Semanal
      </Typography>

      <Grid container spacing={3}>
        {diasSemana.map((dia) => (
          /* CORREÇÃO AQUI: Usando 'size' */
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dia}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                  {dia}-Feira
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Chip label="Almoço" color="success" size="small" sx={{ mb: 1 }} />
                  <Typography variant="body2">Arroz, Feijão, Frango Assado, Purê de Batata e Salada Verde.</Typography>
                </Box>

                <Box>
                  <Chip label="Jantar" color="info" size="small" sx={{ mb: 1 }} />
                  <Typography variant="body2">Sopa de Legumes com Carne e Torradas.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};