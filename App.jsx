import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Search, Menu, X, Home, Monitor, Gamepad2, Cpu, Truck, Mail, Clock, User } from 'lucide-react'
import './App.css'

// Importar imagens
import tech1 from './assets/tech1.jpg'
import tech2 from './assets/tech2.png'
import tech3 from './assets/tech3.jpg'
import tech4 from './assets/tech4.jpg'
import logo from './assets/logo.svg' // Importar a nova logo SVG

// Dados das notícias
const newsData = {
  featured: {
    title: "Inteligência Artificial revoluciona o mercado de trabalho brasileiro",
    description: "Empresas nacionais investem pesado em IA para automatizar processos e criar novas oportunidades de emprego. Especialistas apontam crescimento de 300% no setor nos próximos dois anos.",
    category: "Informática",
    date: "18 Jun 2025",
    image: tech1,
    author: "Carlos Silva"
  },
  recent: [
    {
      title: "PlayStation 6 pode chegar em 2028 com tecnologia de ray tracing avançada",
      description: "Vazamentos indicam que a Sony está desenvolvendo um console com capacidade gráfica 10x superior ao PS5, prometendo experiências de jogo ultra-realistas.",
      category: "Games",
      date: "17 Jun 2025",
      image: tech2,
      author: "Ana Santos"
    },
    {
      title: "Preços de placas de vídeo RTX 4090 despencam 40% no mercado nacional",
      description: "Com o lançamento da nova geração RTX 5000, as placas RTX 4090 estão com preços mais acessíveis, chegando a R$ 8.000 em algumas lojas.",
      category: "Peças",
      date: "16 Jun 2025",
      image: tech3,
      author: "Roberto Lima"
    },
    {
      title: "Uber anuncia frota de carros elétricos autônomos para São Paulo",
      description: "A empresa planeja introduzir 500 veículos autônomos elétricos na capital paulista até o final de 2026, reduzindo custos e emissões.",
      category: "Transporte",
      date: "15 Jun 2025",
      image: tech4,
      author: "Marina Costa"
    },
    {
      title: "Microsoft lança Windows 12 com assistente de IA nativo",
      description: "O novo sistema operacional promete revolucionar a experiência do usuário com inteligência artificial integrada em todas as funcionalidades.",
      category: "Informática",
      date: "14 Jun 2025",
      image: tech1,
      author: "Pedro Oliveira"
    },
    {
      title: "Steam Deck 2 confirmado para 2026 com chip AMD personalizado",
      description: "Valve confirma desenvolvimento do sucessor do Steam Deck, prometendo 50% mais performance e 8 horas de autonomia de bateria.",
      category: "Games",
      date: "13 Jun 2025",
      image: tech2,
      author: "Lucas Ferreira"
    }
  ],
  categories: {
    informatica: [
      {
        title: "Quantum Computing: IBM anuncia computador quântico comercial",
        description: "A IBM apresentou seu primeiro computador quântico para uso comercial, prometendo resolver problemas complexos em segundos.",
        category: "Informática",
        date: "18 Jun 2025",
        image: tech1,
        author: "Dr. Maria Fernandes"
      },
      {
        title: "5G chega a 90% das cidades brasileiras até dezembro",
        description: "Operadoras aceleram implementação da rede 5G, prometendo cobertura quase total do território nacional ainda este ano.",
        category: "Informática",
        date: "17 Jun 2025",
        image: tech3,
        author: "João Mendes"
      },
      {
        title: "Cibersegurança: Brasil registra aumento de 200% em ataques",
        description: "Relatório aponta crescimento alarmante de ataques cibernéticos contra empresas brasileiras no primeiro semestre de 2025.",
        category: "Informática",
        date: "16 Jun 2025",
        image: tech4,
        author: "Dra. Carla Rodrigues"
      }
    ],
    games: [
      {
        title: "GTA 6 ganha novo trailer com gameplay inédito",
        description: "Rockstar Games divulga 10 minutos de gameplay do aguardado GTA 6, mostrando gráficos fotorrealistas e mecânicas inovadoras.",
        category: "Games",
        date: "18 Jun 2025",
        image: tech2,
        author: "Gabriel Gamer"
      },
      {
        title: "Esports brasileiro fatura R$ 500 milhões em 2025",
        description: "Mercado de esports no Brasil bate recorde de faturamento, consolidando o país como potência mundial nos jogos eletrônicos.",
        category: "Games",
        date: "17 Jun 2025",
        image: tech1,
        author: "Fernanda Pro"
      },
      {
        title: "Nintendo Switch 2 vazado com especificações técnicas",
        description: "Documentos revelam que o sucessor do Switch terá suporte a 4K, DLSS e retrocompatibilidade total com jogos atuais.",
        category: "Games",
        date: "16 Jun 2025",
        image: tech3,
        author: "Marcos Nintendo"
      }
    ],
    pecas: [
      {
        title: "AMD Ryzen 8000 promete 40% mais performance que geração anterior",
        description: "Nova linha de processadores AMD utiliza arquitetura de 3nm, oferecendo eficiência energética superior e performance excepcional.",
        category: "Peças",
        date: "18 Jun 2025",
        image: tech3,
        author: "Tech Reviewer"
      },
      {
        title: "Memórias DDR6 chegam ao mercado com velocidades de 12.800 MHz",
        description: "Primeiras memórias DDR6 são lançadas, prometendo revolucionar a performance de PCs gamers e workstations profissionais.",
        category: "Peças",
        date: "17 Jun 2025",
        image: tech4,
        author: "Hardware Expert"
      },
      {
        title: "SSDs de 100TB se tornam realidade com nova tecnologia",
        description: "Fabricantes anunciam SSDs com capacidade de 100TB utilizando tecnologia QLC de nova geração, mantendo preços acessíveis.",
        category: "Peças",
        date: "16 Jun 2025",
        image: tech1,
        author: "Storage Guru"
      }
    ],
    transporte: [
      {
        title: "Tesla Model Y brasileiro será produzido em Minas Gerais",
        description: "Tesla confirma construção de fábrica em MG para produzir Model Y nacional, com preço 30% menor que versão importada.",
        category: "Transporte",
        date: "18 Jun 2025",
        image: tech4,
        author: "Auto News"
      },
      {
        title: "Hyperloop brasileiro conectará São Paulo e Rio em 35 minutos",
        description: "Projeto de transporte de alta velocidade recebe aprovação para estudos de viabilidade, prometendo revolucionar mobilidade urbana.",
        category: "Transporte",
        date: "17 Jun 2025",
        image: tech2,
        author: "Mobilidade Urbana"
      },
      {
        title: "Drones de entrega começam operação comercial em 10 cidades",
        description: "Empresas de logística iniciam entregas por drones em centros urbanos, reduzindo tempo de entrega para 30 minutos.",
        category: "Transporte",
        date: "16 Jun 2025",
        image: tech1,
        author: "Logística Tech"
      }
    ]
  }
}

