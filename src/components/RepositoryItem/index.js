import {Link} from 'react-router-dom'

import {AiFillStar, AiOutlineIssuesClose} from 'react-icons/ai'

import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {
    name,
    avatarUrl,
    description,
    lastPushed,
    ownerName,
    noOfIssues,
    noOfStarred,
  } = details

  const lastPushedTime = new Date(lastPushed)
  const lastTime = lastPushedTime.toLocaleDateString()

  return (
    <li className="repository-item-list-container">
      <div>
        <img src={avatarUrl} alt="avatar" className="owner-image" />
      </div>
      <div>
        <h1 className="repos-name">{name}</h1>
        <p className="repos-description">{description}</p>
        <div className="buttons-and-last-push-container">
          <button className="stars-button" type="button">
            <AiFillStar className="star-icon" />
            {noOfIssues}
          </button>
          <button className="issues-button" type="button">
            <AiOutlineIssuesClose className="issue-icon" />
            {noOfStarred}
          </button>
          <p className="last-pushed-para">
            {`Last pushed ${lastTime} by`}{' '}
            <span className="last-pushed-span">{ownerName}</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
