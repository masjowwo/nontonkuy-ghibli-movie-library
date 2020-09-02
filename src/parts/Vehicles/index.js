import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchPage} from '../../store/actions/page'
import Fade from 'react-reveal'

function Vehicles(props) {

  const {page} = props

  useEffect(()=> {
    if (!page.vehicles) {
      props.fetchPage("/vehicles", "vehicles");
    }
  })

  if (page.vehicles === undefined) return null

  return (
    <Fade bottom>
      <section className="container">
        <h5 className="mb-4 font-weight-normal mb-3">Vehicles</h5>
        <ul class="list-group list-group-flush">
          {page.vehicles.map((item,index)=> (
            <li class="list-group-item" key={`item-${index}`}>
              <div className="d-flex align-items-center">
                <img src="/assets/icons/car.svg" width="30" alt="" />
                <div className="ml-3">
                  <p className="m-0">{item.name}</p>
                    <small className="text-gray-500">{item.description}</small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Fade>
  );
}

const mapStateToProps = state => ({
  page: state.page
})

export default connect (mapStateToProps, {fetchPage})(Vehicles)