import React from 'react'
import Fade from 'react-reveal/Fade'
import './index.scss'
import { Button, ContentTitle } from '../../components'

export default function ListActor({data}) {

  if (data === undefined) return null

  return (
     <section className="container mt-3 pb-lg-5">
        <Fade bottom>
          <ContentTitle 
            title="The Actors"
            subTitle="We have the best actors here"
          />
          <div className="row">
            {data === undefined ? (
              <div className="col-3 mx-auto align-items-center text-center">
                Loading...
              </div>
            ):(
              data.map((actor,index)=> (
                <div className="col-lg-3 mb-4" key={`movie-${index}`}>
                  <div className="d-flex align-items-center">
                    <Button type="link" href={`/actors/${actor.id}`}>
                      <img src={`assets/images/actors/actor-1.jpg`} className="img-cover-circle" alt=""/>
                    </Button>
                    <div className="ml-3">
                      <Button type="link" href={`/actors/${actor.id}`} className="small">
                        {actor.name}
                      </Button>
                      <p className="text-gray-500 small font-weight-light m-0">Male</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </Fade>
      </section>
  )
}
