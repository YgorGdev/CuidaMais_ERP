// src/main.tsx
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppThemeProvider } from './contexts/ThemeContext';

// Layout e Home
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';

// --- MÓDULO SAÚDE ---
import { DashboardSaude as DashboardPage } from './pages/saude/DashboardSaude';
import { Residentes as ResidentesPage } from './pages/saude/Residentes';
import { CadastroResidente } from './pages/saude/CadastroResidente';
import { DetalheResidente } from './pages/saude/DetalheResidente';
import { MedicamentosPage } from './pages/saude/Medicamentos';
import { AgendaVisitas } from './pages/saude/AgendaVisitas';
import { SinaisVitais } from './pages/saude/SinaisVitais';
import { EvolucaoDiaria } from './pages/saude/EvolucaoDiaria'; // Nova

// --- MÓDULO NUTRIÇÃO ---
import { CardapioSemanal } from './pages/nutricao/CardapioSemanal'; 

// --- MÓDULO FISCAL ---
import { DashboardFiscal } from './pages/fiscal/DashboardFiscal';
import { NotasFiscaisLista } from './pages/fiscal/NotasFiscaisLista';
import { TesLista } from './pages/fiscal/TesLista';
import { NotasEntrada } from './pages/fiscal/NotasEntrada';
import { NotasSaida } from './pages/fiscal/NotasSaida';
import { ObrigacoesFiscais } from './pages/fiscal/ObrigacoesFiscais';
import { ApuracaoImpostos } from './pages/fiscal/ApuracaoImpostos';
import { NaturezasOperacao } from './pages/fiscal/NaturezasOperacao';
import { CteEntrada } from './pages/fiscal/CteEntrada';
import { Retencoes } from './pages/fiscal/Retencoes';
import { ManifestoDestinatario } from './pages/fiscal/ManifestoDestinatario';
import { LivroInventario } from './pages/fiscal/LivroInventario';

// --- MÓDULO SUPRIMENTOS (ATUALIZADO) ---
import { EstoquePage } from './pages/suprimentos/Estoque';
import { ComprasPage } from './pages/suprimentos/Compras';
import { DashboardSuprimentos } from './pages/suprimentos/DashboardSuprimentos';
import { MovimentacaoEstoque } from './pages/suprimentos/MovimentacaoEstoque';

// --- ADMIN ---
import { UsuariosPage } from './pages/admin/Usuarios';

