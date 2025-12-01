// src/components/OcupacaoChart.tsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography, Box, useTheme } from '@mui/material';

// Registrar os componentes do Chart.js que o Doughnut usa
ChartJS.register(ArcElement, Tooltip, Legend);

export function OcupacaoChart() {
  const theme = useTheme(); // Pega o tema (dark)

  // Dados para o Chart.js
  const data = {
    labels: ['Leitos Ocupados', 'Leitos Livres'],
    datasets: [
      {
        label: 'Leitos',
        data: [45, 15], // Os mesmos dados
        backgroundColor: [
          '#1E88E5', // Azul (cor primária)
          '#455A64', // Cinza
        ],
        borderColor: [
          theme.palette.background.paper, // Borda do gráfico
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Importante para o container
    plugins: {
      legend: {
        position: 'bottom' as const, // Melhor no fundo para um donut
        labels: {
          color: theme.palette.text.primary, // Cor da legenda no dark mode
        },
      },
      tooltip: {
         backgroundColor: theme.palette.background.paper,
         titleColor: theme.palette.text.primary,
         bodyColor: theme.palette.text.secondary,
      }
    },
  };

  return (
    // O Chart.js precisa de um container com altura definida.
    // O componente HomePage.tsx já dá o título.
    <Box>
      <Typography variant="h6" component="div" gutterBottom>
        Ocupação de Leitos
      </Typography>
      <Box sx={{ height: 300, width: '100%', position: 'relative' }}>
        <Doughnut data={data} options={options} />
      </Box>
    </Box>
  );
}