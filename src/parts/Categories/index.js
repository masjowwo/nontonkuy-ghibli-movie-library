import React from 'react'
import { Button } from '../../components'
import Fade from 'react-reveal/Fade';
import './index.scss'

export default function Categories({ data, title }) {

  return (
      <Fade bottom>
        <section  className="categories">
          <div className="container">
            {title ? <h5 className="mb-4 font-weight-normal">{title}</h5> : null }
            <div className="row">
              {data === undefined ? (
                <div className="col-3 mx-auto align-items-center text-center">
                  Loading...
                </div>
              ):(
                data.map((movie,index)=> (
                  <Fade bottom delay={200 * index} key={`movie-${index}`}>
                    <div className="item col-lg-2 col-6 mb-4">
                      <div className="card">
                        <div className="tag">
                          <span style={{lineHeight: 0, fontSize: 18}}>★</span>  {movie.rt_score}
                        </div>
                        <figure className="img-wrapper">
                          <img className="img-cover" src={`/assets/images/posters/${movie.id}.jpg`} alt=""/>
                        </figure>
                        <div className="meta-wrapper">
                          <Button className="stretched-link d-block text-gray-900" href={`/movies/${movie.id}`} type="link">
                            <h5 className="h4 movie-title">{movie.title}</h5>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))
              )}
            </div>
          </div>
        </section>
      </Fade>
    
  )
}
