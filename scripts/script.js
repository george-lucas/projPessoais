var alimentos = [{
	identificador: 1,
  nome: "",
  valor: "",
}];


function adicionarAlimentos(){
  var numero = document.getElementById("numeroAlimentos").value;
  for(i=0; i < numero; i++){
    alimentos.push({identificador:"", nome:"", idade: ""});
    carregarAlimentos();
  }
}
function carregarAlimentos(){
  let alimentos_container = document.querySelector("#containerAlimentos");
  alimentos_container.innerHTML = "";
  alimentos.forEach((el)=>{
  let identificador = el.identificador;
  let nome = el.nome;
  let valor = el.valor;
  let alimento_container = `<div class="dependente" id="${identificador}">
                                <input class="nome" placeholder="Digite o nome do alimento" type="text" value="${nome}"/>
                                <input class="valor" placeholder="Digite o valor do alimento" type="number" value="${valor}"/>
                              </div>`;
  alimentos_container.innerHTML += alimento_container;

  });

}

function salvarAlimentos(){
  document.querySelectorAll("#alimentosContainer .salvar").forEach((el, i)=>{
  	el.addEventListener("click", ()=>{
      let identificador = el.parentElement.parentElement.getAttribute("data-id");
      let nome = el.parentElement.parentElement.querySelector(".nome").value;
      let valor = el.parentElement.parentElement.querySelector(".valor").value;
    	
      if(!nome.length || !valor.length){
      	alert("Nome e idade precisam ser preenchidos para salvar.");
        return false;
      }
  		alimentos.splice(i, 1, {identificador: identificador, nome: nome, valor: valor});
      carregarDependentes();
      travarOutros(false);
    });
  });

  document.querySelector("#result").innerHTML = JSON.stringify(alimentos, undefined, 4);

}



