import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPage} from '../../store/actions/page'
import { Header, DetailsTitle, DetailsInformation } from '../../parts';

class DetailMovie extends Component {

  componentDidMount(){
    const idMovie = this.props.match.params.id
    this.props.fetchPage(`/films/${idMovie}`, 'detailMovie')
  }

  render() { 

    const {page} = this.props
    const posterId = this.props.match.params.posterId


    const breadcrumbList = [
      {pageTitle: "Home", pageHref: ""},
      {pageTitle: "Movie Details", pageHref: ""}
    ] 

    if (page.detailMovie === undefined) return null

    return (
      <>
        <Header {...this.props}/> 
        <DetailsTitle
          breadcrumb = {breadcrumbList}
          title={page.detailMovie.title}
          subTitle={`by ${page.detailMovie.director}`}
        />
        <DetailsInformation data={page.detailMovie} posterId={posterId}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  page: state.page
})

export default connect(mapStateToProps, {fetchPage})(DetailMovie)
