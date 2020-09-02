import React, { Component } from 'react';
import {Header, ListActor} from '../../parts'
import {fetchPage} from '../../store/actions/page';
import {connect} from 'react-redux'

class Actors extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)

    if (!this.props.page.actors) {
      this.props.fetchPage('/people', 'actors')
    }

  }

  render() {

    const {page} = this.props

    return (
      <>
        <Header {...this.props}/>
        <ListActor data={page.actors}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})

export default connect(mapStateToProps, {fetchPage} )(Actors)