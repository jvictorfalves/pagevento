// Função que alterna a visibilidade das respostas das perguntas frequentes
function toggleFAQ(element) {
    // Pega o próximo elemento irmão (a resposta da pergunta)
    const answer = element.nextElementSibling;

    // Verifica se a resposta está visível e alterna sua visibilidade
    if (answer.style.display === "block") {
        // Se a resposta estiver visível, esconde-a
        answer.style.display = "none";
    } else {
        // Caso contrário, torna a resposta visível
        answer.style.display = "block";
    }
}
