import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

 class SearchBar extends Component {
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
      
      <div className='searchbar-container'>
         <Carousel className='Carousel'>
  <Carousel.Item>
    <img
      className="carousel carouselimg"
      src={require("../searchBar/handyman.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
    <form onSubmit={e => e.preventDefault()}>
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
        <h3>We offer plumbing services</h3>
      <p>With one click your plumber will be there for you!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel carouselimg"
      src={require("../searchBar/garden.jpeg")}
      alt="Third slide"
    />

    <Carousel.Caption>
    <form onSubmit={e => e.preventDefault()}>
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
      <h3>Have a nice garden!</h3>
      <p>Our gardeners provide the best services and makes from your garden a heaven!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel carouselimg"
      src={require("../searchBar/beauty.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
    <form onSubmit={e => e.preventDefault()}>
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
            value={this.state.username}
             />
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
      <h3>Relax!</h3>
      <p>We also provide beauty and health services.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       
      </div>
    )
  }
}

export default SearchBar