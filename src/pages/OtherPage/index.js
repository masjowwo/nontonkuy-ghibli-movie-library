import React, { Component } from 'react'
import { Header, Locations, Species, Vehicles } from '../../parts'
import { ContentTitle } from '../../components'

export default class OtherPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}/>
        <ContentTitle
          title="Something that's in Our Film"
          subTitle = "You might want to see this"
        />
        <Locations/>
        <Species/>
        <Vehicles/>
      </>
    )
  }
}
