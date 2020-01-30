import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petHandler = () => {
    return this.props.pets.map(pet => {return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>})
    // console.log(this.props.pets)
  }

  render() {
    return <div className="ui cards">{this.petHandler()}</div>
  }
}

export default PetBrowser
