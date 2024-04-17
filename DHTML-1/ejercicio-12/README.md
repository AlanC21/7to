Implementar un programa que permita añadir nodos de texto y eliminar nodos de texto de un párrafo (eliminar siempre el primer hijo de la lista)
  if (nparrafo.hasChildNodes())
  {
    nparrafo.removeChild(nparrafo.firstChild);
    contador--;
  }
La propiedad firstChild retorna la referencia al primer hijo que tiene un nodo de tipo elemento.