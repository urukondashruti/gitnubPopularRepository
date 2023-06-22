import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const list4 = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'PROGRESS',
  initial: 'INITIAL',
}

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    status: list4.initial,
    list1: [],
  }

  componentDidMount() {
    this.getList1()
  }

  getList1 = async () => {
    this.setState({status: list4.loading})
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`

    const response = await fetch(url)

    const result = await response.json()
    if (response.ok === true) {
      const result6 = result.popular_repos.map(each => ({
        Id: each.id,
        imgUrl: each.avatar_url,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        name: each.name,
        issuesCount: each.issues_count,
      }))
      this.setState({list1: result6})
      this.setState({status: list4.success})
    }
    if (response.status === 401) {
      this.setState({status: list4.failure})
    }
  }

  onClickBut = activeId => {
    this.setState({activeId}, this.getList1)
  }

  getLanguageList = () => {
    const {activeId, status, list1} = this.state
    return (
      <ul className="list1">
        {languageFiltersData.map(each => (
          <LanguageItem
            Item={each}
            isActiveId={activeId === each.id}
            onClickBut={this.onClickBut}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  renderRepositoriesListView = () => {
    const {activeId, status, list1} = this.state
    return (
      <ul className="list2">
        {list1.map(each => (
          <RepositoryItem Item1={each} key={each.Id} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getList3 = () => {
    const {status} = this.state

    switch (status) {
      case list4.success:
        return this.renderRepositoriesListView()
      case list4.failure:
        return this.renderFailureView()
      case list4.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="div10">
        <h1 className="head">Popular</h1>
        {this.getLanguageList()}
        {this.getList3()}
      </div>
    )
  }
}

export default GithubPopularRepos
