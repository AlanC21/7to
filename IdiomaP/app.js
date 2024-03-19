const http = require('node:http')
const fs = require('node:fs')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8888' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(8888)


function encaminar(pedido, respuesta, camino) {
  console.log(camino)
  switch (camino) {
    case 'public/recuperarDato': {
      recuperarDato(pedido, respuesta)
      break
    }
    default: {
      fs.stat(camino, error => {
        if (!error) {
          fs.readFile(camino, (error, contenido) => {
            if (error) {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
              respuesta.write('Error interno')
              respuesta.end()
            } else {
              const vec = camino.split('.')
              const extension = vec[vec.length - 1]
              const mimearchivo = mime[extension]
              respuesta.writeHead(200, { 'Content-Type': mimearchivo })
              respuesta.write(contenido)
              respuesta.end()
            }
          })
        } else {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' })
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
          respuesta.end()
        }
      })
    }
  }
}

function traducirAIdiomaP(frase) {
  frase = frase.toLowerCase();

  const vocales = ['a', 'e', 'i', 'o', 'u'];

  let fraseTraducida = "";
  for (let i = 0; i < frase.length; i++) {
      let caracter = frase[i];

      if (vocales.includes(caracter)) {
          fraseTraducida += caracter + 'p' + caracter;
      } else {
          fraseTraducida += caracter;
      }
  }

  return fraseTraducida;
}

function recuperarDato(pedido, respuesta) {
  let info = ''
  pedido.on('data', datosparciales => {
    info += datosparciales
  })
  pedido.on('end', () => {
    const formulario = new URLSearchParams(info)
    console.log(formulario)

    const texto = formulario.get('texto')
    const textoTraducido = traducirAIdiomaP(texto)

    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    const pagina =
      `<!doctype html><html><head><link rel="stylesheet" href="style.css" /></head><body>
      <div class="container">
       <span><b>Texto a traducir:</b> ${texto}<span><br>
       <span><b>Texto traducido:</b> ${textoTraducido}<span><br>
       <a href="index.html">Retornar</a>
      </div>
     </body></html>`
    respuesta.end(pagina)
  })
}

console.log('Servidor web iniciado')