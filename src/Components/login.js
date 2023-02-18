// import React from 'react';

// class LoginForm extends React.Component {
//   render() {
//     return (
      
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//               <input type="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
//               <input type="password" id="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
//             </div>
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginForm;

import React from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Implement form submission logic
  }

  handleReset(event) {
    this.setState({
      email: "",
      password: "",
    });
  }

  handleToggleShowPassword(event) {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  render() {
    const { email, password, showPassword } = this.state;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="button"
            className="absolute top-0 right-0 mr-3 "
            onClick={this.handleToggleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default LoginForm;

