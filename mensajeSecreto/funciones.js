function descifrarMensaje() {
  const texto = document.getElementById("text").value;
  const mensajeDescifrado = texto.replace(/\((.*?)\)/g, (match, contenido) => {
    return "(" + contenido.split("").reverse().join("") + ")";
  });
  alert(mensajeDescifrado);
}
