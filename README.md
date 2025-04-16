# Lista de Links - linktree

>[!IMPORTANT]
>
>Esse é uma cópia do projeto real que desenvolvi para uma maquiadora. Algumas informações dela foram mantidas. No caso do você querer usar como base para o seu prório projeto, lembre-se de alterar os parâmetros necessários.

Este é um projeto simples de **Linktree** desenvolvido para a maquiadora profissional **Milena Arques**, com o objetivo de centralizar links importantes para seus clientes e seguidores.

## 📋 Funcionalidades

- **Lista de Links**: Links para pré-cadastro de curso online, agendamento de horários, informações sobre cursos presenciais e retorno ao Instagram.
- **Contato via WhatsApp**: Links dinâmicos para contato direto via WhatsApp com mensagens pré-definidas.
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela.
- **Background Personalizado**: Imagem de fundo com opacidade ajustada para destacar o conteúdo.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e responsividade.
- **JavaScript**: Geração dinâmica de links do WhatsApp.
- **API do WhatsApp**: Enviar uma mensagem através da URL.

## 📂 Estrutura do Projeto
├── assets/
│ └── background.jpg
├── index.html
├── script.js
├── style.css
└── README.md

## 🚀 Como Usar

1. Clone este repositório:

    ```git clone https://github.com/danyel492/linktree.git```

2. Abra o arquivo `index.html` no navegador (Pode usar live server ou outro meio de atualização automática)

## 🔧 Configuração

- No arquivo `index.html` você encontrará a seguinte estrutura:

    ```bash
    <div class="list-container">

            <div>
                <a href="https://maquiador360.vercel.app/"> // Aqui está apenas redirecionado para um link
                    📱Pré-cadastro do curso online
                </a>
                <a id="link1" href=""> // Aqui, e no link abaixo, além de redirecionar, ainda vai encaminhar junto uma mensagem que você irá pré-programar na proxima etapa.
                    👩🏻‍🏫 Falar sobre o curso presencial 
                </a>
                <a id="link2" href=""> // Aqui, e no link acima, além de redirecionar, ainda vai encaminhar junto uma mensagem que você irá pré-programar na proxima etapa.
                   💄 Agende seu horario
                </a>
                <a id="link4" href="https://www.instagram.com/MilenaArquesMakeup"> // Aqui está apenas redirecionado para um link
                   💁🏻‍♀️ Volte para o Instagram
                </a>
            </div>

        </div>
    ```
>[!IMPORTANT]
>
>Você pode querer adicionar mais links. É só seguir o mesmo padrão de *id* da tag <a> e acrescentar no arquivo `script.js`.

    - No arquivo `script.js`, substitua o número do telefone e as mensagens pré-definidas conforme necessário:

 ```bash
    const phoneNumber = "5511999999999"; // Substitua pelo número desejado
const messages = {
    link1: "Mensagem personalizada para o link 1",
    link2: "Mensagem personalizada para o link 2",
    contactLink: "Mensagem personalizada para o contato"};
 ```

 >[!INFO]
 >
 >No codigo do projeto está uma menssagem genérica. Ao alterar a const phoneNumber, essas mensagens que serão enviadas para o numero.

## 🔎 Observação

    - Caso queria for adiconar mais links, não se esqueça de seguir os padrões definidos no `index.html` e alterar nos campos:
    
```bash
const messages = {
    link1: "Mensagem personalizada para o link 1",
    link2: "Mensagem personalizada para o link 2",
    contactLink: "Mensagem personalizada para o contato"};
 ```
 e na função:

 ```bash
function setWhatsAppLinks() {
    const link1 = document.getElementById("link1"); //Aumentar o número de links, caso necessário
    const link2 = document.getElementById("link2");
    const contactLink = document.getElementById("contactLink"); //lembrando que esse contato é com você, desenvolvedor

    if (link1) {
        link1.href = `${whatsappBaseUrl}${phoneNumber}&text=${encodeURIComponent(messages.link1)}`;
    }

    if (link2) {
        link2.href = `${whatsappBaseUrl}${phoneNumber}&text=${encodeURIComponent(messages.link2)}`;
    }

    if (contactLink) { //No meio da URL abaixo você vai colocar o seu numero, para entrarem em contato com você
        contactLink.href = `${whatsappBaseUrl}5518981280390&text=${encodeURIComponent(messages.contactLink)}`;
    }
}
 ```

 ## 📝 Licença
Este projeto é de uso livre. Sinta-se à vontade para adaptá-lo às suas necessidades. Não se esqueça de dar os devidos créditos.
