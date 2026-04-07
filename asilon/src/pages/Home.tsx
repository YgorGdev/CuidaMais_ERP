// src/pages/Home.tsx
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Paper 
} from '@mui/material';

// Importa o contador e os ícones
import { CountdownTimer } from '../components/CountdownTimer';
import CampaignIcon from '@mui/icons-material/Campaign';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EventIcon from '@mui/icons-material/Event';

export function HomePage() {
  return (
    <Box> 
      {/* Títulos */}
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 300 }}>
        Bem-vindo ao portal <span style={{ fontWeight: 700, color: '#1E88E5' }}>CuidaMais</span>
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Fique por dentro das últimas notícias e comunicados importantes.
      </Typography>

      {/* --- 1. DESTAQUE: REFORMA TRIBUTÁRIA (TELA CHEIA) --- */}
      <Paper 
        elevation={3}
        sx={{ 
          p: 3, 
          backgroundColor: '#fff4e5', // CORRIGIDO: Fundo Laranja Claro (Legível)
          color: '#2e1a00',           // CORRIGIDO: Texto Marrom Escuro (Contraste alto)
          borderLeft: 4, 
          borderColor: 'warning.main',
          mb: 3 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <WarningAmberIcon color="warning" sx={{ mr: 1.5 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Atenção: Reforma Tributária 2026
          </Typography>
        </Box>
        {/* Removido 'text.secondary' para garantir que o texto fique escuro e legível */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          Fique atento às novas regras de tributação (IBS e CBS). O setor de saúde (CNAE 8711-5) 
          terá um regime diferenciado. O Módulo Financeiro será atualizado.
        </Typography>
        
        <CountdownTimer />
      </Paper>

      {/* --- 2. MURAL DE NOTÍCIAS (TELA CHEIA) --- */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>Mural de Notícias</Typography>
          <List sx={{ p: 0 }}>
            {/* Notícia 1 */}
            <ListItem alignItems="flex-start" sx={{ p: 0, pt: 1 }}>
              <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}><CampaignIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary="Campanha de Vacinação (Gripe)"
                secondary="Atenção: A campanha de vacinação contra a gripe H1N1 ocorrerá na próxima sexta-feira, dia 21/11, no pátio central. Todos os residentes e funcionários devem participar."
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ my: 1.5 }} />

            {/* Notícia 2 */}
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}><CampaignIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary="Nova Ala de Fisioterapia Inaugurada"
                secondary="A nova ala de fisioterapia foi inaugurada! O agendamento de horários já pode ser feito através do módulo Saúde > Agenda. Agende já!"
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ my: 1.5 }} />
            
            {/* Notícia 3 */}
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}><EventIcon /></ListItemIcon>
              <ListItemText
                primary="Lembrete: Reunião de Equipe"
                secondary="Reunião mensal de alinhamento com a equipe de enfermagem e cuidadores. Quarta-feira, 19/11, às 10h na sala de conferências. Sua presença é fundamental."
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ my: 1.5 }} />

            {/* Notícia 4 (Nova) */}
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}><CampaignIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary="Novo Fornecedor de Suprimentos (Higiene)"
                secondary="A partir de 01/12, a empresa 'LimpezaTotal' será nossa nova fornecedora de produtos de higiene. Os pedidos devem ser feitos no Módulo de Compras."
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ my: 1.5 }} />

            {/* Notícia 5 (Nova) */}
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}><EventIcon /></ListItemIcon>
              <ListItemText
                primary="Atualização do Sistema Agendada"
                secondary="O sistema passará por uma atualização de rotina neste sábado (22/11) às 23:00. A previsão é de 30 minutos de instabilidade. Agradecemos a compreensão."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      
    </Box>
  );
}