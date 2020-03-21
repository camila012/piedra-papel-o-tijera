function seleccionarOpcion(opcionSeleccionada) {
  // Array
  const opciones = ['tijeras','papel','piedra']
  const indiceAleatorioArray =  Math.floor(Math.random() * (opciones.length))

  // La consola
  const respuestaDelContrincante = opciones[indiceAleatorioArray];

  // Logica
if(opcionSeleccionada === respuestaDelContrincante) {
  resultados('Empate')
} else {
  if(opcionSeleccionada === 'tijeras') {
    if (respuestaDelContrincante === 'papel')
    {
      resultados('¡Ganaste!')
    }
    if (respuestaDelContrincante === 'piedra') {
      resultados('PERDISTE')
    }
  }
  if(opcionSeleccionada === 'papel') {
    if(respuestaDelContrincante === 'tijeras') {
      resultados('PERDISTE')
    }
     if(respuestaDelContrincante === 'piedra') {
      resultados('¡Ganaste!')
     }
  }

  if(opcionSeleccionada === 'piedra') {
    if(respuestaDelContrincante === 'tijera') {
      resultados('¡Ganaste!')
    }
    if(respuestaDelContrincante === 'papel') {
      resultados('PERDISTE')
    }
  }
}

// id que seleccione 
document.getElementById('opcionSeleccionada').innerText = `Seleccionada= ${opcionSeleccionada}`

// id consola
document.getElementById('respuestaDelContrincante').innerText =`Contrincante= ${respuestaDelContrincante}`

// resultado

function resultados (resultado){

  document.getElementById('resultado').innerText=`${resultado}`
}

}

