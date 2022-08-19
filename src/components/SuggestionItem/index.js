// Write your code here

import './index.css'

const SearchList = props => {
  const {userDetails, onclickArrow} = props
  const {suggestion} = userDetails
  const onArrow = () => {
    onclickArrow(suggestion)
  }
  return (
    <li className="lists">
      <p className="sugg-text">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SearchList
