import './Footer.css'

export function Footer(){


    return(

        <footer>
            <div className="container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/logoTNBHD.png?alt=media&token=064e192d-2283-4910-bc58-b1c05e6ffeb8" alt="foto" className="img-fluid w-100 logo"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4>Banda de Musica Alternativo/Independiente</h4>
                        <br/>
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4>Banda de Musica Alternativo/Independiente</h4>
                    </div>
                    <div className="col-12 col-md-4">
                        <i className="bi bi-instagram fuente me-5"></i>
                        <i className="bi bi-tiktok fuente me-5"></i>
                        <i className="bi bi-facebook fuente me-5"></i>
                        <i className="bi bi-vimeo fuente"></i>
                    </div>
                </div>
            </div>
        </footer>

    )

}