import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const rows = [
  { desc: '(=) RECEITA TOTAL', valor: 150000, tipo: 'total' },
  { desc: '(-) Impostos', valor: -15000, tipo: 'sub' },
  { desc: '(=) RECEITA LÍQUIDA', valor: 135000, tipo: 'total' },
  { desc: '(-) Despesas', valor: -80000, tipo: 'despesa' },
  { desc: '(=) RESULTADO', valor: 55000, tipo: 'final' },
];

export function DRE() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>D.R.E. Gerencial</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead><TableRow><TableCell>Descrição</TableCell><TableCell align="right">Valor (R$)</TableCell></TableRow></TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell sx={{ fontWeight: row.tipo === 'total' ? 'bold' : 'normal' }}>{row.desc}</TableCell>
                <TableCell align="right">{row.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}