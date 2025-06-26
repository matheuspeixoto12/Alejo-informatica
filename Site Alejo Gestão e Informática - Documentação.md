# Site Alejo Gestão e Informática - Documentação

## 📋 Visão Geral
Portal de notícias moderno e responsivo focado em tecnologia, informática, games, peças de computador e transporte. Desenvolvido com React e Tailwind CSS.

## 🚀 Características Principais

### ✅ Design e Layout
- **Design responsivo** para desktop, tablet e mobile
- **Interface moderna** com cores profissionais (azul, roxo, verde, laranja)
- **Navegação intuitiva** com menu sticky e mobile-friendly
- **Cards de notícias** com hover effects e transições suaves
- **Tipografia clara** e hierarquia visual bem definida

### ✅ Funcionalidades
- **Página inicial** com notícia em destaque e últimas notícias
- **Categorias organizadas**: Informática, Games, Peças, Transporte
- **Sistema de busca** (interface pronta)
- **Página de contato** com formulário funcional
- **Footer completo** com links e informações
- **Navegação por categorias** com conteúdo específico

### ✅ Conteúdo
- **15+ notícias** distribuídas pelas categorias
- **Imagens reais** de alta qualidade sobre tecnologia
- **Textos relevantes** e atuais sobre o mercado tech
- **Autores fictícios** para dar credibilidade
- **Datas atuais** (junho 2025)

## 📁 Estrutura do Projeto

```
alejo-noticias/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   ├── icons/         # Ícones das categorias
│   │   ├── tech1.jpg      # Imagens de tecnologia
│   │   ├── tech2.png
│   │   ├── tech3.jpg
│   │   └── tech4.jpg
│   ├── components/
│   │   └── ui/           # Componentes shadcn/ui
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── dist/                 # Build de produção
├── package.json          # Dependências
└── vite.config.js        # Configuração do Vite
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação

## 📱 Páginas Implementadas

### 1. Home (/)
- Notícia em destaque sobre IA
- Grid de últimas notícias
- Seção "Explore por Categoria" com ícones

### 2. Informática (/informatica)
- 3 notícias sobre computação quântica, 5G e cibersegurança
- Layout em grid responsivo

### 3. Games (/games)
- 3 notícias sobre GTA 6, esports e Nintendo Switch 2
- Foco em gaming e entretenimento

### 4. Peças (/pecas)
- 3 notícias sobre AMD Ryzen, DDR6 e SSDs
- Hardware e componentes

### 5. Transporte (/transporte)
- 3 notícias sobre Tesla, Hyperloop e drones
- Mobilidade e logística

### 6. Contato (/contato)
- Formulário de contato funcional
- Informações da empresa
- Layout em duas colunas

## 🎨 Paleta de Cores

- **Azul** (#2563eb) - Informática
- **Roxo** (#9333ea) - Games  
- **Verde** (#16a34a) - Peças
- **Laranja** (#ea580c) - Transporte
- **Cinza** (#374151) - Textos
- **Branco** (#ffffff) - Fundo

## 📊 Performance

- **Build otimizado** com Vite
- **Imagens otimizadas** (total ~950KB)
- **CSS minificado** (~88KB)
- **JavaScript otimizado** (~279KB)
- **Carregamento rápido** e responsivo

## 🔧 Como Executar

### Desenvolvimento
```bash
cd alejo-noticias
pnpm install
pnpm run dev --host
```

### Produção
```bash
pnpm run build
pnpm run preview
```

## 📝 Próximos Passos Sugeridos

1. **Backend**: Implementar API para gerenciar notícias
2. **CMS**: Sistema de administração para editores
3. **Busca**: Funcionalidade de busca real
4. **SEO**: Meta tags e otimizações
5. **Analytics**: Google Analytics ou similar
6. **Newsletter**: Sistema de inscrição
7. **Comentários**: Sistema de comentários nas notícias
8. **Social**: Integração com redes sociais

## 📞 Informações de Contato (Fictícias)

- **Email**: contato@alejogestao.com.br
- **Telefone**: (11) 9999-9999
- **Endereço**: São Paulo, SP - Brasil
- **Horário**: Segunda a Sexta: 9h às 18h

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**

