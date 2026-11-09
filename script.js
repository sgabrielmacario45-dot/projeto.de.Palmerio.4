const campo = document.getElementById("novaTarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

function adicionarTarefa() {
  const texto = campo.value.trim();
  if (texto === "") {
    alert("Digite uma tarefa primeiro.");
    return;
  }

  const item = document.createElement("li");
  const marcar = document.createElement("input");
  marcar.type = "checkbox";

  const nome = document.createElement("span");
  nome.innerText = texto;

  marcar.addEventListener("change", function () {
    item.classList.toggle("concluida", marcar.checked);
  });

  const remover = document.createElement("button");
  remover.innerText = "Remover";
  remover.className = "remover";
  remover.addEventListener("click", function () {
    item.remove();
  });

  item.append(marcar, nome, remover);
  lista.appendChild(item);
  campo.value = "";
  campo.focus();
}

botao.addEventListener("click", adicionarTarefa);
campo.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") adicionarTarefa();
});
