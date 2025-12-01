import React from 'react';
import { 
  Box, Paper, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Chip, Button 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

const mockNotas = [
  { id: 1, numero: '000152', data: '17/11/2025', entidade: 'Pref. Municipal', tipo: 'Saída (Serviço)', valor: 'R$ 5.000,00', status: 'Autorizada' },
  { id: 2, numero: '045992', data: '16/11/2025', entidade: 'Farmácia Central', tipo: 'Entrada (Compra)', valor: 'R$ 850,00', status: 'Lançada' },
  { id: 3, numero: '000153', data: '18/11/2025', entidade: 'Particular (Fam. Souza)', tipo: 'Saída (Serviço)', valor: 'R$ 3.200,00', status: 'Pendente' },
];

export const NotasFiscaisLista: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold">Notas Fiscais</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>Lançar Nota</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>Fornecedor / Cliente</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockNotas.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.data}</TableCell>
                <TableCell>{row.numero}</TableCell>
                <TableCell>{row.entidade}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.tipo} 
                    size="small" 
                    color={row.tipo.includes('Saída') ? 'primary' : 'warning'} 
                    variant="outlined" 
                  />
                </TableCell>
                <TableCell>{row.valor}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.status} 
                    color={row.status === 'Autorizada' || row.status === 'Lançada' ? 'success' : 'default'} 
                    size="small" 
                  />
                </TableCell>
                <TableCell align="right">
                   <Button size="small" startIcon={<DownloadIcon />}>XML/PDF</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};