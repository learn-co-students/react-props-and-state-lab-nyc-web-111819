import React from 'react'

class Pet extends React.Component {

  render() {
    // console.log(this.state.adopted)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h2>{this.props.pet.name}</h2>
            <h4>Gender: {this.props.pet.gender === 'male' ? '♂' : '♀' }</h4>
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} TON</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet