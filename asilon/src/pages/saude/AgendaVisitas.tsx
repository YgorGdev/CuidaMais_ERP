import React from 'react';
import { 
  Box, Paper, Typography, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Chip 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const visitasMock = [
  { id: 1, residente: 'Sr. João Silva', visitante: 'Maria Silva (Filha)', data: '18/11/2025', hora: '14:00', status: 'Confirmada' },
  { id: 2, residente: 'Dona Ana', visitante: 'Pedro (Neto)', data: '18/11/2025', hora: '15:30', status: 'Pendente' },
  { id: 3, residente: 'Sr. Antônio', visitante: 'Clara (Esposa)', data: '19/11/2025', hora: '10:00', status: 'Confirmada' },
];

export const AgendaVisitas: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CalendarMonthIcon fontSize="large" /> Agenda de Visitas
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>Agendar Visita</Button>
      </Box>

      <Grid container spacing={3}>
        {/* CORREÇÃO AQUI: Usando 'size' */}
        <Grid size={{ xs: 12, md: 8 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Data/Hora</TableCell>
                  <TableCell>Residente</TableCell>
                  <TableCell>Visitante</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visitasMock.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">{row.data}</Typography>
                      <Typography variant="caption">{row.hora}</Typography>
                    </TableCell>
                    <TableCell>{row.residente}</TableCell>
                    <TableCell>{row.visitante}</TableCell>
                    <TableCell>
                      <Chip label={row.status} color={row.status === 'Confirmada' ? 'success' : 'warning'} size="small" />
                    </TableCell>
                    <TableCell align="right">
                      <Button size="small" color="error">Cancelar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* CORREÇÃO AQUI: Usando 'size' */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, bgcolor: '#e3f2fd' }}>
            <Typography variant="h6" gutterBottom>Regras de Visita</Typography>
            <Typography variant="body2" paragraph>• Horário: 09:00 às 17:00.</Typography>
            <Typography variant="body2" paragraph>• Máximo de 2 visitantes por vez.</Typography>
            <Typography variant="body2" paragraph>• Obrigatório uso de máscara em caso de sintomas gripais.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};