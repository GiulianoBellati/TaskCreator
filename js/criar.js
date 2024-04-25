document.querySelector("#botao-criar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        horaInicial: form.horaInicial.value,
        horaFinal: form.horaFinal.value,
        descricao: form.descricao.value
    }

    validar(tarefa)

    salvar(tarefa)

})

function salvar (tarefa) {
    const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href = "index.html"
}

function validar(tarefa){
    limparErros()

    if (tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "o título é obrigatório"
    }
    
    if (tarefa.horaInicial.trim() == ""){
        document.querySelector("#horaInicial").classList.add("is-error")
        document.querySelector("#horaInicial-erro").innerText = "A hora inicial é obrigatória"
    }

    if (tarefa.horaFinal.trim() == ""){
        document.querySelector("#horaFinal").classList.add("is-error")
        document.querySelector("#horaFinal-erro").innerText = "A hora final é obrigatória"
    }

    if (tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "a descrição deve ter pelo menos 10 caracteres"
    }
}

function limparErros(){
    const campos = document
                .querySelectorAll("input.is-error, input.is-error")

    campos
        .forEach(input => input.classList.remove("is-error") )

    document.querySelectorAll(".ui positive button")
            .forEach( span => span.innerText = "")
}