import {Component} from 'react'

import './index.css'

class SpecificRepository extends Component {
  componentDidMount() {
    this.getSpecificRepositoryDetails()
  }

  getSpecificRepositoryDetails = async () => {
    const url = `https://api.github.com/repos/${owner}/${repo}`

    const response = await fetch(url, {
      headers: {
        Authorization: 'token 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',
      },
    })

    const responseData = await response.json()

    console.log(responseData)
  }

  render() {
    return (
      <div>
        <h1>Specif Repo</h1>
      </div>
    )
  }
}

export default SpecificRepository
