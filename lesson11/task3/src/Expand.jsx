import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isShow: false,
  };

  toggleButton = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const arrow = !this.state.isShow ? (
      <i className="fas fa-chevron-down"></i>
    ) : (
      <i className="fas fa-chevron-up"></i>
    );

    const mainContent = this.state.isShow ? this.props.children : null;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleButton}>
            {arrow}
          </button>
        </div>
        <div className="expand__content">{mainContent}</div>
      </div>
    );
  }
}

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
