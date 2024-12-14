# Evento - La Bella

Este projeto é uma página web para promover o evento de aniversário de **La Bella**, uma loja especializada em maquiagens e cosméticos. O evento oferece promoções e descontos imperdíveis de até **50%** em diversos produtos selecionados. A página foi desenvolvida com HTML, CSS e JavaScript, oferecendo uma experiência visual atrativa e funcional para os usuários.

## Descrição

A **La Bella** está comemorando seu 6º aniversário e, para celebrar, estará realizando um evento com grandes descontos em seus produtos. A página contém as seguintes seções principais:

- **Cabeçalho:** Um título chamativo com o nome do evento e links de navegação.
- **Informações sobre o evento:** Detalhes sobre o evento, como data, horário, local e uma breve descrição.
- **Galeria de Produtos:** Exibe uma seleção de produtos em promoção com imagens e efeitos de hover.
- **FAQ (Perguntas Frequentes):** Uma seção interativa onde os visitantes podem encontrar respostas para as perguntas mais comuns sobre o evento e a promoção.
- **Redes Sociais:** Links para as redes sociais da loja, permitindo que os usuários sigam e compartilhem o evento.
- **Rodapé:** Informações de direitos autorais.

## Funcionalidades

- **Design Responsivo:** O layout foi desenvolvido para ser responsivo, garantindo uma boa experiência em dispositivos móveis e desktop.
- **Interatividade:** A seção de **Perguntas Frequentes (FAQ)** oferece uma interação simples onde o usuário pode expandir ou ocultar as respostas.
- **Galeria de Produtos:** Imagens dos produtos selecionados são exibidas em um formato de galeria dinâmica com animação ao passar o mouse.
- **Links de Redes Sociais:** Direciona os usuários para o Instagram e WhatsApp da loja, permitindo interação direta.

## Estrutura do Projeto

Este repositório contém os seguintes arquivos principais:

### 1. **HTML (`index.html`)**
   O arquivo **HTML** contém a estrutura da página e é a espinha dorsal do projeto. Ele organiza o conteúdo em seções como cabeçalho, informações do evento, galeria de produtos, FAQ e rodapé.

   - **Cabeçalho e Navegação:** Inclui links para as seções da página, como "Produtos", "FAQ" e "Contato".
   - **Informações do Evento:** Exibe o banner com informações sobre a data, hora e local.
   - **Galeria de Produtos:** Apresenta imagens dos produtos com um efeito de hover para destacar os itens em promoção.
   - **FAQ:** Seção com perguntas e respostas interativas.
   - **Rodapé:** Inclui informações legais e créditos.

### 2. **CSS (`style.css`)**
   O arquivo **CSS** define o design visual da página. Ele utiliza técnicas como flexbox e animações CSS para garantir que a página tenha uma aparência moderna e funcional.

   - **Estilo Responsivo:** O layout é ajustado para diferentes tamanhos de tela utilizando media queries.
   - **Animações:** As imagens na galeria possuem animações de zoom ao passar o mouse, e o botão FAQ tem animações de transição.
   - **Cores e Fontes:** A paleta de cores combina tons dourados e escuros para criar um visual sofisticado e elegante, adequado para um evento de maquiagem e cosméticos.

### 3. **JavaScript (`script.js`)**
   O arquivo **JavaScript** contém a lógica que permite a interatividade da seção de perguntas frequentes (FAQ).

   - **Função `toggleFAQ`:** Alterna a visibilidade das respostas das perguntas quando o usuário clica na pergunta. Se a resposta estiver visível, ela é ocultada; se não estiver visível, ela será exibida.

## Como Visualizar o Projeto

Para visualizar a página do evento localmente, siga as instruções abaixo:

1. **Clone o repositório:**
   Primeiro, clone este repositório para o seu computador usando o comando Git:

   ```bash
   git clone https://github.com/seu-usuario/La-Bella-Evento.git
