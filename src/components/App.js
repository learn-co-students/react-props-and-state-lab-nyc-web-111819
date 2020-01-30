import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({filters: {type: type}})
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    let fetchPet = () => {
      return (type === 'all' ?
        fetch('/api/pets') : fetch(`/api/pets?type=${type}`))
    }
    fetchPet()
    .then(response => response.json())
    .then(pets => {
      console.log(pets)
      let data = pets
      this.setState({pets: data})
    })
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets.map(pet => { if (pet.id === id) {pet.isAdopted = true } return pet})
    console.log(pets)
    this.setState({pets: pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

