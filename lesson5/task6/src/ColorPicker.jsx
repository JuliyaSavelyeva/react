import React from 'react';

const coral = 'Сoral';
const aqua = 'Aqua';
const bisque = 'Bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }
  setText = color => {
    this.setState({
      text: color,
    })
  }

  deleteText = () => {
    this.setState({
      text: '',
    })
  }

  render() {
    return (
    <div>
      <div className="picker__title">
       {this.state.text}
      </div>
      <div>
        <button 
          className="picker__button picker__button_coral"
          onMouseEnter={this.setText.bind(this, coral)}
          onMouseLeave={this.deleteText}>
        </button>
        <button 
          className="picker__button picker__button_aqua" 
          onMouseOver={this.setText.bind(this, aqua)}
          onMouseOut={this.deleteText}>
        </button>
        <button 
          className="picker__button picker__button_bisque" 
          onMouseOver={this.setText.bind(this, bisque)}
          onMouseOut={this.deleteText}>
        </button>
      </div>
    </div>
    );
  }
}

export default ColorPicker;
