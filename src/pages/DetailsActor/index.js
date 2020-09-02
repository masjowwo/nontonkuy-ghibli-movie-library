import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPage} from '../../store/actions/page'
import { Header, DetailsTitle, DetailsInformationActor } from '../../parts';

class DetailsActor extends Component {

  componentDidMount(){
    const idActor = this.props.match.params.id
    this.props.fetchPage(`/people/${idActor}`, 'detailActor')
  }

  render() { 

    const {page} = this.props


    const breadcrumbList = [
      {pageTitle: "Actors", pageHref: "/actors"},
      {pageTitle: "Actor Details", pageHref: ""}
    ] 

    if (page.detailActor === undefined) return null

    return (
      <>
        <Header {...this.props}/>
        <DetailsTitle
          breadcrumb={breadcrumbList}
          title=""
          subTitle=""
        />
        <DetailsInformationActor data={page.detailActor}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  page: state.page
})

export default connect(mapStateToProps, {fetchPage})(DetailsActor)


