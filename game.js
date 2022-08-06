const player1 = "x";
const player2 = "o";
var playTime = player1;
var gameOver = false;

inicializarEspacos();

function inicializarEspacos() {
  var espacos = document.getElementsByClassName("espaco");

  for (var i = 0; i < espacos.length; i++) {
    espacos[i].addEventListener("click", function () {
      if (gameOver) {
        return;
      }

      if (this.getElementsByTagName("img").length == 0) {
        if (playTime == player1) {
          this.innerHTML = "<img src='_imagens/x.png'>";
          this.setAttribute("jogada", player1);
          playTime = player2;
        } else {
          this.innerHTML = "<img src='_imagens/o.png'>";
          this.setAttribute("jogada", player2);
          playTime = player1;
        }
      }

      verificarVencedor();

      atualizaMostrador();
    });
  }
}

function atualizaMostrador() {
  if (gameOver) {
    var divVez = document.getElementById("vez");

    console.log(divVez);

    divVez.innerHTML = "";

    return;
  }

  if (playTime == player1) {
    var player = document.querySelectorAll("div#vez img")[0];
    player.setAttribute("src", "_imagens/x.png");
  } else {
    var player = document.querySelectorAll("div#vez img")[0];
    player.setAttribute("src", "_imagens/o.png");
  }
}

function verificarVencedor() {
  var a1 = document.getElementById("a1").getAttribute("jogada");
  var a2 = document.getElementById("a2").getAttribute("jogada");
  var a3 = document.getElementById("a3").getAttribute("jogada");

  var b1 = document.getElementById("a1").getAttribute("jogada");
  var b2 = document.getElementById("b2").getAttribute("jogada");
  var b3 = document.getElementById("b3").getAttribute("jogada");

  var c1 = document.getElementById("c1").getAttribute("jogada");
  var c2 = document.getElementById("c2").getAttribute("jogada");
  var c3 = document.getElementById("c3").getAttribute("jogada");

  var vencedor = "";

  if (
    (a1 == b1 && a1 == c1 && a1 != "") ||
    (a1 == a2 && a1 == a3 && a1 != "") ||
    (a1 == b2 && a1 == c3 && a1 != "")
  ) {
    vencedor = a1;
  } else if (
    (b2 == b1 && b2 == b3 && b2 != "") ||
    (b2 == a2 && b2 == c2 && b2 != "") ||
    (b2 == a3 && b2 == c1 && b2 != "")
  ) {
    vencedor = b2;
  } else if (
    (c3 == c2 && c3 == c1 && c3 != "") ||
    (c3 == b3 && c3 == a3 && c3 != "")
  ) {
    vencedor = c3;
  }

  if (vencedor != "") {
    alert("O ganhador foi: '" + vencedor + "'!");

    gameOver = true;
  }
}

function restart() {
  alert("csakcaslkcns");
  location.reload();
}
