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

            // Cria uma nova div para exibir a tarefa
        const tarefaDiv = document.createElement("div");
        tarefaDiv.classList.add("tarefa");

        // Adiciona o conteúdo na div
        tarefaDiv.innerHTML = `
            <p><strong>Tarefa:</strong> ${task.tarefa}</p>
            <p><strong>Data:</strong> ${task.date}</p>
        `;

        // Adiciona a div ao corpo da página
        document.getElementById('container-div').appendChild(tarefaDiv);

            document.getElementById("task").value = "";
            document.getElementById("date").value = "";
        }
    })