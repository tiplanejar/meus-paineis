function fazerLogin() {
  const usuarioInput = document.getElementById("usuario").value.trim();
  const senhaInput = document.getElementById("senha").value.trim();

  const usuarioEncontrado = window.usuarios.find(user =>
    user.usuario === usuarioInput && user.senha === senhaInput
  );

  if (usuarioEncontrado) {
    localStorage.setItem("linksPermitidos", JSON.stringify(usuarioEncontrado.paineis));
    window.location.href = "paineis.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
