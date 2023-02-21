import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800 py-4 w-full z-50 fixed bottom-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">
              <p>&copy; {new Date().getFullYear()} Gestion des Departemets</p>
            </div>
            <div className="flex items-center">
              <a className="text-gray-400 hover:text-gray-300" href="#">Privacy Policy</a>
              <span className="text-gray-400 mx-2">|</span>
              <a className="text-gray-400 hover:text-gray-300" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
