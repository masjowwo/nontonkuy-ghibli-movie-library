import React from 'react'
import Fade from 'react-reveal/Fade'; 
import { Breadcrumb } from '../../components';

export default function PageDetailTitle({title, subTitle , breadcrumb}) {

  if (title === undefined && subTitle === undefined) return null

  return (
    <section className="container mt-3 pb-lg-5">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb}/>
          </div>
          <div className="col-lg-auto col-12 text-center">
            <h1 className="h3">{title}</h1>
            <span className="text-gray-400 font-weight-light">
              {subTitle}
            </span>
          </div>
          <div className="col d-none d-sm-block"></div>
        </div>
      </Fade>
    </section>
  )
}
