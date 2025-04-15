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

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/clima-agora.git
cd clima-agora
```
2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Adicione sua chave da WeatherAPI:**

Abra o arquivo weatherApi.ts e substitua a constante API_KEY pela sua chave pessoal:

```bash
const API_KEY = 'SUA_CHAVE_AQUI';
```

4. **Execute o app com o Expo:**

```bash
npx expo start
```

Na saída, você encontrará opções para abrir o aplicativo em um

- [build de desenvolvimento](https://docs.expo.dev/develop/development-builds/introduction/)
- [emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [simulador iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), um sandbox limitado para testar o desenvolvimento de aplicativos com o Expo. Essa opção também permite visualizar o aplicativo Clima Agora no seu celular por meio de um QR code, utilizando o app Expo Go já instalado no dispositivo.

Você pode começar a desenvolver editando os arquivos dentro do diretório **app**. Este projeto usa [roteamento baseado em arquivo](https://docs.expo.dev/router/introduction).

# 📱 Como Usar o Aplicativo Clima Agora

Clima Agora é um aplicativo simples e intuitivo que permite consultar as condições climáticas de qualquer cidade utilizando a **WeatherAPI**. A seguir, explicamos como usar o aplicativo de forma simples e prática.

1. **Abrindo o Aplicativo:**
   - Após instalar e rodar o aplicativo no seu dispositivo móvel (Android ou iOS), a tela inicial será exibida com um título "🌤️ CLIMA AGORA" no topo.

2. **Buscar o Clima de uma Cidade:**
   - No campo de entrada de texto logo abaixo do título, digite o nome da cidade que você deseja consultar. 
   - O nome da cidade pode ser digitado de forma simples, sem a necessidade de acentuação, pois o sistema vai normalizar o texto automaticamente.
   
3. **Enviar a Solicitação:**
   - Após digitar o nome da cidade, você pode pressionar a tecla **Enter** no teclado (se estiver usando um dispositivo físico ou emulador) ou clicar no botão **"Buscar Clima"** para enviar a solicitação.
   
4. **Exibição dos Resultados:**
   - O aplicativo irá buscar os dados do clima na **WeatherAPI**.
   - Caso a requisição seja bem-sucedida, os seguintes dados serão exibidos na tela:
     - **Cidade, Estado:** O nome da cidade e o estado que você pesquisou.
     - **País:** O país onde a cidade está localizada.
     - **Temperatura:** A temperatura atual da cidade (em graus Celsius).
     - **Condição:** A condição climática no momento (ex: ensolarado, nublado, etc.).
   
5. **Mensagens de Erro:**
   - Se a cidade não for encontrada ou algum erro ocorrer durante a consulta, o aplicativo exibirá uma mensagem de erro informando que não foi possível obter os dados do tempo.

6. **Carregando Dados:**
   - Durante o processo de consulta, uma mensagem de **"Carregando..."** será exibida enquanto o aplicativo espera a resposta da API.

7. **Interação Simples e Ágil:**
   - O aplicativo foi desenvolvido para ser simples e direto, com uma interface limpa, onde você pode buscar o clima para qualquer cidade de maneira prática e rápida.

## Como Testar Novamente

- Caso queira testar em diferentes cidades, basta digitar um novo nome de cidade e repetir o processo! O aplicativo também irá limpar automaticamente a tela de erros ao realizar uma nova busca.

Essa é a experiência básica de usuário no Clima Agora.
