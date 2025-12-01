// src/components/Layout.tsx
import { useState, useEffect, type MouseEvent } from 'react';
import { 
  Box, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Drawer, 
  List, 
  ListItemButton,
  ListItemIcon, 
  ListItemText, 
  Button,
  Menu,
  MenuItem,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  Collapse,
  Avatar
} from '@mui/material';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import { useAppTheme } from '../contexts/ThemeContext';

// --- ÍCONES GERAIS ---
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MedicationIcon from '@mui/icons-material/Medication';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'; 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; 
import BarChartIcon from '@mui/icons-material/BarChart'; 
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; 
import PrintIcon from '@mui/icons-material/Print'; 
import ExpandLess from '@mui/icons-material/ExpandLess'; 
import ExpandMore from '@mui/icons-material/ExpandMore'; 
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// --- ÍCONES SAÚDE ---
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'; 
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'; 
import EventIcon from '@mui/icons-material/Event'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import EditNoteIcon from '@mui/icons-material/EditNote'; 
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'; 

// --- ÍCONES FISCAL ---
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DescriptionIcon from '@mui/icons-material/Description';
import CalculateIcon from '@mui/icons-material/Calculate'; 
import UploadFileIcon from '@mui/icons-material/UploadFile'; 
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'; 
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; 
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'; // Para Movimentação de Estoque

// --- ÍCONES FINANCEIRO/CADASTROS ---
import GroupIcon from '@mui/icons-material/Group'; 
import CategoryIcon from '@mui/icons-material/Category'; 
import DomainIcon from '@mui/icons-material/Domain'; 
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PostAddIcon from '@mui/icons-material/PostAdd'; 
import PriceCheckIcon from '@mui/icons-material/PriceCheck'; 
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'; 
import SummarizeIcon from '@mui/icons-material/Summarize'; 
import MoneyOffIcon from '@mui/icons-material/MoneyOff'; 

const drawerWidth = 270; 
const linkColor = '#1565c0'; 

type Modulo = 'Saude' | 'Financeiro' | 'Faturamento' | 'Suprimentos' | 'Configurador' | 'Fiscal';

