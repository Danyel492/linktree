const whatsappBaseUrl = "https://api.whatsapp.com/send?phone="; // Esse é a URL padrão da api do whatsapp
const phoneNumber = "5511999999999"; //Trocar esse numero quando usar para outro(a) cliente
const messages = {
    link1: "Olá, estou vendo seu repositório e clicando nos links para testar.",
    link2: "Olá, estou vendo seu repositório e clicando nos links para testar.",
    contactLink: "Olá, gostaria de um orçamento para uma lista de links!" // Aqui está destinado a quem clicar no link no footer
};


function setWhatsAppLinks() {
    const link1 = document.getElementById("link1");
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


document.addEventListener("DOMContentLoaded", setWhatsAppLinks);