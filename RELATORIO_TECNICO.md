## 🛠️ Processo de Desenvolvimento

O desenvolvimento do aplicativo **Clima Agora** seguiu uma abordagem prática e incremental, focada em simplicidade, usabilidade e funcionalidade. Abaixo, descrevo as principais etapas e decisões envolvidas:

### 🎯 Definição do Escopo e Objetivo

- O propósito do projeto é permitir que o usuário consulte, em tempo real, as condições climáticas de qualquer cidade.
- A aplicação foi desenvolvida com **React Native**, utilizando **Expo** para facilitar o processo de build e testes em dispositivos móveis.

### ⚙️ Configuração Inicial do Projeto

- O projeto foi iniciado com o **Expo CLI**, garantindo compatibilidade multiplataforma.
- As configurações do **TypeScript** (`tsconfig.json`) foram ajustadas para suportar tipagem estática e maior controle de erros.

### 🎨 Implementação da Interface

- A estrutura visual do app foi criada no arquivo `app/index.tsx`, utilizando componentes básicos do React Native (`Text`, `TextInput`, `Button`, etc.).
- O estilo visual foi definido com `StyleSheet`, com foco em uma interface limpa e intuitiva.

### 🌐 Integração com a API de Clima

- A função `getWeather` foi implementada em `weatherApi.ts`, usando a biblioteca `axios` para realizar requisições HTTP à [WeatherAPI](https://www.weatherapi.com/).
- Os dados obtidos são formatados e exibidos de forma amigável ao usuário, incluindo informações como cidade, temperatura e condição climática.

### ❗ Tratamento de Erros e Usabilidade

- Foram adicionadas mensagens de erro e indicadores de carregamento para melhorar a experiência do usuário.
- O nome da cidade é normalizado (removendo acentos) antes da requisição, evitando falhas desnecessárias.

### 🗂️ Organização do Projeto

- O projeto foi estruturado em pastas como `components/`, `constants/`, `hooks/` e `scripts/`, com o objetivo de escalar o app futuramente de forma organizada e modular.

### ✅ Testes e Validação

- O app foi testado em dispositivos reais via QR Code com o aplicativo **Expo Go** 📱.
- Foram verificados casos de sucesso, erros de digitação, nomes inválidos e ausência de conexão.

## ⚠️ Desafios Encontrados e Soluções

Durante o desenvolvimento do aplicativo **Clima Agora**, alguns desafios técnicos surgiram e foram solucionados da seguinte forma:

### 🌀 Normalização de Cidades com Acentos
- **Desafio:** A API retornava erro ao buscar cidades com acentos, como "São Paulo".
- **Solução:** Implementação da função `normalizeCityName`, que remove acentos e diacríticos usando `normalize('NFD')` e expressões regulares.

### 📡 Tratamento de Erros de Conexão e Requisição
- **Desafio:** Caso o usuário digitasse uma cidade inexistente ou estivesse sem internet, o app falhava silenciosamente ou exibia erros genéricos.
- **Solução:** Adição de tratamento de erros com `try...catch`, mensagens amigáveis para o usuário e estados de erro com `useState`.

### ⏳ Feedback Visual Durante a Requisição
- **Desafio:** O app não indicava ao usuário que a busca estava em andamento.
- **Solução:** Inclusão de um estado `loading` para mostrar a mensagem "Carregando..." enquanto a API responde.

### 📱 Testes em Ambiente Real
- **Desafio:** Verificar o comportamento em diferentes dispositivos e conexões.
- **Solução:** Utilização do **Expo Go** para testes rápidos via QR Code, validando visualização, responsividade e mensagens.

### 🧹 Organização e Escalabilidade do Código
- **Desafio:** Manter o projeto organizado e pronto para evoluções futuras (ex: salvar histórico de buscas, exibir ícones climáticos).
- **Solução:** Estrutura modular com pastas como `components/`, `constants/`, `hooks/` e `scripts/`, mesmo que ainda não estejam todas em uso.

## 🔍 Comparação: Axios vs. Fetch

Durante o desenvolvimento do Clima Agora, optou-se pelo uso da biblioteca **Axios** para realizar requisições HTTP. Abaixo, uma comparação com a API nativa **Fetch**, destacando os motivos dessa escolha:

| Aspecto                  | Axios                                              | Fetch (nativo do JS)                                 |
|--------------------------|----------------------------------------------------|------------------------------------------------------|
| ✅ Simplicidade na Sintaxe | `axios.get(url, { params })`                      | `fetch(url).then(res => res.json())`                |
| ✅ Suporte a JSON automático | Converte automaticamente a resposta em JSON       | É necessário chamar `.json()` manualmente           |
| ✅ Tratamento de erros    | Retorna erro diretamente com status HTTP          | Só lança erro para falhas de rede (não 404, 500...) |
| ✅ Suporte a interceptadores | Sim, facilita configuração global de headers etc | Precisa de configuração manual                      |
| ✅ Suporte a timeout      | Possui nativamente                                | Requer `AbortController`                            |
| 📦 Tamanho do pacote      | Exige instalação via npm (`axios`)                | Nativo, sem dependências                            |

**Por que usamos Axios neste projeto?**  
A escolha se deu principalmente pela **simplicidade na manipulação da requisição**, melhor **tratamento de erros** e a conveniência de lidar com parâmetros de forma mais limpa com o objeto `params`. Isso tornou o código mais legível e robusto.

Exemplo real usado no app:
```ts
const response = await axios.get(BASE_URL, {
  params: {
    key: API_KEY,
    q: city,
    lang: 'pt',
  },
});
```
Esse tipo de estrutura seria mais verbosa e propensa a erros usando `fetch`.
