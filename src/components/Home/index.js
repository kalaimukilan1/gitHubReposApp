import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'

import './index.css'

class Home extends Component {
  state = {reposDetails: [], naviStatus: false}

  componentDidMount() {
    this.getReposDetails()
  }

  getReposDetails = async () => {
    const {naviStatus} = this.state
    const pageCount = naviStatus === true ? 2 : 1

    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageCount}`

    const response = await fetch(url, {
      headers: {
        Authorization: 'token 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',
      },
    })
    const responseData = await response.json()

    console.log(responseData.items)
    console.log(responseData)

    if (response.ok === true) {
      const formattedData = responseData.items.map(each => ({
        id: each.id,
        avatarUrl: each.owner.avatar_url,
        description: each.description,
        name: each.name,
        ownerName: each.owner.login,
        lastPushed: each.updated_at,
        noOfIssues: each.open_issues_count,
        noOfStarred: each.stargazers_count,
      }))

      this.setState({reposDetails: formattedData})
    }
  }

  changeNavigationStatus = () => {
    this.setState({naviStatus: true}, this.getReposDetails())
  }

  render() {
    const {reposDetails} = this.state

    return (
      <div className="home-bg-container">
        <div className="starred-repo-container">
          <h1 className="most-starred-head">Most Strarred Repos </h1>
          <ul className="repository-item-ul">
            {reposDetails.map(eachRepo => (
              <RepositoryItem key={eachRepo.id} details={eachRepo} />
            ))}
          </ul>
          <div className="navigation-button-container">
            <button type="button">1</button>
            <button type="button" onClick={this.changeNavigationStatus}>
              2
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
