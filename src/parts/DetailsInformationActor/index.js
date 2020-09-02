import React, {useEffect} from 'react'
import { Button } from '../../components'
import {connect} from 'react-redux'
import {fetchPage} from '../../store/actions/page'

function DetailsInformationActor(props) {
  const {data, page} = props
  
  const getFilmId = () => {
    const url = data.films[0].split('https://ghibliapi.herokuapp.com/films/')
    const idFilm = url.join("") 
    return idFilm
  }

  useEffect(() => {
      props.fetchPage( `/films/${getFilmId()}`, 'detailMovie')
  })
  
  if (data === undefined || page.detailMovie === undefined) return null;

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto text-center">
            <img src="/assets/images/actors/actor-2.jpg" width="300" className="mb-4" alt=""/>
            <p><span className="text-gray-500">Name:</span> {data.name}</p>
            <p><span className="text-gray-500">Gender:</span> {data.gender}</p>
            <p><span className="text-gray-500">Age:</span> {data.age}</p>
            <p>
              <span className="text-gray-500">Films: </span>
              <Button type="link" href={`/movies/1/${getFilmId()}`}>
                { page.detailMovie.title }
              </Button>
            </p>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(DetailsInformationActor);