import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, title, onToggleButton, isShow }) => {
  const arrow = !isShow ? (
    <i className="fas fa-chevron-down"></i>
  ) : (
    <i className="fas fa-chevron-up"></i>
  );

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggleButton}>
          {arrow}
        </button>
      </div>
      {isShow && <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.propTypes = {
  isShow: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onToggleButton: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: '',
  isShow: false,
};

export default Expand;
