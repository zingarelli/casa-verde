# Casa Verde 🪴

Este projeto é o resultado da minha participação no [7 Days of Code](https://7daysofcode.io) da Alura, [edição React](https://7daysofcode.io/matricula/react). O "7 Days of Code" é uma oportunidade de praticar alguma tecnologia, por meio de desafios diários e incrementais que são enviados por e-mail. 

Nesse desafio de React, o objetivo foi desenvolver a [página inicial](https://casa-verde-gold.vercel.app/) do e-commerce da empresa fictícia **"Casa Verde"**, que vende plantas decorativas. O objetivo foi explorar diferentes tecnologias e bibliotecas com o React, criando componentes, utilizando styled-components para estilização, gerenciando estados com hooks e atuando nas interações do usuário com filtros e ordenadores. Os detalhes sobre cada dia podem ser vistos na [seção Desenvolvimento](#desenvolvimento)

## Instalação e execução

O site foi hospedado na Vercel e pode ser visto online neste link: https://casa-verde-gold.vercel.app/. Infelizmente, ele **não** está responsivo, então é melhor visualizado em telas com uma largura de pelo menos 1024px.

Se desejar rodá-lo localmente e modificá-lo, siga as instruções abaixo: 

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando:

    npm start

A aplicação irá rodar no endereço http://localhost:3000.

## Desenvolvimento

O projeto foi desenvolvido em **React** com **TypeScript**, e foi criado com o Create React App, utilizando Node.js (versão v16.15.1) e npm (versão 8.11.0). 

## Dia 01

No primeiro dia, a tarefa foi estudar o [Figma do projeto](https://www.figma.com/file/0yOQR6fGtbdrmqeStiO0jf/7Days-React?type=design&node-id=0-1&t=bZkMTooGMFICXZf6-0) e **criar os componentes** necessários para as **seções de "Menu" e "Newsletter"**. A seção de "Newsletter" inclui um formulário simples para se digitar o e-mail e clicar em um botão de assinatura da newsletter.

Criei dois componentens principais: `<Menu />` e `<AssinaturaNewsletter />` e mais alguns componentes que fiz, tendo em vista seu reúso em outras seções do site: 

- `<Link />`: esse componente renderiza um link e um separador (opcional) e foi criado para se chegar ao mesmo efeito do menu de links do Figma;

- `<Heading />`: muitas seções do site são formadas por um título principal e um sub-título posicionado acima dele, cada com um fonte e estilos diferentes, como pode ser visto na imagem abaixo. Criei esse componente `<Heading />` para poder aplicá-lo nessas diferentes seções. O título e o subtítulo são enviados via props, além de uma prop `size` (opcional), utilizada para aumentar ou diminuir o tamanho do título principal;

    ![imagem exemplificando um título em negrito e fonte grande e um sub-título em cinza e fonte pequena, posicionado acima do título principal](https://user-images.githubusercontent.com/19349339/236294315-8048f0c5-2d9c-427d-993b-beea88402df4.png)

# Dia 02

O desafio foi **utilizar a biblioteca [styled-components](https://styled-components.com)** para aplicar uma solução "CSS-in-JS" na estilização do projeto.

A instalação da biblioteca pode ser feita por meio do comando:

    npm install styled-components

É necessário também instalar o pacote para a tipagem de styled-components:

    npm install --save-dev @types/styled-components

Apliquei o styled-components aos componentes por meio da criação de um arquivo `styled.tsx` na pasta de cada componente. Decidi por essa abordagem para deixar mais separada a estrutura do componente em si de sua estilização. Seguirei dessa forma na criação dos próximos componentes. 

# Dia 03 

Este dia foi dedicado a utilizar o hook `useState` para **melhorar a experiência do usuário** com o formulário de assinatura da Newsletter. Foi proposto que o botão de assinatura fique desabilitado caso o campo de e-mail esteja em branco ou não tenha um e-mail válido.

Para isso, criei dois estados: `active`, para lidar com a validação do campo, e `email`, para armazenar o valor do e-mail. A validação é feita pelo próprio HTML, que disponibiliza um objeto `ValidityState` com uma propriedade `valid` informando se o input está ou não válido. Essa propriedade é utilizada pelo estado `active` para habilitar/desabilitar o botão. 

Aqui foi possível ver a **vantagem do uso de styled-components**, em que pude passar o estado `active` como uma prop ao botão e assim alterar seu estilo dinamicamente. 

O gif abaixo mostra como fica a interação com o campo e input e o botão:

![gif mostrando o botão desabilitado e com uma cor cinza enquanto o campo de input não é preenchido com um e-mail válido. Após preenchido, o botão fica habilitado e com a cor laranja](https://user-images.githubusercontent.com/19349339/236299918-0561d574-1262-4731-bf02-fb9b27248d79.gif)

# Dia 04

Este **não foi um bom dia**...

O desafio proposto foi enviar de fato uma mensagem de boas-vindas ao e-mail da pessoa. Como sugestão, foi recomendada a **utilização da API do [SendGrid](https://docs.sendgrid.com/pt-br/for-developers/sending-email)**. Esta API requer uma key de autenticação para seu uso. Para tratar essa key como uma **variável de ambiente**, sem manter essa informação sigilosa no código, foi utilizado o **pacote [dotenv](https://www.npmjs.com/package/dotenv)**.

O dotenv já vem instalado pelo Create React App. Para utilizar variáveis de ambiente, basta criar um arquivo `.env` e colocar suas variáveis neste arquivo. No entanto, para funcionar, as variáveis devem começar com `REACT_APP_`. Exemplo: 

    REACT_APP_SENDGRID_API_KEY='sua_chave_secreta_aqui'

O motivo de este não ter sido um bom dia foi que não consegui utilizar o SendGrid. Recebi diversos erros de problema com o pacote e na configuracão ao utilizá-lo no React. 

O provável motivo dos erros foi por estar tentando utilizar a API em um projeto de front-end, sendo que a **recomendação** é que o envio de e-mails seja feito no **lado do servidor** (back-end). Os códigos de exemplo da [documentação](https://github.com/sendgrid/sendgrid-nodejs), inclusive, são feitos em Node.js, para serem usados em um projeto de back-end. 

Por conta disso, e por eu ainda não ter conhecimentos em back-end, **pulei a atividade do dia 4**. Mesmo assim, valeu a pena por obter conhecimento nestas duas tecnologias, especialmente no dotenv, que pode ser muito útil em futuros projetos.

# Dia 05

Evoluindo a aplicação, o desafio do dia 05 foi se **comunicar com uma API** para preencher a **seção de ofertas** do site. Esta seção deve mostrar diversos produtos do site como se fosse uma galeria, sendo que produtos com estoque zerado não devem ser exibidos.

Par simular uma API, foi disponibilizado um [arquivo Gist](https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw) com um JSON. Esse Gist, no entanto, estava ruim e incompleto: ele possuía somente 3 produtos e nenhuma informação sobre estoque. Por esse motivo, criei [outro GIST](https://gist.githubusercontent.com/zingarelli/8953e40f635f51675736a4fe45481b17/raw/d17f9d208ada3a4c6714540e9926bb7d534fabd6/casa-verde.json) com mais itens, dados de estoque e imagens.

A comunicação com a API foi feita utilizando a Fetch API. Deixei o código separado em outro arquivo (`utils/api.ts`), para separar as responsabilidades de cada código. 

Criei os componentes `<Ofertas />` e `<Card />`, para montar a seção de ofertas, bem como uma interface `interfaces/Product.ts` para tipar os dados retornados pela API (um array de objetos).

# Dia 06

Continuando na seção de ofertas, foram solicitadas algumas alterações: ela agora deveria mostrar todos os produtos da loja e oferecer **opções para filtrar produtos** a partir de uma faixa de preço, bem como poder **ordená-los por nome ou preço**. 

A ordenação é feita em um elemento de select e o filtro por meio de um formulário contendo um input (tipo `number`) e um botão, como pode ser visto na imagem abaixo:

![screenshot do site exibindo o título "Conheça nossas plantas" e os campos para seleção de ordenação e filtro por valor](https://user-images.githubusercontent.com/19349339/236305325-e1e708ca-12b9-459f-9efb-405dd2d00ba8.png)

Os dois campos, ordenação e filtro, são controlados por variáveis de estados, que eu utilizo como sendo as dependências de um hook `useEffect`. Dessa forma, quando um desses campos é alterado, eu aplico o filtro e a ordenação para que a galeria de produtos seja renderizada de acordo. 

Para evitar ter que fazer uma nova chamada à API quando o filtro é removido, repliquei a lista retornada pela API em uma segunda variável de estado. Assim, o tratamento de filtro e ordenação é feito em uma lista, que recebe os dados originais da outra lista quando o filtro é limpo. Não sinto que seja a solução ideal e acho que isso poderia ser melhorado...

# Dia 07

Para o último dia, o desafio foi **colocar a aplicação no ar** e compartilhá-la com o mundo. Fiz o deploy do projeto na Vercel, e o site está disponível online no link: https://casa-verde-gold.vercel.app/. Deixo mais abaixo uma screenshot com o resultado final.

Também dediquei o dia a preencher este Readme. 

Até o próximo desafio! 🚀

![screenshot mostrando a página inicial finalizada para o site Casa Verde](https://user-images.githubusercontent.com/19349339/236310607-5f9790b6-9ffb-473d-94a0-8280a4140cbd.png)