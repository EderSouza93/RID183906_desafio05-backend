# 📚 Backend - Sistema de Gerenciamento de Livros

## 📋 Descrição

Este é o backend de um sistema de gerenciamento de livros desenvolvido em TypeScript com Node.js. O projeto implementa uma arquitetura limpa (Clean Architecture) com separação clara de responsabilidades e utiliza TypeORM para persistência de dados.

## 🏗️ Arquitetura

O projeto segue os princípios da **Clean Architecture** com as seguintes camadas:

- **Domain**: Entidades, interfaces e regras de negócio
- **Services**: Lógica de aplicação e casos de uso
- **Infrastructure**: Implementações concretas (banco de dados, HTTP, etc.)
- **Shared**: Código compartilhado entre módulos

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Express.js** - Framework web
- **TypeORM** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **Docker** - Containerização
- **tsyringe** - Injeção de dependência
- **celebrate** - Validação de dados
- **ESLint + Prettier** - Linting e formatação de código

## 📁 Estrutura do Projeto

```
src/
├── books/                    # Módulo de livros
│   ├── domain/              # Camada de domínio
│   │   ├── models/          # Interfaces e tipos
│   │   └── repositories/    # Contratos de repositório
│   ├── infra/               # Camada de infraestrutura
│   │   ├── database/        # Entidades e repositórios
│   │   └── http/            # Controllers e rotas
│   └── services/            # Serviços de aplicação
├── shared/                   # Código compartilhado
│   ├── container/           # Configuração de DI
│   ├── errors/              # Tratamento de erros
│   └── infra/               # Infraestrutura compartilhada
│       ├── http/            # Servidor e rotas
│       └── typeorm/         # Configuração do banco
```

## 🛠️ Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- npm ou yarn

## ⚙️ Configuração e Instalação

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd RID183906_Desafio05
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Configurações do Banco de Dados
DB_HOST=localhost
DB_PORT=5433
DB_USER=developer
DB_PASS=admin
DB_NAME=desafio5_RID183906
DB_NAME_TEST=desafio5_RID183906_test

# Configurações da Aplicação
NODE_ENV=development
PORT=3000
```

### 4. Inicie o banco de dados
```bash
docker-compose up -d
```

### 5. Execute as migrações
```bash
npm run migration:run
```

### 6. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📚 API Endpoints

### Health Check
- `GET /health` - Verifica se a API está funcionando

### Livros
- `GET /livros` - Lista todos os livros (com paginação)
- `GET /livros/:id` - Busca um livro específico
- `POST /livros` - Cria um novo livro
- `PUT /livros/:id` - Atualiza um livro existente
- `DELETE /livros/:id` - Remove um livro

### Parâmetros de Paginação
- `page`: Número da página (padrão: 1)
- `take`: Quantidade de itens por página (padrão: 10)
- `skip`: Quantidade de itens para pular

## 🗄️ Modelo de Dados

### Entidade Book
```typescript
{
  id: number;           // ID único do livro
  title: string;        // Título do livro
  pages: number;        // Número de páginas
  isbnCode: string;     // Código ISBN (único)
  publisher: string;    // Editora
  createdAt: Date;      // Data de criação
  updatedAt: Date;      // Data de última atualização
}
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run lint` - Executa o linter
- `npm run lint-fix` - Corrige automaticamente problemas de linting
- `npm run migration:create --name=nome_migracao` - Cria uma nova migração
- `npm run migration:run` - Executa as migrações pendentes
- `npm run migration:revert` - Reverte a última migração

## 🐳 Docker

O projeto inclui um `docker-compose.yml` para facilitar o desenvolvimento:

```bash
# Iniciar o banco de dados
docker-compose up -d

# Parar o banco de dados
docker-compose down

# Ver logs do banco
docker-compose logs db
```

## 📝 Validações

O projeto utiliza o pacote `celebrate` para validação de dados de entrada. As validações incluem:

- Campos obrigatórios
- Tipos de dados corretos
- Unicidade de ISBN e título
- Validações de negócio específicas

## 🚨 Tratamento de Erros

O sistema possui um middleware centralizado para tratamento de erros que:

- Captura erros de aplicação (AppError)
- Retorna códigos de status HTTP apropriados
- Fornece mensagens de erro consistentes
- Trata erros de validação

## 🧪 Testes

Para executar os testes:

```bash
# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 📊 Banco de Dados

### Configuração
- **Tipo**: PostgreSQL
- **Porta**: 5433 (mapeada do container)
- **Usuário**: developer
- **Senha**: admin
- **Database**: desafio5_RID183906

### Migrações
As migrações são gerenciadas pelo TypeORM e devem ser executadas sempre que houver mudanças no esquema do banco.

## 🔒 Segurança

- CORS configurado para permitir requisições cross-origin
- Validação de entrada em todos os endpoints
- Sanitização de dados
- Tratamento seguro de erros

## 📈 Performance

- Paginação implementada para listagens
- Queries otimizadas com TypeORM
- Índices únicos em campos críticos (ISBN)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👥 Autores

- Desenvolvido como parte do Desafio 05

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório do projeto.

---

**Status**: ✅ Em desenvolvimento
**Versão**: 1.0.0
**Última atualização**: Dezembro 2024
