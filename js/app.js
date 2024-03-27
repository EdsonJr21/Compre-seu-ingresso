const listaIngressos = {
    inferior: document.getElementById("qtd-inferior"),
    superior: document.getElementById("qtd-superior"),
    pista: document.getElementById("qtd-pista")
  };
  
  function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidade = parseInt(document.getElementById("qtd").value);
  
    if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)) {
      alert("Por favor, insira uma quantidade válida de ingressos.");
      return;
    }
  
    if (listaIngressos[tipoIngresso]) {
      let novaQuantidade = parseInt(listaIngressos[tipoIngresso].textContent) - quantidade;
      if (novaQuantidade >= 0) {
        listaIngressos[tipoIngresso].textContent = novaQuantidade;
      } else {
        alert("Não há ingressos disponíveis para esta categoria!");
      }
    }
  
    document.getElementById("tipo-ingresso").value = "";
    document.getElementById("qtd").value = "";
  }
  