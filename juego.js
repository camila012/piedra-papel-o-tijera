function seleccionarOpcion(opcionSeleccionada) {
  // Array
  const opciones = ['tijeras','papel','piedra']
  const indiceAleatorioArray =  Math.floor(Math.random() * (opciones.length))

  // La consola
  const respuestaDelContrincante = opciones[indiceAleatorioArray];

  // Logica
if(opcionSeleccionada === respuestaDelContrincante) {
  empate('Empate')
} else {
  if(opcionSeleccionada === 'tijeras') {
    if (respuestaDelContrincante === 'papel')
    {
      ga('¡Ganaste!')
    }
    if (respuestaDelContrincante === 'piedra') {
      perdiste('PERDISTE')
    }
  }
  if(opcionSeleccionada === 'papel') {
    if(respuestaDelContrincante === 'tijeras') {
      perdiste('PERDISTE')
    }
     if(respuestaDelContrincante === 'piedra') {
      ganaste('¡Ganaste!')
     }
  }

  if(opcionSeleccionada === 'piedra') {
    if(respuestaDelContrincante === 'tijera') {
      ganaste('¡Ganaste!')
    }
    if(respuestaDelContrincante === 'papel') {
      perdiste('PERDISTE')
    }
  }
}

// id que seleccione 
document.getElementById('opcionSeleccionada').innerText = `${opcionSeleccionada}`

// id consola
document.getElementById('respuestaDelContrincante').innerText =`${respuestaDelContrincante}`

// resultado

function empate (resultado){

  Swal.fire({
    icon: 'info',
    title:resultado,
    showConfirmButton: false,
    timer: 1500
   
  })
  
  
    
}

function perdiste (resultado){

  Swal.fire({
    icon: 'error',
    title:resultado ,
    showConfirmButton: false,
    timer: 1500
   
  })
  
  
    
}

function ganaste (resultado){

  Swal.fire({
    icon: 'success',
    title:resultado,
    showConfirmButton: false,
    timer: 1500
   
  })
  
  
    
}

}

