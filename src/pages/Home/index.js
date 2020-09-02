import React, { Component } from 'react';
import { Header, Hero, Categories} from '../../parts';
import { connect } from 'react-redux';
import {fetchPage} from '../../store/actions/page'

class Home extends Component {

   componentDidMount() {
     window.scrollTo(0, 0)

     if (!this.props.page.movies) {
       this.props.fetchPage('/films', 'movies')
     }

   }

  render() {

    const {page} = this.props

    return (
      <>
        <Header {...this.props} />
        <Hero/>
        <Categories data={page.movies} title="Recomendation"/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})

export default connect(mapStateToProps, {fetchPage} )(Home)