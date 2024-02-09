
const container = document.querySelector(".todo-container");

document.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeDaTarefa = document.querySelector("#nomeTarefa");
    const tipoDaTarefa = document.querySelector("#tipoTarefa");

    const nome = document.createElement("p");
    const tipo = document.createElement("p");

    nome.innerText = nomeDaTarefa.value;
    tipo.innerText = tipoDaTarefa.value;

    container.appendChild(nome);
    container.appendChild(tipo);
    




})