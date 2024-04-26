document
    .querySelector("#botao-criar")
    .addEventListener("click", (e) => {
            e.preventDefault()
               
            const form = document.querySelector("form")

            const tarefa = {
                titulo:form.titulo.value,
                horaInicial:form.horaInicial.value,
                descricao:form.descricao.value
            }

            salvar(tarefa)
        })

    function salvar(tarefa){
        const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "index.html"
    }