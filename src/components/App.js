import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {

  state = {
    pets: [],
    filters: {
      type: 'all',
      isAdopted: false
    }
  }


  onChangeType = (event) => {
    this.setState({
      filters:{
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    let fetchData = () => {
      return (type === 'all' ? fetch(`/api/pets`) : fetch(`/api/pets?type=${type}`))
    }
    fetchData()
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  onAdoptPet = (petId) => {
    let targetPet = this.state.pets.find(pet => pet.id === petId)
    console.log(petId)
    console.log(targetPet)
    targetPet.isAdopted = true
    this.setState({
      pets: this.state.pets
    })
  }
  
  
  render() {
    console.log(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} isAdopted={this.state.filters.isAdopted} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
