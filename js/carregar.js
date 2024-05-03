const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach( tarefa => card(tarefa) )

function card(tarefa){

    const content =`
    <div class="ui cards">
        <div class="card">
        <div class="content">
            <div class="titulo">${tarefa.titulo}</div>
            <div class="horaInicial">${tarefa.horaInicial}</div>
            <div class="descricao">
            ${tarefa.descricao}
            </div>
        </div>

        <button onclick="apagar('${tarefa.id}')"  class="ui inverted red button">
                    <i class="sync trash icon"></i>
                    Deletar
        </button>
    </div>`

const card = document.createElement("div")
card.id = tarefa.id
card.innerHTML = content
document
    .querySelector("#lista-de-tarefas")
    .appendChild(card)
}