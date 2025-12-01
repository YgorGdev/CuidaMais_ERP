// src/pages/financeiro/FaturamentoContrato.tsx
import { 
  Box, Paper, Typography, TextField, Button, Divider, FormControl, InputLabel, Select, MenuItem 
} from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { Link } from 'react-router-dom';
import { Save, Close } from '@mui/icons-material'; // Removemos os ícones não usados

const residentesMock = [{ id: 1, nome: 'JOÃO DA SILVA' }, { id: 2, nome: 'MARIA OLIVEIRA' }];

export function FaturamentoContrato() {
  // Removido o useState(tabValue) e o handleTabChange, pois esta tela não usa abas.

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Cadastro de Contrato de Mensalidade</Typography>
        <Box>
          <Button variant="contained" color="success" startIcon={<Save />} sx={{ mr: 1, fontWeight: 'bold' }}>Confirmar</Button>
          <Button variant="outlined" color="error" startIcon={<Close />} component={Link} to="/faturamento/contratos" sx={{ fontWeight: 'bold' }}>Fechar</Button>
        </Box>
      </Box>

      <Paper sx={{ width: '100%', mb: 2, p: 3 }}>
        <Grid container spacing={2}>
          {/* Linha 1 */}
          {/* @ts-ignore */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Residente</InputLabel>
              <Select label="Residente" defaultValue="">
                {residentesMock.map(r => <MenuItem key={r.id} value={r.id}>{r.nome}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          {/* @ts-ignore */}<Grid item xs={12} md={3}><TextField fullWidth label="Código do Contrato" size="small" disabled defaultValue="C0001" /></Grid>
          {/* @ts-ignore */}<Grid item xs={12} md={3}><TextField fullWidth label="Data de Início" type="date" size="small" InputLabelProps={{ shrink: true }} /></Grid>

          {/* Linha 2: Valores */}
          {/* @ts-ignore */}<Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>
          {/* @ts-ignore */}<Grid item xs={12} md={4}><TextField fullWidth label="Valor Base Mensal (R$)" required size="small" placeholder="3.500,00" /></Grid>
          {/* @ts-ignore */}<Grid item xs={12} md={3}><TextField fullWidth label="Dia de Vencimento" size="small" placeholder="Ex: 10" /></Grid>
          {/* @ts-ignore */}<Grid item xs={12} md={5}>
            <FormControl fullWidth size="small">
              <InputLabel>Índice de Reajuste</InputLabel>
              <Select label="Índice de Reajuste" defaultValue="IGPM"><MenuItem value="IGPM">IGPM (Padrão)</MenuItem><MenuItem value="IPCA">IPCA</MenuItem></Select>
            </FormControl>
          </Grid>

          {/* Linha 3: Detalhes */}
          {/* @ts-ignore */}<Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>
          {/* @ts-ignore */}<Grid item xs={12}><TextField fullWidth label="Observações Legais" multiline rows={2} size="small" /></Grid>

        </Grid>
      </Paper>
    </Box>
  );
}