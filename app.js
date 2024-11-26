let tarefas = [];

document.getElementById("meu-formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let task = {
        tarefa: document.getElementById("task").value,
        date: document.getElementById("date").value.split('-').reverse().join('-')
    }

    console.log(task);
    tarefas.push(task);

    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
})