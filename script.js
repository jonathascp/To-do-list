const container = document.querySelector(".todo-container");
const btn_feito = document.querySelector(".btn_feito");
const btn_done = document.querySelector(".done");
const btn_notDone = document.querySelector(".notDone");
const select = document.getElementById("select");

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
    btn_feito.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn_excluir.innerHTML = '<i class="fa-solid fa-xmark"></i>';
})  

document.addEventListener("click",(e) => 
{
    const elemento = e.target;
    if(elemento.classList.contains("btnFeito"))
    {
        const elementoDiv = elemento.closest(".card-todo");
        elementoDiv.classList.toggle("completed");
        elementoDiv.classList.toggle("onGoing");
        
    }

    if(elemento.classList.contains("btnExcluir"))
    {
        const elementoDiv = elemento.closest(".card-todo");
        elementoDiv.remove();
    }
})

function filterTodos(filter)
{
    const todos = document.querySelectorAll(".card-todo");

    switch(filter)
    {
        case "all":
            todos.forEach((todo) => {
                todo.style.display = "flex";
            })
        break;

        case "done":
            todos.forEach((todo) => {
                if(todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }
                else
                {
                    todo.style.display = "none";
                }
            })
        break;

        case "onGoing":
            todos.forEach((todo) => {
                if(!todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }
                else
                {
                    todo.style.display = "none";
                }
            })
        break;
    }
}

select.addEventListener("change",(e) =>{
    const filterValue = e.target.value;
    filterTodos(filterValue);
})

filterTodos(select);

// function saveTodo()
// {
//     const todos = document.querySelectorAll(".card-todo");
//     const todosSaved = localStorage.setItem("todos",JSON.stringify(todos));
// }