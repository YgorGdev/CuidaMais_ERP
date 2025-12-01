// src/pages/FornecedorLista.tsx
import { useState } from 'react'; // <-- IMPORTANTE: Importar useState
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
import PrintIcon from '@mui/icons-material/Print';

// Dados Fictícios
const rows = [
  { id: 1, codigo: '000001', loja: '01', razao: 'DISTRIBUIDORA DE MEDICAMENTOS LTDA', cnpj: '12.345.678/0001-90', municipio: 'SÃO PAULO', uf: 'SP' },
  { id: 2, codigo: '000002', loja: '01', razao: 'PADARIA DO SEU JOÃO', cnpj: '98.765.432/0001-10', municipio: 'ANÁPOLIS', uf: 'GO' },
  { id: 3, codigo: '000003', loja: '01', razao: 'FARMÁCIA PAGUE MENOS', cnpj: '11.222.333/0001-55', municipio: 'GOIÂNIA', uf: 'GO' },
  { id: 4, codigo: '000004', loja: '02', razao: 'LIMPEZA TOTAL COMÉRCIO', cnpj: '44.555.666/0001-99', municipio: 'BRASÍLIA', uf: 'DF' },
];

export function FornecedorLista() {
  // --- 1. ESTADO PARA A BUSCA ---
  const [busca, setBusca] = useState('');

  // --- 2. LÓGICA DE FILTRO ---
  // Criamos uma nova lista filtrada baseada no que foi digitado
  const linhasFiltradas = rows.filter((row) => {
    // Normaliza o texto para minúsculo para facilitar a busca
    const termo = busca.toLowerCase();
    
    return (
      row.razao.toLowerCase().includes(termo) || // Busca por Razão Social
      row.cnpj.includes(termo) ||                // Busca por CNPJ
      row.codigo.includes(termo) ||              // Busca por Código
      row.municipio.toLowerCase().includes(termo)// Busca por Município
    );
  });

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
        Fornecedores
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            component={Link}
            to="/financeiro/fornecedores/novo"
            sx={{ fontWeight: 'bold' }}
          >
            Incluir
          </Button>

          <Button 
            variant="outlined" 
            startIcon={<EditIcon />}
            component={Link}
            to="/financeiro/fornecedores/novo"
          >
            Alterar
          </Button>

          <Button 
            variant="outlined" 
            startIcon={<VisibilityIcon />}
            component={Link}
            to="/financeiro/fornecedores/novo"
          >
            Visualizar
          </Button>

          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Excluir</Button>
          
          <Box sx={{ flexGrow: 1 }} /> 
          
          <Tooltip title="Imprimir Relatório">
            <IconButton><PrintIcon /></IconButton>
          </Tooltip>
        </Box>

        {/* --- CAMPO DE PESQUISA CONECTADO AO ESTADO --- */}
        <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
           <TextField 
            size="small" 
            placeholder="Pesquisar por Razão, CNPJ ou Código..." 
            fullWidth
            value={busca} // O valor vem do estado
            onChange={(e) => setBusca(e.target.value)} // Atualiza o estado ao digitar
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
          />
          <Button variant="contained" color="secondary" startIcon={<FilterListIcon />}>
            Filtrar
          </Button>
        </Box>

        <TableContainer sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Código</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Loja</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Razão Social</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>CNPJ / CPF</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Município</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>UF</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {/* --- AQUI USAMOS A LISTA FILTRADA --- */}
              {linhasFiltradas.length > 0 ? (
                linhasFiltradas.map((row) => (
                  <TableRow 
                    key={row.id} 
                    hover 
                    sx={{ cursor: 'pointer' }}
                    component={Link}
                    to="/financeiro/fornecedores/novo"
                    style={{ textDecoration: 'none' }}
                  >
                    <TableCell>{row.codigo}</TableCell>
                    <TableCell>{row.loja}</TableCell>
                    <TableCell>{row.razao}</TableCell>
                    <TableCell>{row.cnpj}</TableCell>
                    <TableCell>{row.municipio}</TableCell>
                    <TableCell>{row.uf}</TableCell>
                    <TableCell>
                      <Box 
                        component="span" 
                        sx={{ 
                          backgroundColor: 'success.main', 
                          color: 'white', 
                          borderRadius: 1, 
                          px: 1, 
                          fontSize: '0.75rem' 
                        }}
                      >
                        ATIVO
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                // Caso a busca não retorne nada
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      Nenhum registro encontrado para "{busca}"
                    </Typography>
                  </TableCell>
                </TableRow>
              )}

            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
          Exibindo {linhasFiltradas.length} de {rows.length} registros
        </Typography>
      </Paper>
    </Box>
  );
}