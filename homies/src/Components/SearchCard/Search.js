import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import './style.css'

export default class SearchCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick () {
    if (!this.props.github.isFetchingUser) {
      this.props.actions.fetchUser(this.state)
    }
  }
  render() {
    return (
      <div className='search-card'>
        {this.props.search.map(el=><Card className="text-white">
  <Card.Img src={el.src} alt="Card image" className='Cardimage'/>
  <Card.ImgOverlay>
    {/* <Card.Title>Card title</Card.Title> */}
    <Card.Text>
    <form onSubmit={e => e.preventDefault()} className='search-form'>
          {/* <input className="form__field"
            type='text'
            size='45'
            placeholder='Service Type'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} /> */}
            <input className="form__field"
            type='text'
            size='45'
            placeholder='Service name'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
          <button 
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
    </Card.Text>
    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
</Card>)}
      </div>
    )
  }
}
