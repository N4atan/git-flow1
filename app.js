
document.getElementById("meu-formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let tarefa = document.getElementById("task").value;
    let date = document.getElementById("date").value.split('-').reverse().join('-');

    if (tarefa === "" || date === "") {
        alert("Adicione uma tarefa primeiro!");
    } else {

        // Criando a div da tarefa
        const tarefaDiv = document.createElement("div");
        tarefaDiv.classList.add("tarefa");

        // Adicionando o conteúdo da tarefa
        tarefaDiv.innerHTML = `
            <p class="tarefa-texto"><strong>Tarefa:</strong> <span>${tarefa}</span></p>
            <p><strong>Data:</strong> ${date}</p>
            <button class="editar-tarefa">Editar</button>
        `;

        // Adicionando a tarefa ao contêiner
        document.getElementById("container-div").appendChild(tarefaDiv);

        // Limpando os inputs
        document.getElementById("task").value = "";
        document.getElementById("date").value = "";

        // Adicionando evento para o botão Editar
        const botaoEditar = tarefaDiv.querySelector(".editar-tarefa");
        botaoEditar.addEventListener("click", () => editarTarefa(tarefaDiv));
    }
});

// Função para editar a tarefa
function editarTarefa(tarefaDiv) {
    const botaoEditar = tarefaDiv.querySelector(".editar-tarefa");
    const spanTexto = tarefaDiv.querySelector(".tarefa-texto span");

    if (botaoEditar.textContent === "Editar") {
        // Transformar o texto em um input editável
        const input = document.createElement("input");
        input.type = "text";
        input.value = spanTexto.textContent;

        // Substituir o span pelo input
        spanTexto.replaceWith(input);
        botaoEditar.textContent = "Salvar";

        // Alterar a cor do botão para indicar edição
        botaoEditar.style.backgroundColor = "green";
        botaoEditar.style.color = "white";
        
    } else {
        // Salvar as alterações
        const novoTexto = tarefaDiv.querySelector("input").value;

        // Criar novamente o span com o texto editado
        const novoSpan = document.createElement("span");
        novoSpan.textContent = novoTexto;

        // Substituir o input pelo span
        tarefaDiv.querySelector("input").replaceWith(novoSpan);
        botaoEditar.textContent = "Editar";

        // Reverter a cor do botão para o estado normal
        botaoEditar.style.backgroundColor = "";
        botaoEditar.style.color = "";
    }
}