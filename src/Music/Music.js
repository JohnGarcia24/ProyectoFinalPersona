import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
import { Footer } from "../shared/Footer/Footer"

export function Music(){

    //usando el hook useState para almacenar la respuesta del api de forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //usando el hook useEffect para limitar el consumo del api una sola vez
    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
         })

    },[])

    //Render del componente:
    if(estadoCarga==true){

        return(
            <>
               <h2>Estamos cargando las canciones</h2>
            </>
        )

    }else
    
    
    {

        return(
            <>
               <h2>Canciones de la banda: </h2>
               {
                <>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            canciones.tracks.map(function(cancion){
                                return(
                                    <div className="col">

                                        <div className="card h-100 shadow">

                                        <img src={cancion.album.images[0].url} ></img>
                                        <h1 className="text-center">{cancion.name}</h1>
                                        <audio controls src={cancion.preview_url}></audio> 

                                        </div>
                                    </div>
        
                                    
                                    
                                )
                            })

                        }
                    </div>
                </div>
                </>
                
                    
               }
               
               <Footer/>
            </>
            
        )

    } 

}