// Componente Header
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Alejo Gestão e Informática" className="h-16 w-auto" /> {/* Aumentando o tamanho da logo para h-16 */}
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/informatica" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Monitor className="h-4 w-4" />
              <span>Informática</span>
            </Link>
            <Link to="/games" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Gamepad2 className="h-4 w-4" />
              <span>Games</span>
            </Link>
            <Link to="/pecas" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Cpu className="h-4 w-4" />
              <span>Peças</span>
            </Link>
            <Link to="/transporte" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Truck className="h-4 w-4" />
              <span>Transporte</span>
            </Link>
            <Link to="/contato" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4" />
              <span>Contato</span>
            </Link>
          </nav>

          {/* Busca */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Buscar notícias..." 
                className="pl-10 w-64"
              />
            </div>
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/informatica" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Monitor className="h-4 w-4" />
                <span>Informática</span>
              </Link>
              <Link to="/games" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Gamepad2 className="h-4 w-4" />
                <span>Games</span>
              </Link>
              <Link to="/pecas" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Cpu className="h-4 w-4" />
                <span>Peças</span>
              </Link>
              <Link to="/transporte" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Truck className="h-4 w-4" />
                <span>Transporte</span>
              </Link>
              <Link to="/contato" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Mail className="h-4 w-4" />
                <span>Contato</span>
              </Link>
              <div className="pt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    type="text" 
                    placeholder="Buscar notícias..." 
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente de Card de Notícia
function NewsCard({ title, description, category, date, image, author, featured = false }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Informática': return 'bg-blue-100 text-blue-800'
      case 'Games': return 'bg-purple-100 text-purple-800'
      case 'Peças': return 'bg-green-100 text-green-800'
      case 'Transporte': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer group ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Monitor className="h-12 w-12" />
              </div>
            )}
          </div>
        </div>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge className={getCategoryColor(category)}>{category}</Badge>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <Clock className="h-3 w-3" />
                <span>{date}</span>
              </div>
            </div>
            <CardTitle className={`${featured ? 'text-xl' : 'text-lg'} group-hover:text-blue-600 transition-colors`}>
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-3">{description}</CardDescription>
            {author && (
              <div className="flex items-center text-sm text-gray-500">
                <User className="h-3 w-3 mr-1" />
                <span>Por {author}</span>
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

// Página Home
function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Notícia em Destaque */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notícia em Destaque</h2>
        <NewsCard {...newsData.featured} featured={true} />
      </section>

      {/* Notícias Recentes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.recent.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>

      {/* Seção de Categorias em Destaque */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Explore por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/informatica" className="group">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
              <Monitor className="h-12 w-12 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Informática</h3>
              <p className="text-sm text-gray-600 mt-1">Tecnologia e inovação</p>
            </Card>
          </Link>
          <Link to="/games" className="group">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:bg-purple-50">
              <Gamepad2 className="h-12 w-12 mx-auto mb-3 text-purple-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Games</h3>
              <p className="text-sm text-gray-600 mt-1">Jogos e esports</p>
            </Card>
          </Link>
          <Link to="/pecas" className="group">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:bg-green-50">
              <Cpu className="h-12 w-12 mx-auto mb-3 text-green-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Peças</h3>
              <p className="text-sm text-gray-600 mt-1">Hardware e componentes</p>
            </Card>
          </Link>
          <Link to="/transporte" className="group">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:bg-orange-50">
              <Truck className="h-12 w-12 mx-auto mb-3 text-orange-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Transporte</h3>
              <p className="text-sm text-gray-600 mt-1">Mobilidade e logística</p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Páginas de Categoria
function CategoryPage({ category, icon: Icon }) {
  const categoryKey = category.toLowerCase().replace('ç', 'c')
  const categoryNews = newsData.categories[categoryKey] || []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Icon className="h-8 w-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-900">{category}</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  )
}

// Página de Contato
function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Contato</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Entre em Contato</CardTitle>
            <CardDescription>
              Envie suas sugestões, dúvidas ou propostas de parceria.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <Input placeholder="Seu nome completo" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-md resize-none h-32"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            <Button className="w-full">Enviar Mensagem</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">contato@alejogestao.com.br</p>
            </div>
            <div>
              <h3 className="font-semibold">Telefone</h3>
              <p className="text-gray-600">(11) 9999-9999</p>
            </div>
            <div>
              <h3 className="font-semibold">Endereço</h3>
              <p className="text-gray-600">São Paulo, SP - Brasil</p>
            </div>
            <div>
              <h3 className="font-semibold">Horário de Atendimento</h3>
              <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Alejo Gestão e Informática" className="h-16 w-auto" /> {/* Usando a nova logo no footer */}
            </div>
            <p className="text-gray-400">
              Seu portal de notícias sobre tecnologia, games, peças e transporte. 
              Mantendo você informado sobre as últimas tendências e inovações.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/informatica" className="hover:text-white transition-colors">Informática</Link></li>
              <li><Link to="/games" className="hover:text-white transition-colors">Games</Link></li>
              <li><Link to="/pecas" className="hover:text-white transition-colors">Peças</Link></li>
              <li><Link to="/transporte" className="hover:text-white transition-colors">Transporte</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@alejogestao.com.br</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Alejo Gestão e Informática. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/informatica" element={<CategoryPage category="Informática" icon={Monitor} />} />
            <Route path="/games" element={<CategoryPage category="Games" icon={Gamepad2} />} />
            <Route path="/pecas" element={<CategoryPage category="Peças" icon={Cpu} />} />
            <Route path="/transporte" element={<CategoryPage category="Transporte" icon={Truck} />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App

