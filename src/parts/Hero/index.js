import React from 'react'
import './index.scss'; 

export default function Hero(props) {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-auto pr-lg-5">
            <h1 className="font-weight-bold line-height-1 mb-4 text-white">
              Forget Busy <span className="text-primary">Work</span> <br/>
              Start <span className="text-primary">Watching </span> Movie
            </h1>
            <p className="font-weight-light text-gray-500" style={{lineHeight: '170%'}}>
              We provide what you need to enjoy your
              movie with family. Time to make another
              memorable moments.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
