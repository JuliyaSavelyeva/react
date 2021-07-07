import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    value: '',
    users: this.props.users,
    count: 0,
  };

  handleChange = event => {
    // this.filteredUsers = this.props.users.filter(
    //   user => user.name.toLowerCase() === event.target.value.toLowerCase(),
    // );

    this.filteredUsers = this.props.users.filter(user =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );

    this.setState({
      value: event.target.value,
      count: this.filteredUsers.length,
      users: !event.target.value ? this.props.users : this.filteredUsers,
    });

    // if (!event.target.value) {
    //   this.count = 0;
    //   this.users = this.props.users;
    // } else if (this.filteredUsers.length > 0) {
    //   this.count = this.filteredUsers.length;
    //   this.users = this.filteredUsers;
    // } else {
    //   this.count = this.state.count;
    //   this.users = this.state.users;
    // }

    //   this.setState({
    //     value: event.target.value,
    //     count: this.count,
    //     users: this.users,
    //   });
    // };

    //   this.setState({
    //     value: event.target.value,
    //     count: !event.target.value
    //       ? 0
    //       : this.filteredUsers.length > 0
    //       ? this.filteredUsers.length
    //       : this.state.count,
    //     users: !event.target.value
    //       ? this.props.users
    //       : event.target.value && this.filteredUsers.length === 0
    //       ? this.state.users
    //       : this.filteredUsers,
    //   });
  };

  render() {
    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={this.state.count}
          onChange={this.handleChange}
        />
        <ul className="users">
          {this.state.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
