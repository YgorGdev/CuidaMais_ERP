import React, { useState } from 'react';
import { 
  Box, Paper, Typography, TextField, Button, MenuItem, 
  List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Alert 
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid Padrão
import SaveIcon from '@mui/icons-material/Save';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';

const residentesMock = [
  { id: 1, nome: 'Sr. João Silva' },
  { id: 2, nome: 'Dona Maria Oliveira' },
];

const historicoMock = [
  { data: '19/11 08:00', texto: 'Paciente aceitou bem o café da manhã. Sinais vitais estáveis.', autor: 'Enf. Ana' },
  { data: '18/11 20:00', texto: 'Administrada medicação noturna. Queixa de dores nas pernas.', autor: 'Téc. Carlos' },
];

export const EvolucaoDiaria: React.FC = () => {
  const [selectedResidente, setSelectedResidente] = useState('');

  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HistoryIcon fontSize="large" /> Evolução de Enfermagem
      </Typography>

      <Grid container spacing={3}>
        {/* Lado Esquerdo: Formulário */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Nova Anotação</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Selecione o Residente"
                  value={selectedResidente}
                  onChange={(e) => setSelectedResidente(e.target.value)}
                >
                  {residentesMock.map((option) => (
                    <MenuItem key={option.id} value={option.nome}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                 <TextField label="Data/Hora" fullWidth defaultValue={new Date().toLocaleString()} disabled />
              </Grid>
              
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Descrição da Evolução (Sinais, Alimentação, Higiene, Queixas)"
                  placeholder="Descreva o estado do paciente..."
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                 <Alert severity="info" sx={{ mb: 2 }}>
                    Lembre-se de registrar intercorrências graves no módulo de Ocorrências.
                 </Alert>
                 <Button variant="contained" size="large" startIcon={<SaveIcon />}>
                    Salvar Evolução
                 </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Lado Direito: Histórico */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 0, height: '100%' }}>
            <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
               <Typography variant="h6">Últimos Registros</Typography>
            </Box>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {historicoMock.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar><PersonIcon /></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.data}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary" fontWeight="bold">
                            {item.autor}
                          </Typography>
                          {" — " + item.texto}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};