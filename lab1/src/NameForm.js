import React from 'react';

class NameForm extends React.Component {

      constructor(props) {
        super(props);
        this.state = {value: '', nameAvailable:false, isValid:true, setValid:true};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
      if(!/[^a-zA-Z]+/.test(this.state.value)) {
        this.setState({nameAvailable:true});
      }
      else {
        this.props.setValid(false);
      }
        event.preventDefault();
      }

      render() {
        let returnArray = []
        if(!this.state.nameAvailable) {
          returnArray.push(
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>);
              return returnArray;
              } else {
                return (<div>Good Morning {this.state.value}</div>);
              }
              }
            }

    export default NameForm;
