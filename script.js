const container = document.querySelector(".todo-container");
const btn_feito = document.querySelector(".btn_feito");

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
    btn_feito.classList.add("btnFeito");
    btn_excluir.classList.add("btnExcluir");
    btn_feito.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn_excluir.innerHTML = '<i class="fa-solid fa-xmark"></i>';
})  

document.addEventListener("click",(e) => 
{
    const elemento = e.target;
    if(elemento.classList.contains("btnFeito"))
    {
        const elementoDiv = elemento.closest(".card-todo");
        elementoDiv.classList.add("completed");
    }

    if(elemento.classList.contains("btnExcluir"))
    {
        const elementoDiv = elemento.closest(".card-todo");
        elementoDiv.classList.add("clear");
    }
})
  