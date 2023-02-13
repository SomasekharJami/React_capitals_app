import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onSelecting = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const filteredData = countryAndCapitalsList.filter(
      eachThing => eachThing.id === activeId,
    )

    return (
      <div className="mainCon">
        <div className="innerCon">
          <h1 className="mainH">Countries and Capitals</h1>
          <div className="selectCon">
            <select
              className="dropDown"
              onChange={this.onSelecting}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="optionName"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="mainP">is capital of which country?</p>
          </div>
          <p className="subH">{filteredData[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
