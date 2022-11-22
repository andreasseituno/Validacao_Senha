var caixa = window.document.getElementById("senha");
var res = window.document.getElementById("mensagem");

var cont = 0;

caixa.addEventListener("keyup", function (e) {
  if (e.key == "Enter") 
  botaozar();
});

res.innerHTML = "</br> </br> </br>";

function botaozar() {
  var n = " ";
  var senha = caixa.value;
  var tentativas = "";

  if (Number(senha) * 0 != 0) {
    alert("Digite somente números");
    caixa.value = null;
    return;
  }

  var agora = new Date();
  var segundos1 = agora.getSeconds();
  var minutos1 = agora.getMinutes();

  for (var cont = 0; tentativas != senha; cont++) {
    tentativas = "";

    for (let i = 1; i <= senha.length; i++) {
      n = (Math.random() * 9).toFixed();
      tentativas += n;
    }
  }

  var agora2 = new Date();
  var segundos2 = agora2.getSeconds();
  var minutos2 = agora2.getMinutes();

  res.innerHTML = `Foi necessário um total de ${cont} tentativas para encontrar sua senha </br> </br>`;

  res.innerHTML += `O tempo para encontrar sua senha foi de ${Math.abs(
    minutos2 - minutos1
  )} minutos e ${Math.abs(segundos2 - segundos1)} segundos`;
}
