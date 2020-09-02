import React, {useEffect} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import {fetchPage} from '../../store/actions/page'
import Fade from 'react-reveal'

function Locations(props) {

  const {page} = props

  useEffect(()=> {
    if (!page.locations) {
      props.fetchPage("/locations", "locations");
    }
  })

  if (page.locations === undefined) return null

  return (
    <Fade bottom>
      <section className="container">
        <h5 className="mb-4 font-weight-normal mb-3">Locations</h5>
        <ul class="list-group list-group-flush" style={{maxHeight: 300, overflowY: 'auto'}}>
          {page.locations.map((location,index)=> (
            <li class="list-group-item" key={`location-${index}`}>
              <div className="d-flex align-items-center">
                <img src="/assets/icons/pin.svg" width="30" alt="" />
                <div className="ml-3">
                  <p className="m-0">{location.name}</p>
                  <small className="text-gray-500">{`${location.terrain}, ${location.climate}`}</small>
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

export default connect (mapStateToProps, {fetchPage})(Locations)