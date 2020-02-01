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

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    this.fetchPets()
  }

  fetchPets = () => {

    if (this.state.filters.type === 'all') {
      fetch("/api/pets")
      .then(response => response.json())
      .then(petData => this.setState({
        pets: petData
      }))
    }

    if (this.state.filters.type === 'dog') {
      fetch("/api/pets?type=dog")
      .then(response => response.json())
      .then(petData => this.setState({
        pets: petData
      }))
    }

    if (this.state.filters.type === 'cat') {
      fetch("/api/pets?type=cat")
      .then(response => response.json())
      .then(petData => this.setState({
        pets: petData
      }))
    }

    if (this.state.filters.type === 'micropig') {
      fetch("/api/pets?type=micropig")
      .then(response => response.json())
      .then(petData => this.setState({
        pets: petData
      }))
    }
  }

  onAdoptPet = (petId) => {
    
    let targetPet = this.state.pets.filter(pet => pet.id === petId)[0]
    targetPet.isAdopted = true

    this.setState({
      pets: this.state.pets
    })
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
              <Filters filtersType={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
