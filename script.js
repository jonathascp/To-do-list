const container = document.querySelector(".todo-container");

document.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeDaTarefa = document.querySelector("#nomeTarefa");

    const div = document.createElement("div");
        const div_button = document.createElement("div");
        const title = document.createElement("p");
        const btn_feito = document.createElement("button");
        const btn_excluir = document.createElement("button");

        container.appendChild(div);
        div.appendChild(title);
        div.appendChild(div_button);
        div_button.appendChild(btn_feito);
        div_button.appendChild(btn_excluir);

        div.classList.add("card-todo");
        div_button.classList.add("container-button");

        title.innerText = nomeDaTarefa.value;
        btn_feito.innerText = "Feito";
        btn_excluir.innerText = "Excluir";
})
   
        
