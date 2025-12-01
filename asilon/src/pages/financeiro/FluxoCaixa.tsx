import { Box, Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function FluxoCaixa() {
  const data = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      { label: 'Receitas', data: [12000, 19000, 3000, 5000], backgroundColor: '#4caf50' },
      { label: 'Despesas', data: [8000, 12000, 15000, 4000], backgroundColor: '#f44336' },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' as const } },
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Fluxo de Caixa</Typography>
      <Paper sx={{ p: 3, height: 400 }}><Bar options={options} data={data} /></Paper>
    </Box>
  );
}