// src/pages/financeiro/ContasAPagar.tsx
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
  IconButton, 
  Tooltip, 
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';

// Ícones
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // Ícone para Baixa/Pagamento
import PrintIcon from '@mui/icons-material/Print';

// Dados Fictícios (Mock)
const rows = [
  { id: 1, status: 'ABERTO', vencimento: '25/11/2025', fornecedor: 'ENEL DISTRIBUICAO', historico: 'Conta de Energia Ref 10/2025', valor: 1250.40 },
  { id: 2, status: 'ABERTO', vencimento: '30/11/2025', fornecedor: 'SANEAGO', historico: 'Conta de Água', valor: 450.00 },
  { id: 3, status: 'PAGO', vencimento: '10/11/2025', fornecedor: 'FARMACIA CENTRAL', historico: 'Compra de Fraldas e Remédios', valor: 890.00 },
  { id: 4, status: 'ATRASADO', vencimento: '15/11/2025', fornecedor: 'PADARIA PÃO QUENTE', historico: 'Fornecimento de Pães Quinzenal', valor: 300.00 },
];

export function ContasAPagarPage() {
  const [busca, setBusca] = useState('');

  // Filtro simples
  const linhasFiltradas = rows.filter((row) => 
    row.fornecedor.toLowerCase().includes(busca.toLowerCase()) ||
    row.historico.toLowerCase().includes(busca.toLowerCase())
  );

  // Função para colorir o status
  const getStatusChip = (status: string) => {
    let color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" = "default";
    
    if (status === 'ABERTO') color = "primary"; 
    if (status === 'PAGO') color = "success"; 
    if (status === 'ATRASADO') color = "error"; 

    return <Chip label={status} color={color} size="small" sx={{ fontWeight: 'bold' }} />;
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
        Contas a Pagar (Lançamentos)
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        {/* --- BARRA DE FERRAMENTAS --- */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
          {/* Botão INCLUIR */}
          <Button 
            variant="contained" 
            color="error" // Vermelho para indicar saída de dinheiro (Despesa)
            startIcon={<AddIcon />}
            component={Link}
            to="/contas-a-pagar/lancamentos/novo"
            sx={{ fontWeight: 'bold' }}
          >
            Incluir Título
          </Button>
          
          {/* Botão PAGAR (Destaque Verde) */}
          <Button 
            variant="contained" 
            color="success" 
            startIcon={<CheckBoxIcon />}
            component={Link}
            to="/contas-a-pagar/baixa-manual"
            sx={{ fontWeight: 'bold' }}
          >
            Pagar / Baixar
          </Button>

          <Button variant="outlined" startIcon={<EditIcon />}>Alterar</Button>
          <Button variant="outlined" startIcon={<VisibilityIcon />}>Visualizar</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Excluir</Button>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Tooltip title="Relatório de Contas a Pagar">
            <IconButton><PrintIcon /></IconButton>
          </Tooltip>
        </Box>

        {/* --- FILTRO --- */}
        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
           <TextField 
            size="small" 
            placeholder="Pesquisar por Fornecedor ou Histórico..." 
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
                <TableCell sx={{ fontWeight: 'bold' }}>Fornecedor</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Histórico</TableCell>
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
                  to="/contas-a-pagar/baixa-manual"
                  style={{ textDecoration: 'none' }}
                >
                  <TableCell>{getStatusChip(row.status)}</TableCell>
                  <TableCell>{row.vencimento}</TableCell>
                  <TableCell>{row.fornecedor}</TableCell>
                  <TableCell>{row.historico}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold', color: 'error.main' }}>
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