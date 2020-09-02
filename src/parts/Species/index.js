import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchPage} from '../../store/actions/page'
import Fade from 'react-reveal'

function Species(props) {

  const {page} = props

  useEffect(()=> {
    if (!page.species) {
      props.fetchPage("/species", "species");
    }
  })

  if (page.species === undefined) return null

  return (
    <Fade bottom>
      <section className="container">
        <h5 className="mb-4 font-weight-normal mb-3">Species</h5>
        <ul class="list-group list-group-flush">
          {page.species.map((item,index)=> (
            <li class="list-group-item" key={`item-${index}`}>
              <div className="d-flex align-items-center">
                <img src="/assets/icons/alien.svg" width="30" alt="" />
                <div className="ml-3">
                  <p className="m-0">{item.name}</p>
                    <small className="text-gray-500">Classification: {item.classification}</small>
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

export default connect (mapStateToProps, {fetchPage})(Species)