// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {mainCardDetails} = props
  const {id, teamImageUrl, name} = mainCardDetails

  return (
    <li className="list-main-card">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="main-team-para">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
