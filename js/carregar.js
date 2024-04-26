const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach( tarefa => card(tarefa) )

function card(tarefa){

    //template literais
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
        <div class="ui bottom attached button">
            <i class="sync alternate icon"></i>
            Alterar
        </div>
        </div>
    </div>`

const card = document.createElement("div")
card.innerHTML = content
document
    .querySelector("#lista-de-tarefas")
    .appendChild(card)

}