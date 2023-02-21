import React from 'react';
import bgImage from "../img/graduate.jpg";
import Post from './post'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    const { scrollY } = this.state;

    return (
      <div className="relative h-screen z-10">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})`, opacity: 1 - scrollY / (window.innerHeight*0.5) }}
        ></div>
        <div className="container mx-auto p-8">
          
          <div className=" pt-16 mt-96 ">
            <Post/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
