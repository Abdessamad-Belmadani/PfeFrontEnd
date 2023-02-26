import React from "react";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showCard: !prevState.showCard,
    }));
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.handleClick}
        >
          {this.state.showCard ? "Hide Card" : "Show Card"}
        </button>
        {this.state.showCard && (
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Some Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lacinia scelerisque convallis. Sed vel nulla lacinia, posuere
                eros vitae, molestie arcu. In eget est ac dolor tempor bibendum
                nec non leo.
              </p>
            </div>
            <div className="px-6 py-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.handleClick}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardComponent;
