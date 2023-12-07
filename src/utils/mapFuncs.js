function toRadians(grados) {
  return grados * (Math.PI / 180);
}

export function encontrarUsuariosCercanos(usuarioBase, listaUsuarios, rangoEnMetros) {
  const { coords: { latitude, longitude } } = usuarioBase;

  const usuariosCercanos = listaUsuarios
    .map(usuario => {
      const { latitude: lat2, longitude: lon2 } = usuario;
      const distancia = calcularDistancia(latitude, longitude, lat2, lon2);
      return { ...usuario, distancia };
    })
    .filter(usuario => usuario.distancia <= rangoEnMetros)
    .sort((a, b) => a.distancia - b.distancia);

  return usuariosCercanos.map(usuario => usuario.name);
}


export function encontrar2UsuariosCercanos(usuarioBase, listaUsuarios) {
  const { coords: { latitude, longitude } } = usuarioBase;

  // Calcula la distancia para cada usuario y agrega la distancia al objeto del usuario
  const usuariosConDistancias = listaUsuarios.map(usuario => {
    const { coords: { latitude: lat2, longitude: lon2 } } = usuario;
    const distancia = calcularDistancia(lat1, lon1, lat2, lon2);
    return { ...usuario, distancia };
  });

  // Ordena los usuarios por distancia de menor a mayor
  usuariosConDistancias.sort((a, b) => a.distancia - b.distancia);

  // Devuelve los 2 usuarios más cercanos
  return usuariosConDistancias.slice(0, 2);
}

export function calcularDistancia(latitude, longitude, lat2, lon2) {
  const radioTierra = 6371; // Radio de la Tierra en kilómetros

  const dLat = toRadians(lat2 - latitude);
  const dLon = toRadians(lon2 - longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(latitude)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanciaEnKilometros = radioTierra * c;

  // Convertir la distancia a metros
  const distanciaEnMetros = (distanciaEnKilometros * 1000).toFixed(0);

  return distanciaEnMetros;
}
export function calcularDistanciaPlana(x1, y1, x2, y2) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  // Distancia euclidiana en un plano
  const distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  return distancia;
}
 