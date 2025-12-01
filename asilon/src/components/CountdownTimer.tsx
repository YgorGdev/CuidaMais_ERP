// src/components/CountdownTimer.tsx
import { useState, useEffect } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material'; // Importa useTheme

// --- NOSSA DATA FICTÍCIA ---
const targetDate = new Date('2026-01-01T00:00:00').getTime();
// --------------------------

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const calculateTimeLeft = (): TimeLeft | null => {
  const difference = targetDate - new Date().getTime();

  if (difference > 0) {
    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return null;
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const theme = useTheme(); // Hook para acessar o tema

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <Typography>O prazo da reforma chegou!</Typography>;
  }

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 1.5, 
        textAlign: 'center', 
        minWidth: 60, 
        // --- MUDANÇA AQUI: Cor de fundo neutra ---
        backgroundColor: theme.palette.grey[700], // Um cinza mais escuro do tema
        color: 'white' // Mantém o texto branco para contraste
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {value.toString().padStart(2, '0')}
      </Typography>
      <Typography variant="caption">{label}</Typography>
    </Paper>
  );

  return (
    <Box sx={{ display: 'flex', gap: 2, my: 2, justifyContent: 'center' }}>
      <TimeBox value={timeLeft.dias} label="Dias" />
      <TimeBox value={timeLeft.horas} label="Horas" />
      <TimeBox value={timeLeft.minutos} label="Minutos" />
      <TimeBox value={timeLeft.segundos} label="Segundos" />
    </Box>
  );
}