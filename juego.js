function seleccionarOpcion(opcionSeleccionada) {
  // Array
  const opciones = ['tijeras','papel','piedra']
  const indiceAleatorioArray =  Math.floor(Math.random() * (opciones.length))

  // La consola
  const respuestaDelContrincante = opciones[indiceAleatorioArray];

  // Logica
if(opcionSeleccionada === respuestaDelContrincante) {
  mostrarResultado('Empate')
} else {
  if(opcionSeleccionada === 'tijeras') {
    if (respuestaDelContrincante === 'papel')
    {
      mostrarResultado('¡Ganaste!')
    }
    if (respuestaDelContrincante === 'piedra') {
      mostrarResultado('PERDISTE')
    }
  }
  if(opcionSeleccionada === 'papel') {
    if(respuestaDelContrincante === 'tijeras') {
      mostrarResultado('PERDISTE')
    }
     if(respuestaDelContrincante === 'piedra') {
      mostrarResultado('¡Ganaste!')
     }
  }

  if(opcionSeleccionada === 'piedra') {
    if(respuestaDelContrincante === 'tijera') {
      mostrarResultado('¡Ganaste!')
    }
    if(respuestaDelContrincante === 'papel') {
      mostrarResultado('PERDISTE')
    }
  }
}

// id que seleccione 
document.getElementById('opcionSeleccionada').innerText = `${opcionSeleccionada}`

// id consola
document.getElementById('respuestaDelContrincante').innerText =`${respuestaDelContrincante}`

// resultado

function mostrarResultado(resultado) {
  
  Swal.fire({
    title: resultado,
    width: 600,
    padding: '3em',
    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
      `
  
     
  })

}
 


}




