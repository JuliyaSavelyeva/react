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
    this.filteredUsers = this.props.users.filter(
      user => user.name.toLowerCase() === event.target.value.toLowerCase(),
    );

    this.setState({
      value: event.target.value,
      count: this.filteredUsers.length > 0 ? this.filteredUsers.length : 0,
      users: !event.target.value // || this.filteredUsers.length === 0
        ? this.props.users
        : this.filteredUsers,
    });
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
