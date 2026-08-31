/* ==========================================================================
   login.js — valida o acesso e leva para a tela de painéis
   ========================================================================== */

(function () {
  "use strict";

  var form     = document.getElementById("formLogin");
  var campoU   = document.getElementById("usuario");
  var campoS   = document.getElementById("senha");
  var aviso    = document.getElementById("avisoErro");
  var avisoTxt = document.getElementById("textoErro");

  function mostrarErro(msg) {
    avisoTxt.textContent = msg;
    aviso.classList.add("mostra");
  }

  function esconderErro() {
    aviso.classList.remove("mostra");
  }

  // Some o erro assim que a pessoa começa a corrigir
  campoU.addEventListener("input", esconderErro);
  campoS.addEventListener("input", esconderErro);

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var usuarioDigitado = campoU.value.trim().toLowerCase();
    var senhaDigitada   = campoS.value.trim();

    if (!usuarioDigitado || !senhaDigitada) {
      mostrarErro("Preencha usuário e senha.");
      return;
    }

    if (!Array.isArray(window.usuarios)) {
      mostrarErro("Lista de usuários não carregou. Atualize a página (Ctrl+F5).");
      return;
    }

    var encontrado = window.usuarios.find(function (u) {
      return String(u.usuario).trim().toLowerCase() === usuarioDigitado
          && String(u.senha).trim() === senhaDigitada;
    });

    if (!encontrado) {
      mostrarErro("Usuário ou senha incorretos.");
      campoS.value = "";
      campoS.focus();
      return;
    }

    localStorage.setItem("linksPermitidos", JSON.stringify(encontrado.paineis || []));
    localStorage.setItem("usuarioLogado", encontrado.usuario);
    window.location.href = "paineis.html";
  });

  campoU.focus();
})();
