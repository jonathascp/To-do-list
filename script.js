const container = document.querySelector(".todo-container");
const btn_feito = document.querySelector(".btn_feito");
const btn_done = document.querySelector(".done");
const btn_notDone = document.querySelector(".notDone");

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
    div.classList.add("onGoing");
    div_button.classList.add("container-button");
    
    title.innerText = nomeDaTarefa.value; 
    btn_feito.classList.add("btnFeito");
    btn_excluir.classList.add("btnExcluir");
    title.classList.add("todo-title");
    btn_feito.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn_excluir.innerHTML = '<i class="fa-solid fa-xmark"></i>';
})  

document.addEventListener("click",(e) => 
{
    const elemento = e.target;
    if(elemento.classList.contains("btnFeito"))
    {
        const elementoDiv = elemento.closest(".card-todo");
        trocarDeClasse(elementoDiv,"completed","onGoing");
    }

    if(elemento.classList.contains("btnExcluir"))
    {
        const elementoDiv = elemento.closest(".card-todo");
        elementoDiv.remove();
    }
})


function buttonsFunctions(button,classe)
{
    button.addEventListener("click",() => 
    {
        selected(button);
        const todosDone = document.querySelectorAll(".card-todo");
        todosDone.forEach((todo)=> 
        {
            if(!todo.classList.contains(classe))
            {
                todo.classList.toggle("hide");
            }
        })
    })
}

function selected(botao)
{
    botao.classList.toggle("selecionado");
}

function trocarDeClasse(elemento,classe1,classe2)
{
    elemento.classList.toggle(classe1);
    elemento.classList.toggle(classe2);
}

buttonsFunctions(btn_done,"completed");
buttonsFunctions(btn_notDone,"onGoing");
  