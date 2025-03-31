function parsearUrl(laURL) {
    try {
      const url = new URL(laURL);
      const objeto = {
        host: url.origin, 
        pathname: url.pathname, 
        parametros: url.searchParams 
      };
  
      return objeto;
    } catch (error) {
      console.error("Error al parsear la URL:", error);
      return {
        host: null,
        pathname: null,
        parametros: null
      };
    }
  }
  const miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
  const miObjeto = parsearUrl(miUrl);
  console.log(miObjeto);
  
  const miUrlInvalida = 'htp://url-invalida';
  const miObjetoInvalido = parsearUrl(miUrlInvalida);
  console.log(miObjetoInvalido);