import React from 'react';

const coral = 'Coral';
const aqua = 'Aqua';
const bisque = 'Bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerTitle: '',
    }
  }
  setText = color => {
    this.setState({
      pickerTitle: color,
    })
  }

  deleteText = () => {
    this.setState({
      pickerTitle: this.setState,
    })
  }

  render() {
    return (
    <div>
      <div className="picker__title">
       {this.state.pickerTitle}
      </div>
      <div>
        <button 
          className="picker__button picker__button_coral"
          onMouseOver={this.setText.bind(this, coral)}
          onMouseOut={this.deleteText}>
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

const a = 'aaa'.split('');
console.log({});
console.log(a);

const o = ['a', 'b'];
console.log(a.toString());