// --- FINANCEIRO E CONTÁBIL ---
import { ContasAReceberPage } from './pages/financeiro/ContasAReceber';
import { ContasAPagarPage } from './pages/financeiro/ContasAPagar';
import { ReceberLancamento } from './pages/financeiro/ReceberLancamento';
import { PagarLancamento } from './pages/financeiro/PagarLancamento';
import { RotinaBaixaManual } from './pages/financeiro/RotinaBaixaManual';
import { RotinaConciliacao } from './pages/financeiro/RotinaConciliacao';
import { RotinaRelatorios } from './pages/financeiro/RotinaRelatorios';
import { FinanceiroCadastrosPage } from './pages/financeiro/FinanceiroCadastros';
import { FornecedorLista } from './pages/financeiro/FornecedorLista';
import { FornecedorCadastro } from './pages/financeiro/FornecedorCadastro';
import { ClienteLista } from './pages/financeiro/ClienteLista';
import { ClienteCadastro } from './pages/financeiro/ClienteCadastro';
import { BancoLista } from './pages/financeiro/BancoLista';
import { BancoCadastro } from './pages/financeiro/BancoCadastro';
import { MoedaLista } from './pages/financeiro/MoedaLista';
import { MoedaCadastro } from './pages/financeiro/MoedaCadastro';
import { NaturezaLista } from './pages/financeiro/NaturezaLista';
import { NaturezaCadastro } from './pages/financeiro/NaturezaCadastro';
import { CentroCustoLista } from './pages/financeiro/CentroCustoLista';
import { CentroCustoCadastro } from './pages/financeiro/CentroCustoCadastro';
import { GeracaoMensalidade, EmissaoBoletos } from './pages/financeiro/FaturamentoPaginas';
import { TransferenciaContas, MovimentoCaixinha } from './pages/financeiro/TesourariaPaginas';
import { FluxoCaixa } from './pages/financeiro/FluxoCaixa';
import { DRE } from './pages/financeiro/DRE';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <HomePage /> },
      
      // --- SAÚDE ---
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/residentes', element: <ResidentesPage /> },
      { path: '/residentes/novo', element: <CadastroResidente /> },
      { path: '/residentes/:id', element: <DetalheResidente /> },
      { path: '/residentes/visitas', element: <AgendaVisitas /> },
      
      { path: '/saude/sinais-vitais', element: <SinaisVitais /> },
      { path: '/saude/evolucao', element: <EvolucaoDiaria /> },
      
      { path: '/medicamentos', element: <MedicamentosPage /> },

      // --- NUTRIÇÃO ---
      { path: '/nutricao/cardapios', element: <CardapioSemanal /> },
      { path: '/nutricao/dietas', element: <div>Tela de Dietas em Construção</div> }, 

      // --- FISCAL ---
      { path: '/fiscal/dashboard', element: <DashboardFiscal /> },
      { path: '/fiscal/notas', element: <NotasFiscaisLista /> },
      { path: '/fiscal/tes', element: <TesLista /> },
      { path: '/fiscal/notas-entrada', element: <NotasEntrada /> },
      { path: '/fiscal/notas-saida', element: <NotasSaida /> },
      { path: '/fiscal/obrigacoes', element: <ObrigacoesFiscais /> },
      { path: '/fiscal/apuracao-iss', element: <ApuracaoImpostos /> },
      
      // Rotas Fiscais Avançadas
      { path: '/fiscal/retencoes', element: <Retencoes /> }, 
      { path: '/fiscal/manifesto', element: <ManifestoDestinatario /> }, 
      { path: '/fiscal/inventario', element: <LivroInventario /> },
      { path: '/fiscal/naturezas', element: <NaturezasOperacao /> },
      { path: '/fiscal/cte', element: <CteEntrada /> },
      { path: '/fiscal/tes', element: <TesLista /> },


      // --- SUPRIMENTOS ---
      { path: '/suprimentos/dashboard', element: <DashboardSuprimentos /> },
      { path: '/estoque', element: <EstoquePage /> },
      { path: '/compras', element: <ComprasPage /> },
      { path: '/suprimentos/movimentacao', element: <MovimentacaoEstoque /> }, 
      
      // --- ADMIN ---
      { path: '/usuarios', element: <UsuariosPage /> },

      // --- FINANCEIRO ---
      { path: '/faturamento/gerar-mensalidade', element: <GeracaoMensalidade /> },
      { path: '/faturamento/boletos', element: <EmissaoBoletos /> },
      { path: '/tesouraria/transferencia', element: <TransferenciaContas /> },
      { path: '/tesouraria/caixinha', element: <MovimentoCaixinha /> },
      { path: '/gerencial/fluxo-caixa', element: <FluxoCaixa /> },
      { path: '/gerencial/dre', element: <DRE /> },
      { path: '/contas-a-receber/lancamentos', element: <ContasAReceberPage /> }, 
      { path: '/contas-a-receber/lancamentos/novo', element: <ReceberLancamento /> },
      { path: '/contas-a-receber/baixa-manual', element: <RotinaBaixaManual /> },
      { path: '/contas-a-receber/conciliacao', element: <RotinaConciliacao /> },
      { path: '/contas-a-receber/relatorios', element: <RotinaRelatorios /> },
      { path: '/contas-a-pagar/lancamentos', element: <ContasAPagarPage /> },
      { path: '/contas-a-pagar/lancamentos/novo', element: <PagarLancamento /> },
      { path: '/contas-a-pagar/baixa-manual', element: <RotinaBaixaManual /> },
      { path: '/contas-a-pagar/conciliacao', element: <RotinaConciliacao /> },
      { path: '/contas-a-pagar/relatorios', element: <RotinaRelatorios /> },
      { path: '/financeiro/cadastros', element: <FinanceiroCadastrosPage /> },
      { path: '/financeiro/fornecedores', element: <FornecedorLista /> },
      { path: '/financeiro/fornecedores/novo', element: <FornecedorCadastro /> },
      { path: '/financeiro/clientes', element: <ClienteLista /> },
      { path: '/financeiro/clientes/novo', element: <ClienteCadastro /> },
      { path: '/financeiro/bancos', element: <BancoLista /> },
      { path: '/financeiro/bancos/novo', element: <BancoCadastro /> },
      { path: '/financeiro/moedas', element: <MoedaLista /> },
      { path: '/financeiro/moedas/novo', element: <MoedaCadastro /> },
      { path: '/financeiro/naturezas', element: <NaturezaLista /> },
      { path: '/financeiro/naturezas/novo', element: <NaturezaCadastro /> },
      { path: '/financeiro/centro-custo', element: <CentroCustoLista /> },
      { path: '/financeiro/centro-custo/novo', element: <CentroCustoCadastro /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <RouterProvider router={router} />
  </AppThemeProvider>
);