import React from 'react'
import './index.scss'

export default function DetailsInformation({data, posterId}) {

  if (data === undefined) return null 

  return (
    <section className="container mt-lg-5 details-information">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="row">
            <div className="col-lg-5 col-8">
              <img src={`/assets/images/posters/film-${posterId}.jpg`} className="img-fluid width-100" alt=""/>
            </div>
            <div className="col-lg-7 font-weight-light">
              <p><span className="text-gray-500">Title:</span>  {data.title}</p>
              <p><span className="text-gray-500">Director:</span>  {data.director}</p>
              <p><span className="text-gray-500">Producer:</span>  {data.producer}</p>
              <p><span className="text-gray-500">Release Date:</span>  {data.release_date}</p>
              <p><span className="text-gray-500">Rating:</span> <span className="badge badge-warning"> <span style={{lineHeight: 0, fontSize: 14}}>★</span> {data.rt_score}</span> </p>
            </div>
            <div className="col-12 mt-lg-5">
              <p className="text-gray-500"> Description</p>
              <p style={{fontSize: 14, lineHeight: 1.8}}> {data.description} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
