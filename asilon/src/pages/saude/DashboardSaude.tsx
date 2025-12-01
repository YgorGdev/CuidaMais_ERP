import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Chip, 
  LinearProgress, 
  Button 
} from '@mui/material';
import Grid from '@mui/material/Grid'; 

import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HotelIcon from '@mui/icons-material/Hotel';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface StatCardProps {
  title: string;
  value: string | number;
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

const medicacoesProximas = [
  { id: 1, residente: 'Sr. João Silva', remedio: 'Losartana 50mg', hora: '14:00', atrasado: true },
  { id: 2, residente: 'Dona Maria', remedio: 'Insulina', hora: '14:30', atrasado: false },
  { id: 3, residente: 'Sr. Pedro', remedio: 'Dipirona', hora: '15:00', atrasado: false },
  { id: 4, residente: 'Dona Ana', remedio: 'Polivitamínico', hora: '15:00', atrasado: false },
];

const ocorrenciasRecentes = [
  { id: 1, residente: 'Dona Maria', tipo: 'Queda Leve', hora: '09:30', severidade: 'Alta' },
  { id: 2, residente: 'Sr. Antônio', tipo: 'Febre (38°C)', hora: '11:15', severidade: 'Média' },
  { id: 3, residente: 'Sra. Cláudia', tipo: 'Recusa Alimentar', hora: '12:00', severidade: 'Baixa' },
];

export const DashboardSaude: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Painel de Saúde
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Visão geral da enfermaria e cuidados diários.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Total de Residentes" value={42} icon={<PeopleIcon />} color="#1976d2" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Hospitalizados" value={3} icon={<LocalHospitalIcon />} color="#d32f2f" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Leitos Disponíveis" value={8} icon={<HotelIcon />} color="#2e7d32" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Ocorrências Hoje" value={5} icon={<AssignmentLateIcon />} color="#ed6c02" />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">Próximas Medicações</Typography>
                <Button size="small" variant="outlined">Ver Agenda Completa</Button>
              </Box>
              
              <List>
                {medicacoesProximas.map((item) => (
                  <ListItem 
                    key={item.id}
                    secondaryAction={
                      <Button variant="contained" size="small" startIcon={<CheckCircleIcon />} color={item.atrasado ? "error" : "primary"}>
                        Checar
                      </Button>
                    }
                    sx={{ 
                      bgcolor: item.atrasado ? '#fff4f4' : 'inherit', 
                      borderRadius: 1, 
                      mb: 1,
                      borderLeft: item.atrasado ? '4px solid #d32f2f' : 'none'
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#e3f2fd', color: '#1565c0' }}>
                        <AccessTimeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      primary={
                        <Typography variant="subtitle1" component="span" fontWeight="bold">
                          {item.hora} - {item.residente}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {item.remedio}
                          </Typography>
                          {item.atrasado && (
                            <Typography component="span" variant="caption" color="error" sx={{ ml: 1, fontWeight: 'bold' }}>
                              (ATRASADO)
                            </Typography>
                          )}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Últimas Ocorrências</Typography>
              <List dense>
                {ocorrenciasRecentes.map((occ) => (
                  <ListItem key={occ.id} disablePadding sx={{ mb: 2 }}>
                    <ListItemText 
                      primary={
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="body2" fontWeight="bold">{occ.residente}</Typography>
                          <Typography variant="caption" color="text.secondary">{occ.hora}</Typography>
                        </Box>
                      }
                      secondary={
                        <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                          <Chip 
                            label={occ.tipo} 
                            size="small" 
                            color={occ.severidade === 'Alta' ? 'error' : occ.severidade === 'Média' ? 'warning' : 'default'} 
                            variant="outlined"
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button fullWidth size="small" color="inherit">Ver Histórico</Button>
            </CardContent>
          </Card>

          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Taxa de Ocupação</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="h3" color="primary" fontWeight="bold">84%</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>42 / 50 Leitos</Typography>
              </Box>
              <LinearProgress variant="determinate" value={84} sx={{ height: 10, borderRadius: 5 }} />
              <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
                2 leitos em manutenção
              </Typography>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Box>
  );
};