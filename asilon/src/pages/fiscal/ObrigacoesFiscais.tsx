// src/pages/fiscal/ObrigacoesFiscais.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import DownloadIcon from '@mui/icons-material/Download';
import FolderZipIcon from '@mui/icons-material/FolderZip';

export const ObrigacoesFiscais: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>Obrigações Acessórias</Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Geração de arquivos magnéticos para transmissão ao Fisco.
      </Typography>

      <Grid container spacing={3}>
        {/* EFD REINF */}
        {/* CORREÇÃO: Removido 'item' e usado 'size' */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FolderZipIcon color="error" sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                   <Typography variant="h6" fontWeight="bold">EFD Reinf</Typography>
                   <Typography variant="caption">Retenções e Outras Informações</Typography>
                </Box>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" sx={{ mb: 2 }}>
                Eventos periódicos (R-2010, R-2020) referentes a serviços tomados e prestados.
              </Typography>
              <Button variant="contained" fullWidth startIcon={<DownloadIcon />}>Gerar XMLs (Série R-2000)</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* SPED FISCAL */}
        {/* CORREÇÃO: Removido 'item' e usado 'size' */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FolderZipIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                   <Typography variant="h6" fontWeight="bold">SPED Fiscal / Contribuições</Typography>
                   <Typography variant="caption">ICMS/IPI e PIS/COFINS</Typography>
                </Box>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" sx={{ mb: 2 }}>
                Arquivo de texto contendo a escrituração fiscal digital das operações do período.
              </Typography>
              <Button variant="contained" fullWidth startIcon={<DownloadIcon />}>Gerar Arquivo TXT</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};