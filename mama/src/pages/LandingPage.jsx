const LandingPage = () => {
    return (
        <section className="flex text-white bg-center bg-no-repeat bg-cover h-screen w-full flex-col items-center bg-atrapasueños">
            <div className="flex w-full h-44 items-center justify-center flex-col">
                <div className="flex font-semibold text-4xl h-20 w-full justify-center items-center font-petit">Chloe Fumet</div>
                <div className="flex font-bold w-72 uppercase text-center font-permanent">artesania y manualidades handmade</div>
            </div>
            <div className="flex w-full h-full items-center justify-center">
              <div className="flex w-80 ">
            <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden h-56">
    <div class="carousel-item active relative float-left w-full">
      <img src="https://i.ibb.co/2cmHVCQ/IMG-20220808-WA0001.jpg" class="flex block overflow-hidden" alt="..." />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full h-44">
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" class="block w-full" alt="..." />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" class="block w-full" alt="..." />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
            <div className="flex w-full h-44 items-center justify-center text-center uppercase font-bold ">
                <div>
                    <ul className="font-permanent">
                        <li className="font-paprika">contacto:</li>
                        <li>telefono: 683 23 32 12</li>
                        <li>email: atrapasomnis.ribes@gmail.com</li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;