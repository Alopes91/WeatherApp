# 🌤️ Clima Agora - App de Previsão do Tempo

Aplicativo desenvolvido em **React Native** que consome a **WeatherAPI** para exibir a previsão atual do tempo de qualquer cidade do mundo em tempo real.

## 📁 Estrutura do Projeto

A estrutura do projeto foi pensada para manter o código organizado e de fácil manutenção. A seguir, estão os arquivos principais e suas respectivas responsabilidades:

```bash
WeatherApp/
├── App.tsx               # Componente principal do aplicativo (ponto de entrada)
├── weatherApi.ts         # Módulo responsável pela requisição de dados à WeatherAPI
├── assets/               # Pasta opcional para imagens, ícones ou fontes (pode ser criada conforme a necessidade)
├── node_modules/         # Dependências do projeto instaladas automaticamente
├── package.json          # Define scripts, dependências e metadados do projeto
├── tsconfig.json         # Configurações do TypeScript
├── README.md             # Documentação do projeto
├── .gitignore            # Arquivos e pastas ignorados pelo Git
└── app.json / expo.json  # Configurações específicas do projeto com Expo
```
### Arquivos principais

- **App.tsx**  
  Arquivo principal do projeto. Contém a lógica da interface com o usuário, os estados, a manipulação dos dados climáticos e a renderização dos componentes. Nele também está a função `normalizeCityName`, que trata o nome da cidade para evitar problemas com acentos.

- **weatherApi.ts**  
  Arquivo que centraliza a chamada à API de clima (WeatherAPI), utilizando `axios` para realizar a requisição HTTP. A função `getWeather` recebe o nome da cidade e retorna os dados atuais do tempo. Também trata erros de forma genérica para manter a experiência do usuário consistente.

- **assets/** _(opcional)_  
  Pasta onde podem ser armazenadas imagens, logos ou fontes personalizadas para o app, caso deseje futuramente expandir o projeto com identidade visual.

- **package.json**  
  Gerencia as dependências do projeto, como `react`, `react-native`, `axios`, `typescript` e outras. Também armazena os scripts básicos para iniciar o projeto com Expo.

- **tsconfig.json**  
  Arquivo de configuração do compilador TypeScript, definindo diretivas como o nível de checagem de tipo e o sistema de módulos.

- **README.md**  
  Documentação explicativa do projeto (como essa que você está criando 📝).

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