const modulosMap: Record<Modulo, string> = {
  Saude: 'Saúde e Cuidado',
  Faturamento: 'Gestão de Faturamento', 
  Financeiro: 'Gestão Financeira',
  Suprimentos: 'Estoque e Compras',
  Configurador: 'Configurações',
  Fiscal: 'Fiscal / Tributário',
};

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { toggleTheme, mode } = useAppTheme();

  const [modulo, setModulo] = useState<Modulo | null>(null); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenuModulo = Boolean(anchorEl); 

  // --- ESTADOS DOS SUBMENUS ---
  const [openCadastros, setOpenCadastros] = useState(false);
  const [openFaturamento, setOpenFaturamento] = useState(true); 
  const [openCR, setOpenCR] = useState(false);
  const [openCP, setOpenCP] = useState(false);
  const [openTesouraria, setOpenTesouraria] = useState(false); 
  const [openGerencial, setOpenGerencial] = useState(false); 
  const [openResidentes, setOpenResidentes] = useState(true);
  const [openCuidados, setOpenCuidados] = useState(false);
  const [openNutricao, setOpenNutricao] = useState(false);
  const [openDocFiscais, setOpenDocFiscais] = useState(false);
  const [openApuracao, setOpenApuracao] = useState(false);
  const [openCadastrosFiscais, setOpenCadastrosFiscais] = useState(false);


  // Lógica: Força volta para Home no Recarregamento (conforme pedido)
  useEffect(() => {
    if (location.pathname !== '/' && modulo === null) {
       // navigate('/'); // Deixando comentado para permitir deep-linking em desenvolvimento
    }
  }, []);

  // Sincroniza o Menu Lateral com a URL atual
  useEffect(() => {
    const path = location.pathname;

    if (path === '/') setModulo(null);
    else if (path.startsWith('/fiscal')) setModulo('Fiscal');
    else if (path.startsWith('/dashboard') || path.startsWith('/residentes') || path.startsWith('/medicamentos') || path.startsWith('/saude') || path.startsWith('/nutricao')) setModulo('Saude');
    // ATUALIZADO: Inclui /suprimentos/dashboard e /suprimentos/movimentacao
    else if (path.startsWith('/estoque') || path.startsWith('/compras') || path.startsWith('/suprimentos')) setModulo('Suprimentos');
    else if (path.startsWith('/usuarios')) setModulo('Configurador');
    else if (path.startsWith('/faturamento')) setModulo('Faturamento');
    else setModulo('Financeiro');
  }, [location.pathname]);


  const handleClickModulo = (event: MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };
  const handleCloseModulo = () => { setAnchorEl(null); };
  
  const handleSelectModule = (targetModulo: Modulo) => { 
      setModulo(targetModulo); 
      handleCloseModulo(); 
      
      if(targetModulo === 'Saude') navigate('/dashboard');
      if(targetModulo === 'Financeiro') navigate('/gerencial/fluxo-caixa');
      if(targetModulo === 'Fiscal') navigate('/fiscal/dashboard');
      // ATUALIZADO: Navega para o Dashboard de Suprimentos
      if(targetModulo === 'Suprimentos') navigate('/suprimentos/dashboard'); 
      if(targetModulo === 'Faturamento') navigate('/faturamento/gerar-mensalidade');
  };

  const toggleCadastros = () => setOpenCadastros(!openCadastros);
  const toggleFaturamento = () => setOpenFaturamento(!openFaturamento);
  const toggleCR = () => setOpenCR(!openCR); 
  const toggleCP = () => setOpenCP(!openCP);
  const toggleTesouraria = () => setOpenTesouraria(!openTesouraria);
  const toggleGerencial = () => setOpenGerencial(!openGerencial);
  const toggleResidentes = () => setOpenResidentes(!openResidentes);
  const toggleCuidados = () => setOpenCuidados(!openCuidados);
  const toggleNutricao = () => setOpenNutricao(!openNutricao);
  const toggleDocFiscais = () => setOpenDocFiscais(!openDocFiscais);
  const toggleApuracao = () => setOpenApuracao(!openApuracao);
  const toggleCadastrosFiscais = () => setOpenCadastrosFiscais(!openCadastrosFiscais);


  const subLinkStyle = { 
    pl: 4, 
    '&.Mui-selected': { bgcolor: 'rgba(21, 101, 192, 0.08)', borderRight: `3px solid ${linkColor}` }
  };
  
  const headerStyle = { 
    fontWeight: 'bold', 
    color: theme.palette.mode === 'dark' ? '#90caf9' : '#1565c0' 
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* --- TOPO --- */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} enableColorOnDark>
        <Toolbar>
          <ApartmentIcon sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }} />
          <Typography variant="h6" noWrap component={Link} to="/" sx={{ fontWeight: 'bold', letterSpacing: 1, color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
            ASILON
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <Box textAlign="right" mr={1}>
                <Typography variant="body2" fontWeight="bold">Gustavo Borges</Typography>
                <Typography variant="caption" display="block">Administrador</Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>GB</Avatar>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mr: 1, ml: 1, bgcolor: 'rgba(255,255,255,0.3)' }} />
          <Box>
            <IconButton onClick={toggleTheme} color="inherit">{mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}</IconButton>
            <IconButton color="inherit" title="Notificações"><NotificationsIcon /></IconButton>
            <IconButton color="inherit" title="Log Off"><LogoutIcon /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* --- MENU LATERAL --- */}
      <Drawer
        sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar /> 
        
        <Box sx={{ p: 2, bgcolor: theme.palette.background.default }}>
          <Typography variant="caption" color="textSecondary" gutterBottom>MÓDULO ATUAL</Typography>
          <Button fullWidth variant="outlined" color="primary" onClick={handleClickModulo} startIcon={<MenuIcon />} endIcon={<ExpandMore />} sx={{ justifyContent: 'space-between', textTransform: 'none', fontSize: '0.95rem', py: 1 }}>
            {modulo ? modulosMap[modulo] : 'Tela Inicial'}
          </Button>
          
          <Menu anchorEl={anchorEl} open={openMenuModulo} onClose={handleCloseModulo} PaperProps={{ sx: { width: 220 } }}>
            <MenuItem onClick={() => handleSelectModule('Saude')} selected={modulo === 'Saude'}><ListItemIcon><MedicationIcon fontSize="small"/></ListItemIcon> Saúde</MenuItem>
            <MenuItem onClick={() => handleSelectModule('Faturamento')} selected={modulo === 'Faturamento'}><ListItemIcon><RequestQuoteIcon fontSize="small"/></ListItemIcon> Faturamento</MenuItem> 
            <MenuItem onClick={() => handleSelectModule('Financeiro')} selected={modulo === 'Financeiro'}><ListItemIcon><AttachMoneyIcon fontSize="small"/></ListItemIcon> Financeiro</MenuItem>
            <MenuItem onClick={() => handleSelectModule('Fiscal')} selected={modulo === 'Fiscal'}><ListItemIcon><ReceiptLongIcon fontSize="small"/></ListItemIcon> Fiscal</MenuItem> 
            <MenuItem onClick={() => handleSelectModule('Suprimentos')} selected={modulo === 'Suprimentos'}><ListItemIcon><InventoryIcon fontSize="small"/></ListItemIcon> Suprimentos</MenuItem>
            <Divider />
            <MenuItem onClick={() => handleSelectModule('Configurador')} selected={modulo === 'Configurador'}><ListItemIcon><ManageAccountsIcon fontSize="small"/></ListItemIcon> Configurações</MenuItem>
          </Menu>
        </Box>
        
        <Box sx={{ px: 2, mb: 1 }}>
            <TextField fullWidth variant="outlined" size="small" placeholder="Buscar no menu..." InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>) }} />
        </Box>
        <Divider />

        <Box sx={{ overflow: 'auto' }}>
        <List component="nav" dense>
            
            {modulo === null && (
              <ListItemButton component={Link} to="/">
                 <ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="Voltar ao Início" />
              </ListItemButton>
            )}

            {/* === FATURAMENTO === */}
            {modulo === 'Faturamento' && (
              <>
                <ListItemButton onClick={toggleFaturamento}>
                  <ListItemText primary="Rotinas Mensais" primaryTypographyProps={{ style: headerStyle }} />
                  {openFaturamento ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
                </ListItemButton>
                <Collapse in={openFaturamento} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/faturamento/gerar-mensalidade" selected={location.pathname === '/faturamento/gerar-mensalidade'}>
                        <ListItemIcon><RequestQuoteIcon fontSize="small"/></ListItemIcon><ListItemText primary="Gerar Mensalidade" />
                    </ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/faturamento/boletos" selected={location.pathname === '/faturamento/boletos'}>
                        <ListItemIcon><PrintIcon fontSize="small"/></ListItemIcon><ListItemText primary="Emissão de Boletos" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            )}

            {/* === FINANCEIRO === */}
            {modulo === 'Financeiro' && (
              <>
                <ListItemButton onClick={toggleGerencial} sx={{mt: 1}}>
                  <ListItemIcon><BarChartIcon color="primary"/></ListItemIcon>
                  <ListItemText primary="Gerencial" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openGerencial ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openGerencial} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/gerencial/fluxo-caixa"><ListItemText primary="Fluxo de Caixa" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/gerencial/dre"><ListItemText primary="DRE Gerencial" /></ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={toggleTesouraria}>
                  <ListItemIcon><AccountBalanceWalletIcon color="warning" /></ListItemIcon>
                  <ListItemText primary="Tesouraria" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openTesouraria ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openTesouraria} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/tesouraria/caixinha"><ListItemText primary="Movimento Caixinha" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/tesouraria/transferencia"><ListItemText primary="Transferência Contas" /></ListItemButton>
                  </List>
                </Collapse>
                
                <Divider sx={{ my: 1 }} />

                <ListItemButton onClick={toggleCP}>
                  <ListItemIcon><MoneyOffIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Contas a Pagar" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openCP ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCP} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/contas-a-pagar/lancamentos"><ListItemIcon><PostAddIcon fontSize="small" /></ListItemIcon><ListItemText primary="Lançamentos" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/contas-a-pagar/baixa-manual"><ListItemIcon><PriceCheckIcon fontSize="small" /></ListItemIcon><ListItemText primary="Baixa / Pagamento" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/contas-a-pagar/conciliacao"><ListItemIcon><CompareArrowsIcon fontSize="small" /></ListItemIcon><ListItemText primary="Conciliação" /></ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={toggleCR}>
                  <ListItemIcon><AttachMoneyIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Contas a Receber" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openCR ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCR} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/contas-a-receber/lancamentos"><ListItemIcon><PostAddIcon fontSize="small" /></ListItemIcon><ListItemText primary="Lançamentos" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/contas-a-receber/baixa-manual"><ListItemIcon><PriceCheckIcon fontSize="small" /></ListItemIcon><ListItemText primary="Baixa Manual" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/contas-a-receber/relatorios"><ListItemIcon><SummarizeIcon fontSize="small" /></ListItemIcon><ListItemText primary="Relatórios" /></ListItemButton>
                  </List>
                </Collapse>

                <Divider sx={{ my: 1 }} />

                <ListItemButton onClick={toggleCadastros}>
                  <ListItemIcon><CategoryIcon color="action" /></ListItemIcon>
                  <ListItemText primary="Cadastros" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openCadastros ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCadastros} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/financeiro/fornecedores"><ListItemIcon><LocalShippingIcon fontSize="small"/></ListItemIcon><ListItemText primary="Fornecedores" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/financeiro/clientes"><ListItemIcon><GroupIcon fontSize="small"/></ListItemIcon><ListItemText primary="Clientes" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/financeiro/bancos"><ListItemIcon><AccountBalanceIcon fontSize="small"/></ListItemIcon><ListItemText primary="Bancos" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/financeiro/moedas"><ListItemIcon><MonetizationOnIcon fontSize="small"/></ListItemIcon><ListItemText primary="Moedas" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/financeiro/naturezas"><ListItemIcon><CategoryIcon fontSize="small"/></ListItemIcon><ListItemText primary="Naturezas" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/financeiro/centro-custo"><ListItemIcon><DomainIcon fontSize="small"/></ListItemIcon><ListItemText primary="Centro de Custo" /></ListItemButton>
                  </List>
                </Collapse>
              </>
            )}

            {/* === SAÚDE === */}
            {modulo === 'Saude' && (
              <>
                <ListItemButton component={Link} to="/dashboard" selected={location.pathname === '/dashboard'}>
                    <ListItemIcon><HomeIcon color="primary" /></ListItemIcon><ListItemText primary="Dashboard Geral" />
                </ListItemButton>

                <ListItemButton onClick={toggleResidentes} sx={{mt: 1}}>
                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Residentes" primaryTypographyProps={{ fontWeight: 'bold' }} />
                    {openResidentes ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openResidentes} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/residentes"><ListItemIcon><PeopleIcon fontSize="small"/></ListItemIcon><ListItemText primary="Lista Geral" /></ListItemButton>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/residentes/novo"><ListItemIcon><PersonAddIcon fontSize="small"/></ListItemIcon><ListItemText primary="Novo Cadastro" /></ListItemButton>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/residentes/visitas"><ListItemIcon><EventIcon fontSize="small"/></ListItemIcon><ListItemText primary="Agenda de Visitas" /></ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={toggleCuidados} sx={{mt: 1}}>
                    <ListItemIcon><MedicalServicesIcon color="error" /></ListItemIcon>
                    <ListItemText primary="Enfermagem" primaryTypographyProps={{ fontWeight: 'bold' }} />
                    {openCuidados ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCuidados} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/medicamentos"><ListItemIcon><MedicationIcon fontSize="small"/></ListItemIcon><ListItemText primary="Medicamentos" /></ListItemButton>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/saude/sinais-vitais"><ListItemIcon><MonitorHeartIcon fontSize="small"/></ListItemIcon><ListItemText primary="Sinais Vitais" /></ListItemButton>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/saude/evolucao"><ListItemIcon><EditNoteIcon fontSize="small"/></ListItemIcon><ListItemText primary="Evolução Diária" /></ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={toggleNutricao} sx={{mt: 1}}>
                    <ListItemIcon><RestaurantMenuIcon color="warning" /></ListItemIcon>
                    <ListItemText primary="Nutrição" primaryTypographyProps={{ fontWeight: 'bold' }} />
                    {openNutricao ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openNutricao} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/nutricao/cardapios"><ListItemText primary="Cardápios Semanais" /></ListItemButton>
                      <ListItemButton sx={subLinkStyle} component={Link} to="/nutricao/dietas"><ListItemText primary="Controle de Dietas" /></ListItemButton>
                    </List>
                </Collapse>
              </>
            )}

            {/* === FISCAL === */}
            {modulo === 'Fiscal' && (
              <>
                <ListItemButton component={Link} to="/fiscal/dashboard" selected={location.pathname === '/fiscal/dashboard'}>
                    <ListItemIcon><ReceiptLongIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Dashboard Fiscal" />
                </ListItemButton>

                <ListItemButton onClick={toggleDocFiscais} sx={{ mt: 1 }}>
                  <ListItemIcon><DescriptionIcon /></ListItemIcon>
                  <ListItemText primary="Documentos Fiscais" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openDocFiscais ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openDocFiscais} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/notas-entrada"><ListItemText primary="N.F. Entrada (MATA103)" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/notas-saida"><ListItemText primary="N.F. Saída (MATA461)" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/cte"><ListItemIcon><LocalShippingIcon fontSize="small" /></ListItemIcon><ListItemText primary="Conhec. Transporte" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/manifesto"><ListItemText primary="Manifesto Destinatário" /></ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={toggleApuracao} sx={{ mt: 1 }}>
                  <ListItemIcon><CalculateIcon /></ListItemIcon>
                  <ListItemText primary="Apuração" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openApuracao ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openApuracao} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/apuracao-iss"><ListItemText primary="Apuração ISS" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/retencoes"><ListItemText primary="Retenções (PCC/IR)" /></ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton component={Link} to="/fiscal/obrigacoes">
                    <ListItemIcon><UploadFileIcon /></ListItemIcon>
                    <ListItemText primary="Obrigações Acessórias" />
                </ListItemButton>
                
                <ListItemButton component={Link} to="/fiscal/inventario">
                    <ListItemIcon><InventoryIcon /></ListItemIcon>
                    <ListItemText primary="Livro Inventário" />
                </ListItemButton>

                <ListItemButton onClick={toggleCadastrosFiscais} sx={{ mt: 1 }}>
                  <ListItemIcon><SettingsSuggestIcon /></ListItemIcon>
                  <ListItemText primary="Cadastros Fiscais" primaryTypographyProps={{ fontWeight: 'bold' }} />
                  {openCadastrosFiscais ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCadastrosFiscais} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/tes"><ListItemText primary="TES (Tipos E/S)" /></ListItemButton>
                    <ListItemButton sx={subLinkStyle} component={Link} to="/fiscal/naturezas"><ListItemText primary="Naturezas (CFOP)" /></ListItemButton>
                  </List>
                </Collapse>
              </>
            )}

            {/* === SUPRIMENTOS (Atualizado) === */}
            {modulo === 'Suprimentos' && (
              <>
                <ListItemButton component={Link} to="/suprimentos/dashboard"><ListItemIcon><BarChartIcon /></ListItemIcon><ListItemText primary="Dashboard" /></ListItemButton>
                <ListItemButton component={Link} to="/estoque"><ListItemIcon><InventoryIcon /></ListItemIcon><ListItemText primary="Estoque Geral" /></ListItemButton>
                <ListItemButton component={Link} to="/suprimentos/movimentacao"><ListItemIcon><SwapHorizIcon /></ListItemIcon><ListItemText primary="Movimentação" /></ListItemButton>
                <ListItemButton component={Link} to="/compras"><ListItemIcon><ShoppingCartIcon /></ListItemIcon><ListItemText primary="Pedido de Compras" /></ListItemButton> 
              </>
            )}

            {/* === CONFIGURADOR === */}
            {modulo === 'Configurador' && (
              <>
                <ListItemButton component={Link} to="/usuarios"><ListItemIcon><ManageAccountsIcon /></ListItemIcon><ListItemText primary="Usuários e Permissões" /></ListItemButton>
              </>
            )}
        </List>
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }} >
        <Outlet /> 
      </Box>
    </Box>
  );
}