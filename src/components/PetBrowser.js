import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render(props) {
    let displayedPets = this.props.pets.map(pet => <Pet key={pet.id} pet={pet} isAdopted={this.props.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)
    return (
    <div className="ui cards">
      {displayedPets}
    </div>
    )}
}

export default PetBrowser
