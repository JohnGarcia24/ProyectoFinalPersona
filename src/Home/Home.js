import './Home.css'

import {Footer} from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>The Neighbourhood</h2>
                            <p>
                            The Neighbourhood (abreviado como THE NBHD) es una banda de musica alternativa rock estadounidense creada en agosto de 2011. El grupo está formado por el vocalista Jesse Rutherford, los guitarristas Jeremy Freedman, Zach Abels y el bajista Mikey Margott. El baterista Brandon Fried fue expulsado de la banda el 13 de noviembre del 2022 tras ser denunciado por abuso sexual públicamente por Maria Zardoya, integrante de la banda de The Marias. La banda publicó su primer álbum de estudio el 23 de abril de 2013 a través de Columbia Records. El 16 de enero de 2014 la banda anunció a través de sus redes sociales que el baterista Bryan Sammis abandonaba el grupo por problemas con el vocalista Jesse Rutherford, y que continuaría su carrera musical en solitario. En noviembre de 2014 lanzaron los álbumesThank you, I Love You, The Love Collection, Wiped Out! y Hard EP, que destacan por sus portadas en blanco y negro. En 2018, lanzaron su primer álbum con una portada en color, el cual cuenta con un sonido mucho más electrónico que sus predecesores y con el que obtuvieron más reconocimiento. Su álbum más reciente es Chip Chrome & The Mono-Tones.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/The-Neighbourhood-concierto.webp?alt=media&token=9314b056-1c6e-4ac9-a72c-d752ee6fffd3" className="img-fluid w-100"></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/carrucel%201.jpg?alt=media&token=0c959b59-87b0-47ec-9741-810af9474bf0" alt="" className="img-fluid w-100"/>
                           <p>
                           Aunque el concierto de The Neigbourhood en Bogotá este 7 de junio no era una novedad, teniendo en cuenta que el 23 de marzo del año pasado estuvieron en la capital del país para el Estéreo Picnic, no fue para nada lo mismo. Dos espectáculos completamente diferentes en donde, este último, se caracterizó por la madurez del proyecto musical
                           </p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/carrucel%202.jpg?alt=media&token=b518872c-f306-4549-9e76-9ce02e2e1471" alt="" className="img-fluid w-100"/>
                           <p>
                           The Neighbourhood es una de las bandas más queridas de la escena alternativa mundial de los últimos años y han cosechado un éxito exponencial desde el 2013 cuando estrenaron el disco I Love You, con el hitazo que en su momento significó “Sweater Weather”. Ahora, después de casi 10 años de éxito, parece que la banda estaría pensando en tomarse una pausa.
                           </p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/carrucel%203.png?alt=media&token=26d8acc2-1273-477a-aaf9-148cd3536bfd" alt="" className="img-fluid w-100"/>
                           <p>
                           Aún es difícil pensar en conciertos desde casa, en donde prendes el dispositivo de tu elección y, tal vez, lo conectes a una pantalla más grande para disfrutar la presentación de tu banda favorita. Eso sí, para cada uno la experiencia es diferente; tomas un lugar, ya sea la sala o alguna recámara, apagas las luces, te sientas o te quedas de pie ansioso por bailar y disfrutar del concierto en streaming. Los rituales y sensaciones son diferentes, ya no estamos influenciados por el calor de la gente, o los empujones, gritos y desmayos antes y durante la presentación. Algo colectivo se volvió íntimo y lo más cerca que podemos estar de otros fans es a través de un chat.
                           </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
            
        </>
    )

}