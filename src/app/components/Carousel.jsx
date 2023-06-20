import Image from "next/image";
import flores from "../../../public/img/flores.jpg"

export default function Carousel(){
    return<>
        
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
        {/* Este es el primer slider del carrusel */}
        <div className="carousel-item active" data-bs-interval="10000">
            <div className="d-flex justify-content-center">
                <Image 
                    src={flores}
                    className="d-block w-100" 
                    alt="..."
                    width={500}
                    height={700}
                    style={{maxWidth:"100%",height:"500px"}}
                />
            </div>
        </div>
         {/* Este es el segundo slider del carrusel */}
        <div className="carousel-item">
            <div className="d-flex justify-content-center">
                <Image 
                    src={flores} 
                    className="d-block w-100" 
                    alt="..." 
                    width={500}
                    height={700}
                />
            </div>
        </div>
            
         {/* Este es el tercer slider del carrusel */}
        <div className="carousel-item bg-dark">
            <div className="d-flex justify-content-center">
                <Image 
                    src={flores}
                    className="d-block w-100" 
                    alt="..."
                    width={901}
                    height={700}
                />
            </div>
        </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
</div>
    </>
}
  
    
    
    