// src/pages/saude/Residentes.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  TextField, 
  InputAdornment, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip,
  IconButton,
  Avatar,
  Tooltip
} from '@mui/material';
import { 
  Add as AddIcon, 
  Search as SearchIcon, 
  Edit as EditIcon, 
  Visibility as VisibilityIcon,
  Delete as DeleteIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Definição local dos tipos (ou importar de src/types)
export type StatusResidente = 'Ativo' | 'Hospitalizado' | 'Falecido' | 'Temporario';
export interface Residente {
  id: string;
  nome: string;
  dataNascimento: string;
  quarto: string;
  grauDependencia: 1 | 2 | 3;
  status: StatusResidente;
  contatoEmergencia: string;
}

const mockResidentes: Residente[] = [
  { id: '1', nome: 'Sr. João Silva', dataNascimento: '1945-05-12', quarto: '101-A', grauDependencia: 2, status: 'Ativo', contatoEmergencia: '(11) 99999-1111' },
  { id: '2', nome: 'Dona Maria Oliveira', dataNascimento: '1938-11-20', quarto: '102-B', grauDependencia: 3, status: 'Hospitalizado', contatoEmergencia: '(11) 99999-2222' },
  { id: '3', nome: 'Sr. Pedro Santos', dataNascimento: '1950-01-15', quarto: '103-A', grauDependencia: 1, status: 'Ativo', contatoEmergencia: '(11) 99999-3333' },
];

const getStatusColor = (status: StatusResidente) => {
  switch (status) {
    case 'Ativo': return 'success';
    case 'Hospitalizado': return 'error';
    case 'Falecido': return 'default';
    case 'Temporario': return 'warning';
    default: return 'default';
  }
};

export const Residentes: React.FC = () => {
  const navigate = useNavigate(); // Hook de navegação
  const [searchTerm, setSearchTerm] = useState('');
  const [rows] = useState<Residente[]>(mockResidentes);

  const filteredRows = rows.filter((row) => 
    row.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.quarto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
          Residentes
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          color="primary"
          size="large"
          onClick={() => navigate('/residentes/novo')} // Navega para o cadastro
        >
          Novo Residente
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="Buscar por nome ou quarto..." 
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (<InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>),
          }}
        />
      </Paper>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Residente</TableCell>
              <TableCell>Quarto</TableCell>
              <TableCell>Grau Dep.</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar>{row.nome.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="medium">{row.nome}</Typography>
                    <Typography variant="caption" color="textSecondary">{row.contatoEmergencia}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.quarto}</TableCell>
                <TableCell>
                  <Chip label={`Grau ${row.grauDependencia}`} size="small" variant="outlined" />
                </TableCell>
                <TableCell>
                  <Chip label={row.status} color={getStatusColor(row.status)} size="small" variant="filled" />
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Ver Prontuário">
                    <IconButton 
                      color="primary" 
                      onClick={() => navigate(`/residentes/${row.id}`)} // NAVEGA PARA O DETALHE
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Editar">
                    <IconButton color="info"><EditIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title="Inativar">
                    <IconButton color="error"><DeleteIcon /></IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};