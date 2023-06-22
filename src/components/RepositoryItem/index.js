// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {Item1} = props
  const {imgUrl, forksCount, starsCount, name, issuesCount} = Item1

  return (
    <li className="div4">
      <div>
        <img src={imgUrl} className="size4" alt={name} />
        <h1>{name}</h1>
        <div className="div3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            className="img5"
            alt="stars"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="div3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            className="img5"
            alt="forks"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="div3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            className="img5"
            alt="open issues"
          />
          <p>{issuesCount} issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
