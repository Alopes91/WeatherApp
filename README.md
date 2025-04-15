# 🌤️ Clima Agora - App de Previsão do Tempo

Aplicativo desenvolvido em **React Native** que consome a **WeatherAPI** para exibir a previsão atual do tempo de qualquer cidade do mundo em tempo real.

## 📁 Estrutura do Projeto

O projeto está organizado em pastas e arquivos que seguem boas práticas para aplicações em React Native com Expo. Abaixo estão os principais diretórios e suas respectivas responsabilidades:

```bash
WeatherApp/
├── app/
│   ├── index.tsx           # Componente principal do aplicativo (ponto de entrada)
│   ├── weatherApi.ts       # Módulo responsável pela requisição à API de clima (WeatherAPI)
├── assets/                 # Recursos estáticos como imagens, fontes e ícones
├── components/             # Componentes reutilizáveis da interface do app (a serem implementados)
├── constants/              # Arquivos com constantes usadas globalmente (como temas, estilos, etc.)
├── hooks/                  # Hooks personalizados que encapsulam lógica reutilizável
├── node_modules/           # Dependências do projeto instaladas automaticamente (após o npm install)
├── scripts/                # Scripts auxiliares ou utilitários (como automações, testes, etc.)
├── .gitignore              # Lista de arquivos/pastas ignorados pelo Git
├── README.md               # Documentação do projeto
├── app.json                # Configurações gerais do projeto com Expo
├── package.json            # Gerencia as dependências, scripts e metadados do projeto
├── package-lock.json       # Registro exato das versões instaladas das dependências
├── tsconfig.json           # Configuração do compilador TypeScript
```

### 🧠 Descrição dos Arquivos e Pastas

- **`app/index.tsx`**  
  Contém a lógica principal da aplicação: estado, tratamento de erros, requisição de dados da API, renderização da interface e entrada do app. Também implementa a função `normalizeCityName`.

- **`app/weatherApi.ts`**  
  Responsável por buscar os dados do clima via `axios`, conectando-se à WeatherAPI e retornando os dados formatados para uso no app.

- **`assets/`**  
  Pasta para armazenar imagens, fontes, ícones ou qualquer outro recurso estático utilizado no aplicativo.

- **`components/`**  
  Local reservado para criação de componentes reutilizáveis, como cartões de clima, botões customizados, etc. Facilita a modularização da interface.

- **`constants/`**  
  Utilizada para armazenar valores fixos como cores, tamanhos de fonte, strings reutilizáveis ou endpoints da API.

- **`hooks/`**  
  Contém hooks customizados para abstração de lógica reutilizável, como por exemplo manipulação de input, status da rede, etc.

- **`scripts/`**  
  Ideal para scripts utilitários, como inicializações, geração de dados, testes automatizados ou limpeza de cache.

- **`app.json`**  
  Arquivo de configuração do projeto Expo (nome do app, tema, ícone, splash screen, permissões, etc.).

- **`package.json` / `package-lock.json`**  
  Controlam as dependências do projeto e suas versões. `package.json` também define os scripts disponíveis via terminal, como `start`, `build`, entre outros.

- **`tsconfig.json`**  
  Configurações do compilador TypeScript, definindo regras de tipagem, caminhos, e comportamento geral da linguagem.

Vale destacar que a versão mais recente do aplicativo Clima Agora foi desenvolvida principalmente dentro da pasta **`app`**, com foco nos arquivos **`index.tsx`** e **`weatherApi.ts`**.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React Native**
- **TypeScript**
- **Axios** para requisições HTTP
- **WeatherAPI** como provedor de dados climáticos

## 🔧 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Um emulador Android/iOS configurado **ou** o app Expo Go no celular.

## ⚙️ Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/clima-agora.git
cd clima-agora
```
2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Adicione sua chave da WeatherAPI:

Abra o arquivo weatherApi.ts e substitua a constante API_KEY pela sua chave pessoal:

```bash
const API_KEY = 'SUA_CHAVE_AQUI';
```

4. Execute o app com o Expo:

```bash
npx expo start
```

Na saída, você encontrará opções para abrir o aplicativo em um

- [build de desenvolvimento](https://docs.expo.dev/develop/development-builds/introduction/)
- [emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [simulador iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), um sandbox limitado para testar o desenvolvimento de aplicativos com o Expo. Essa opção também permite visualizar o aplicativo Clima Agora no seu celular por meio de um QR code, utilizando o app Expo Go já instalado no dispositivo.

Você pode começar a desenvolver editando os arquivos dentro do diretório **app**. Este projeto usa [roteamento baseado em arquivo](https://docs.expo.dev/router/introduction).

## Obtenha um novo projeto

Quando estiver pronto, execute:

```bash
npm run reset-project
```

Este comando moverá o código inicial para o diretório **app-example** e criará um diretório **app** em branco onde você pode começar a desenvolver.

## Saiba mais

Para saber mais sobre como desenvolver seu projeto com o Expo, consulte os seguintes recursos:

- [Documentação do Expo](https://docs.expo.dev/): Aprenda os fundamentos ou aprofunde-se em tópicos avançados com nossos [guias](https://docs.expo.dev/guides).
- [Tutorial do Learn Expo](https://docs.expo.dev/tutorial/introduction/): Siga um tutorial passo a passo onde você criará um projeto que roda em Android, iOS e na web.

## Junte-se à comunidade

Junte-se à nossa comunidade de desenvolvedores que criam aplicativos universais.

- [Expo no GitHub](https://github.com/expo/expo): Veja nossa plataforma de código aberto e contribua.
- [Comunidade Discord](https://chat.expo.dev): Converse com usuários do Expo e faça perguntas.
