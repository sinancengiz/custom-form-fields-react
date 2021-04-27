import React from 'react'
import Option from './Option';

class MultiSelect extends React.Component {
    constructor(props) {
      super(props)
      this.state = { selectedOptions: props.selectedOptions }
      this.onOptionsChange = this.onOptionsChange.bind(this)
    }
  
    onOptionsChange(option, selected) {
      if (selected) {
        this.setState(
          prevState => {
            prevState.selectedOptions.push(option)
            return {
              selectedOptions: prevState.selectedOptions,
            }
          },
          () => this.props.onOptionsChange(this.state.selectedOptions, this.props.item.id)
        )
      } else {
        this.setState(
          prevState => {
            const index = prevState.selectedOptions.indexOf(option)
            if (index > -1) {
              prevState.selectedOptions.splice(index, 1)
            }
            return {
              selectedOptions: prevState.selectedOptions,
            }
          },
          () => this.props.onOptionsChange(this.state.selectedOptions, this.props.item.id)
        )
      }
    }
  
    render() {
      return (
        <fieldset>
          <label>{this.props.item.label}</label>
          {this.props.item.options.map((option, index) => (
            <Option option={option} onOptionChange={this.onOptionsChange} selectedOptions={this.state.selectedOptions} />
          ))}
        </fieldset>
      )
    }
  }
  
export default MultiSelect;