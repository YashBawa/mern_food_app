import React from 'react'

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !!important "}}>
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption" style={{zIndex:"9"}}>

          {/* form being created using basic fucntionalities to create the search barrr  */}
            <form className='d-flex justify-content-center'>
              <input className='form-control me-2 w-75 bg-white text-dark' type="search" placeholder="Type in..." aria-label="Search"  />
              <button className="btn text-white bg-success" type="submit">Search</button>
            </form>
          </div>


          {/* these are the various different random images being genrated by the unsplash links  */}
          {/* so it creates a carousel of random images  */}
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700?burger" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700?pastry" className="d-block w-100" style={{filter:"brightness(30%"}}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700?barbeque" className="d-block w-100" style={{filter:"brightness(30%"}}  alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </div>
  )
}

{/* 37:33 
Part 3 */}


// 