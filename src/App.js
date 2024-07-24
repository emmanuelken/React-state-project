import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Emmanuel Ken',
        bio: 'I am a Fullstack Developer',
        imgSrc: process.env.PUBLIC_URL + "/myimg.jpeg",
        profession: 'Software Engineer',
      },
      shows: false,
      mountedTime: new Date(),
      interval: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        interval: Math.floor((new Date() - this.state.mountedTime) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, interval } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          {shows && (
            <div>
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <img src={person.imgSrc} alt={person.fullName} />
              <p>{person.profession}</p>
            </div>
          )}
          <p>Time since mounted: {interval} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
