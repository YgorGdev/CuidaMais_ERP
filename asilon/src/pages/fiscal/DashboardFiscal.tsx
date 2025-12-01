import React from 'react';
import { Box, Paper, Typography, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentIcon from '@mui/icons-material/Assignment';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <Paper sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }} elevation={2}>
    <Box>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {value}
      </Typography>
    </Box>
    <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>
      {icon}
    </Avatar>
  </Paper>
);

export const DashboardFiscal: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Módulo Fiscal
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Gestão de notas fiscais, apuração de impostos e conformidade.
      </Typography>

      <Grid container spacing={3}>
        {/* KPIs - Usando sintaxe 'size' */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Notas Emitidas (Mês)" value="12" icon={<ReceiptLongIcon />} color="#1976d2" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Impostos a Recolher" value="R$ 4.250" icon={<AccountBalanceIcon />} color="#d32f2f" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Notas de Entrada" value="45" icon={<TrendingDownIcon />} color="#ed6c02" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Obrigações Acessórias" value="Em dia" icon={<AssignmentIcon />} color="#2e7d32" />
        </Grid>

        {/* Áreas de Conteúdo */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Próximos Vencimentos de Tributos</Typography>
              <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="body2">📅 20/11 - Simples Nacional (DAS)</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>📅 25/11 - FGTS Funcionários</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Atalhos Rápidos</Typography>
              <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', mb: 1 }}>• Emitir Nota Fiscal (NFS-e)</Typography>
              <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', mb: 1 }}>• Lançar Nota de Entrada</Typography>
              <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>• Gerar Guia de ISS</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};