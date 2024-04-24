document.querySelector("#botao-criar").addEventListener("click", () => {

    const form = document.querySelector("ui form")

    const tarefa = {
        titulo: form.titulo.value,
        horaInicial: form.horaInicial.value,
        horaFinal: form.horaFinal.value,
        descricao: form.descricao.value
    }

    validar(tarefa)

    console.log(tarefa)

})

function validar(tarefa){
    limparErros()

    if (tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "o título é obrigatório"
    }

    if (tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "a descrição deve ter pelo menos 10 caracteres"
    }
    
    if (tarefa.horaInicial.trim() == ""){
        document.querySelector("#horaInicial").classList.add("is-error")
        document.querySelector("#horaInicial-erro").innerText = "A hora inicial é obrigatória"
    }

    if (tarefa.horaFinal.trim() == ""){
        document.querySelector("#horaFinal").classList.add("is-error")
        document.querySelector("#horaFinal-erro").innerText = "A hora final é obrigatória"
    }
}

function limparErros(){

    document
        .querySelectorAll("input .is-error, textarea .is-error")
        .classList
        .remove("is-error")
    
}