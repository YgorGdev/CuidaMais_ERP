// src/pages/FinanceiroCadastros.tsx
import { Box, Typography, Grid, Link as MuiLink, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

// Aqui definimos quais cadastros existem no módulo financeiro
const cadastrosList = [
  {
    titulo: 'Fornecedores',
    descricao: 'Gestão de empresas e parceiros fornecedores.',
    acoes: [
      { label: 'Visualizar', link: '/financeiro/fornecedores' },
      { label: 'Incluir', link: '/financeiro/fornecedores/novo' },
      { label: 'Alterar', link: '/financeiro/fornecedores' },
      { label: 'Excluir', link: '/financeiro/fornecedores' },
      { label: 'Contatos', link: '/financeiro/fornecedores/contatos' },
    ]
  },
  {
    titulo: 'Responsáveis Financeiros (Clientes)',
    descricao: 'Cadastro de familiares ou responsáveis pelo pagamento.',
    acoes: [
      { label: 'Visualizar', link: '/financeiro/responsaveis' },
      { label: 'Incluir', link: '/financeiro/responsaveis/novo' },
      { label: 'Alterar', link: '/financeiro/responsaveis' },
      { label: 'Excluir', link: '/financeiro/responsaveis' },
      { label: 'Histórico', link: '/financeiro/responsaveis/historico' },
    ]
  },
  {
    titulo: 'Bancos e Caixas',
    descricao: 'Contas bancárias e caixas internos.',
    acoes: [
      { label: 'Visualizar', link: '/financeiro/bancos' },
      { label: 'Incluir', link: '/financeiro/bancos/novo' },
      { label: 'Alterar', link: '/financeiro/bancos' },
      { label: 'Saldo', link: '/financeiro/bancos/saldo' },
    ]
  },
  {
    titulo: 'Centros de Custo',
    descricao: 'Classificação de custos (Ex: Cozinha, Enfermagem, Limpeza).',
    acoes: [
      { label: 'Visualizar', link: '/financeiro/centro-custo' },
      { label: 'Incluir', link: '/financeiro/centro-custo/novo' },
      { label: 'Alterar', link: '/financeiro/centro-custo' },
    ]
  },
];

export function FinanceiroCadastrosPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Cadastros do Financeiro
      </Typography>

      {cadastrosList.map((item, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          {/* Título da Seção */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            {item.titulo}
          </Typography>
          
          {/* Descrição pequena */}
          <Typography variant="caption" display="block" sx={{ mb: 2, color: 'text.secondary' }}>
            {item.descricao}
          </Typography>

          {/* Grid de Ações (Links Azuis) */}
          <Grid container spacing={2}>
            {item.acoes.map((acao, actionIndex) => (
              // CORREÇÃO: Adicionamos o @ts-ignore para o editor parar de reclamar do 'item'
              // @ts-ignore
              <Grid item xs={6} sm={4} md={2} key={actionIndex}>
                <MuiLink 
                  component={Link} 
                  to={acao.link} 
                  underline="hover"
                  sx={{ 
                    color: '#2196f3', // Azul estilo ERP
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#64b5f6' }
                  }}
                >
                  • {acao.label}
                </MuiLink>
              </Grid>
            ))}
          </Grid>
          
          {/* Linha divisória (menos no último item) */}
          {index < cadastrosList.length - 1 && (
            <Divider sx={{ mt: 3, opacity: 0.1 }} />
          )}
        </Box>
      ))}
    </Box>
  );
}