# Landing Page

Criar uma landing page simples, profissional e institucional para um médico autônomo (profissional liberal da área da saúde), com foco em presença digital inicial, autoridade profissional e captação de pacientes.

## 🚀 Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Animações suaves e modernas
- ✅ Menu de navegação fixo com rolagem suave
- ✅ Seção Hero com destaque do serviço
- ✅ Seção de benefícios com cards interativos
- ✅ Timer de urgência/promoção
- ✅ FAQ com accordion
- ✅ Tabela de preços com 3 planos
- ✅ Widget flutuante do WhatsApp
- ✅ Página de confirmação (/obrigado)
- ✅ Página de promoção esgotada (/esgotado)
- ✅ Preparado para deploy no Heroku

## 📦 Tecnologias

- Vue 3 (Composition API)
- Vite 5
- Tailwind CSS 3
- Vue Router 4
- Express (produção)

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Testar build localmente
npm start
```

## ⚙️ Configuração

### WhatsApp Widget

Edite o arquivo `src/App.vue` para alterar o número do WhatsApp:

```javascript
const whatsappNumber = '5511999999999' // Seu número aqui
const whatsappMessage = 'Olá! Tenho interesse no serviço.'
```

### Planos e Preços

Edite o arquivo `src/components/PricingSection.vue` para alterar os planos.

### Redes Sociais

Edite o arquivo `src/components/Footer.vue` para atualizar os links das redes sociais.

## 🌐 Deploy no Heroku

1. Crie uma conta no Heroku
2. Conecte seu repositório GitHub
3. Faça push para a branch main
4. O Heroku automaticamente:
   - Executa `npm install`
   - Executa `npm run build`
   - Inicia `npm start` (servidor Express)

## 📁 Estrutura do Projeto

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── HeroSection.vue
│   │   ├── BenefitsSection.vue
│   │   ├── UrgencySection.vue
│   │   ├── FaqSection.vue
│   │   ├── PricingSection.vue
│   │   └── Footer.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── ThankYou.vue
│   │   └── SoldOut.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── server.js
└── Procfile
```

## 📝 Licença

Este projeto foi criado para fins educacionais e comerciais.
