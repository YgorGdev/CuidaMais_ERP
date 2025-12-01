import React from 'react';
import { 
  Box, Paper, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Chip, Button, LinearProgress, TextField, InputAdornment 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const estoqueMock = [
  { id: 1, item: 'Fralda Geriátrica G', lote: 'L5502', validade: '2026-10-01', cat: 'Higiene', qtd: 150, min: 200, status: 'Baixo' },
  { id: 2, item: 'Dipirona 500mg', lote: 'AX99', validade: '2025-11-30', cat: 'Medicamento', qtd: 50, min: 20, status: 'Ok' },
  { id: 3, item: 'Leite Integral', lote: '---', validade: '2025-12-10', cat: 'Alimentos', qtd: 40, min: 30, status: 'Ok' },
];

export const EstoquePage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <InventoryIcon fontSize="large" /> Consulta de Estoque
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>Novo Produto</Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
         <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
               <TextField 
                  fullWidth size="small" placeholder="Buscar produto..." 
                  InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment> }}
               />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
               <Button fullWidth variant="outlined" startIcon={<FilterListIcon />}>Filtros Avançados</Button>
            </Grid>
         </Grid>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell>Lote / Validade</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell align="center">Saldo</TableCell>
              <TableCell>Nível</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {estoqueMock.map((row) => {
               const pct = Math.min((row.qtd / row.min) * 50, 100); 
               return (
                <TableRow key={row.id}>
                    <TableCell sx={{ fontWeight: 'bold' }}>{row.item}</TableCell>
                    <TableCell>
                       <Typography variant="caption" display="block">Lote: {row.lote}</Typography>
                       <Typography variant="caption" color={new Date(row.validade) < new Date() ? 'error' : 'textSecondary'}>
                          Venc: {row.validade}
                       </Typography>
                    </TableCell>
                    <TableCell><Chip label={row.cat} size="small" variant="outlined" /></TableCell>
                    <TableCell align="center" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{row.qtd}</TableCell>
                    <TableCell sx={{ width: 140 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LinearProgress variant="determinate" value={pct} sx={{ flexGrow: 1 }} color={row.status === 'Baixo' ? 'warning' : 'success'} />
                            <Typography variant="caption">{row.status}</Typography>
                        </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Button size="small">Detalhes</Button>
                    </TableCell>
                </TableRow>
               )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};