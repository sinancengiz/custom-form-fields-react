import React from 'react'

class Option extends React.Component {
    constructor(props) {
      super(props)
      let selectedBoolen = false;
      this.props.selectedOptions.includes(this.props.option)? selectedBoolen = true : selectedBoolen = false 
      this.state = { selected: selectedBoolen }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange() {
      this.setState(
        prevState => ({ selected: !prevState.selected }),
        () => this.props.onOptionChange(this.props.option, this.state.selected)
      )
    }
  
    render() {
      return (
        <div>
          <input
            type="checkbox"
            id={this.props.option}
            name="option name"
            value={this.props.option}
            onChange={this.handleChange}
            checked={this.state.selected}
          />
          <label htmlFor={this.props.option}>{this.props.option}</label>
        </div>
      )
    }
  }

export default Option;