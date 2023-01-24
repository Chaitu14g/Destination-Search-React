import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchValue: '',
  }

  onSearchValue = event => this.setState({searchValue: event.target.value})

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state
    const searchResults = destinationsList.filter(eachItem => {
      const a = eachItem.name.toLowerCase()
      if (a.includes(searchValue.toLowerCase())) {
        return eachItem
      }
      return null
    })
    return (
      <div className="main_container">
        <h1 className="heading">Destination Search</h1>
        <div className="search_container">
          <input
            type="search"
            placeholder="Search"
            className="searchBox"
            onChange={this.onSearchValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search"
          />
        </div>
        <ul className="listItems">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
