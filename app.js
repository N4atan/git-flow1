let tarefas = [];

document.getElementById("meu-formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let tarefa = document.getElementById("task").value;
    let date = document.getElementById("date").value.split('-').reverse().join('-');

    if(tarefa == "" && date == "") {
        alert("Adicione uma tarefa primeiro!");
        
    } else {
        let task = {
            tarefa: tarefa,
            date: date
        }

        console.log(task);
        tarefas.push(task);

        document.getElementById("task").value = "";
        document.getElementById("date").value = "";
    }
})