import React from 'react';
import { Box, Paper, Typography, Card, CardContent, Avatar, Alert } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import InventoryIcon from '@mui/icons-material/Inventory';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <Paper sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }} elevation={2}>
    <Box>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>{title}</Typography>
      <Typography variant="h4" fontWeight="bold">{value}</Typography>
    </Box>
    <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>{icon}</Avatar>
  </Paper>
);

export const DashboardSuprimentos: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>Painel de Suprimentos</Typography>
      
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
           <Alert severity="warning" icon={<WarningIcon />}>
             Atenção: 3 Lotes de medicamentos vencem nos próximos 15 dias.
           </Alert>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Valor em Estoque" value="R$ 45k" icon={<InventoryIcon />} color="#1976d2" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Itens Críticos" value="8" icon={<ProductionQuantityLimitsIcon />} color="#d32f2f" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Pedidos em Aberto" value="4" icon={<LocalShippingIcon />} color="#ed6c02" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Entradas no Mês" value="22" icon={<InventoryIcon />} color="#2e7d32" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
             <CardContent>
                <Typography variant="h6" gutterBottom>Top 5 Consumo (Mês)</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, borderBottom: '1px solid #eee' }}>
                    <Typography>Fralda Geriátrica G</Typography> <Typography fontWeight="bold">450 un</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, borderBottom: '1px solid #eee' }}>
                    <Typography>Luva Procedimento P</Typography> <Typography fontWeight="bold">200 un</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, borderBottom: '1px solid #eee' }}>
                    <Typography>Dipirona 500mg</Typography> <Typography fontWeight="bold">120 un</Typography>
                </Box>
             </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};