import React from 'react';
import bgImage from "../img/graduate.jpg";
import Link from './link';
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
      <div className="relative h-screen z-10 overflow-x-hidden">
        <div
          className="h-screen  bg-center bg-cover bg-fixed "
          style={{ backgroundImage: `url(${bgImage})`, opacity: 1 - scrollY / (window.innerHeight*1.5) }}
        ></div>
        <div className=" absolute container mx-auto p-8 ">
          
          <div className="  ">
                <Link/>      
            <Post/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
