import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  handlerChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  search = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handlerChange}
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
