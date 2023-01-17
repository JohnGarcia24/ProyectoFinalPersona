export async function generarToken(){

    const client_id="client_id=9e4aaa69babe4b089537ea4dcd7cbe59"
    const client_secret="client_secret=e92f2ae41f1e464e9e0b941908f3cf5f"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDEfinitivo=token.token_type+" "+token.access_token

    return(tokenDEfinitivo)
}