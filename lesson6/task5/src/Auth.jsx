import React from 'react';
import Spinner from './Spinner.jsx';
import Logout from './Logout.jsx';
import Login from './Login.jsx';

// const style = {
//   width: 30,
//   height: 30,
// };

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      spinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleSpinner = () => {
    const id = setInterval(() => {
      this.setState({
        spinner: true,
        isLoggedIn: false,
      });
    }, 0);
    setTimeout(() => {
      clearInterval(id);
      this.setState({
        spinner: false,
        isLoggedIn: false,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn && <Login onLogin={this.handleSpinner} />}
        {this.state.spinner && <Spinner size="30px" />}
        {!this.state.spinner && !this.state.isLoggedIn && <Logout onLogout={this.handleLogout} />}
      </>
    );
  }
}

export default Auth;
