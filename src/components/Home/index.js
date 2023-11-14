// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

const teamCard = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplTeamsSection: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsContainer()
  }

  getIplTeamsContainer = async () => {
    const response = await fetch(teamCard)
    const totalIplData = await response.json()
    const totalFetchData = totalIplData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsSection: totalFetchData, isLoading: false})
  }

  renderTeamsListSection = () => {
    const {iplTeamsSection} = this.state

    return (
      <ul className="teams-list">
        {iplTeamsSection.map(eachTeam => (
          <TeamCard mainCardDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testId="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="main-home-bg-container">
        <div className="main-home-section">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
            {isLoading ? this.renderLoader() : this.renderTeamsListSection()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
