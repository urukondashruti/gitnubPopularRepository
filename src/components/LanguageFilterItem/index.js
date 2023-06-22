// Write your code here
import './index.css'

const LanguageItem = props => {
  const {Item, isActiveId, onClickBut} = props
  const {id, language} = Item
  const val = isActiveId ? 'con' : 'back'

  const onClickBut1 = () => {
    onClickBut(id)
  }

  return (
    <li>
      <button type="button" className={`${val}`} onClick={onClickBut1}>
        <p>{language}</p>
      </button>
    </li>
  )
}

export default LanguageItem
