// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const getMatchStatusChange = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `match-status ${getMatchStatusChange(
    matchStatus,
  )}`

  return (
    <li className="main-match-list-section">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="total-results">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
