//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. PA ONDE VAS Y A QUE VAS
    //ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL="https://api.spotify.com/v1/artists/77SW9BnxLY8rJ0RciFqkHh/top-tracks?market=US"

    //2. QUE OPERACION VAS A HACER EN LA BASE DE DATOS
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQAq4G05xpjyK5Dr5LuY7rUzsJpKs7W75Cjq8cOPj7hhUsV7qATep_4RTGNRoeL48TCwUha4viz-mVZN22fZIx7tPPjSexN_Xv00z2sa0qx8tJ6uG2iui1fTF1xM6N0PuBapQHb3G97bkL6Re6NUECusII-KTs6Ib0Qk-iH4ra9fjd4Ush7z7A6Mn75d5WhXfho"}
    }

    //3. NOS VAMOS PAL  RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return(canciones)


}