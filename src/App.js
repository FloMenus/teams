import React from 'react'

import './App.css'

import Teams from './teams.json'
import TeamInfo from './components/TeamInfo.js'
import Counter from './components/Counter.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      value: 10
    }
  }

  handleClickMinus = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 })

    }
  }
  handleClickPlus = () => {
    if (this.state.value < Teams.length)
      this.setState({ value: this.state.value + 1 })
  }


  render() {
    return (
      <div className="all">

        <Counter count={this.state.value}
          increment={this.handleClickPlus}
          substract={this.handleClickMinus} />

        <div className="team-section">
          <h2 className="team-title">Equipes</h2>
          <ul>
            {Teams.slice(0, this.state.value).map(team =>
              <TeamInfo
                shortName={team.shortName}
                image={team.crestUrl}
                address={team.address}
                email={team.email}
                phone={team.phone}
                foundation={team.founded} />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App