// src/pages/ContasAReceber.tsx
import { useState } from 'react';
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
  Tooltip
} from '@mui/material';
import { Link } from 'react-router-dom';

// Ícones
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // Ícone para Baixa
import PrintIcon from '@mui/icons-material/Print';

// Dados Fictícios (Mock)
const rows = [
  { id: 1, status: 'ATRASADO', vencimento: '10/11/2025', cliente: 'JOSÉ SOUZA (RESPONSÁVEL)', descricao: 'Mensalidade Nov/2025', valor: 4500.00 },
  { id: 2, status: 'ABERTO', vencimento: '20/11/2025', cliente: 'MARIA DA SILVA', descricao: 'Taxa Extra - Fraldas', valor: 250.00 },
  { id: 3, status: 'ABERTO', vencimento: '10/12/2025', cliente: 'JOSÉ SOUZA (RESPONSÁVEL)', descricao: 'Mensalidade Dez/2025', valor: 4500.00 },
  { id: 4, status: 'PAGO', vencimento: '10/10/2025', cliente: 'ANA PEREIRA', descricao: 'Mensalidade Out/2025', valor: 4200.00 },
];

export function ContasAReceberPage() {
  const [busca, setBusca] = useState('');

  // Filtro simples
  const linhasFiltradas = rows.filter((row) => 
    row.cliente.toLowerCase().includes(busca.toLowerCase()) ||
    row.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  // Função para colorir o status
  const getStatusChip = (status: string) => {
    let color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" = "default";
    
    if (status === 'ABERTO') color = "primary"; // Azul
    if (status === 'PAGO') color = "success";   // Verde
    if (status === 'ATRASADO') color = "error"; // Vermelho

    return <Chip label={status} color={color} size="small" sx={{ fontWeight: 'bold' }} />;
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
        Contas a Receber (Lançamentos)
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        {/* --- BARRA DE FERRAMENTAS --- */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
          {/* Botão INCLUIR */}
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            component={Link}
            to="/contas-a-receber/lancamentos/novo"
            sx={{ fontWeight: 'bold' }}
          >
            Incluir
          </Button>

          {/* Botão BAIXA (Destaque Verde) */}
          <Button 
            variant="contained" 
            color="success" 
            startIcon={<CheckBoxIcon />}
            component={Link}
            to="/contas-a-receber/baixa-manual"
            sx={{ fontWeight: 'bold' }}
          >
            Baixa
          </Button>

          <Button variant="outlined" startIcon={<EditIcon />}>Alterar</Button>
          <Button variant="outlined" startIcon={<VisibilityIcon />}>Visualizar</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Excluir</Button>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Tooltip title="Imprimir Listagem">
            <IconButton><PrintIcon /></IconButton>
          </Tooltip>
        </Box>

        {/* --- FILTRO --- */}
        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
           <TextField 
            size="small" 
            placeholder="Pesquisar por Cliente ou Descrição..." 
            fullWidth
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
          />
          <Button variant="contained" color="secondary" startIcon={<FilterListIcon />}>
            Filtrar
          </Button>
        </Box>

        {/* --- TABELA --- */}
        <TableContainer sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Vencimento</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Cliente / Responsável</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Descrição / Título</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Valor (R$)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {linhasFiltradas.map((row) => (
                <TableRow 
                  key={row.id} 
                  hover 
                  sx={{ cursor: 'pointer' }}
                  // Ao clicar na linha, vai para a baixa manual (simulação)
                  component={Link}
                  to="/contas-a-receber/baixa-manual"
                  style={{ textDecoration: 'none' }}
                >
                  <TableCell>{getStatusChip(row.status)}</TableCell>
                  <TableCell>{row.vencimento}</TableCell>
                  <TableCell>{row.cliente}</TableCell>
                  <TableCell>{row.descricao}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {row.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </TableCell>
                </TableRow>
              ))}
              {linhasFiltradas.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                    Nenhum lançamento encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
          Exibindo {linhasFiltradas.length} registros
        </Typography>
      </Paper>
    </Box>
  );
}