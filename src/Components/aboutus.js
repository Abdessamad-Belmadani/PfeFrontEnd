import React from "react";
import PropTypes from "prop-types";

class Aboutus extends React.Component {
render() {
return (
   
    <div className="flex items-center justify-center w-screen">
    <div className="w-full max-w-4xl flex flex-col md:flex-row mt-10 bg-gray-100 rounded shadow-lg">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-8">{this.props.name}</h1>
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">{this.props.goalTitle}</h2>
          <p className="text-gray-800 mb-4">{this.props.goalDescription}</p>
          <h2 className="text-2xl font-bold mb-4">{this.props.formationTitle}</h2>
          <p className="text-gray-800 mb-4">{this.props.formationDescription}</p>
        </div>
      </div>
      <img src="../img/estf.png" id="imgEst" className="w-full md:w-1/2 sm:hidden" />

    </div>
            
           
           
       </div>
    
          
            );
}
}

Aboutus.propTypes = {
        name: PropTypes.string.isRequired,
        goalTitle: PropTypes.string.isRequired,
        goalDescription: PropTypes.string.isRequired,
        formationTitle: PropTypes.string.isRequired,
        formationDescription: PropTypes.string.isRequired
        };

Aboutus.defaultProps = {
        name: "USMBA EST fes",
        goalTitle: "Future Goals",
        goalDescription: "the best university in morocco",
        formationTitle: "Offering best catalog of formations",
        formationDescription: "Forming the best ",
};

export default Aboutus;