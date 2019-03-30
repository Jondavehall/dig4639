import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'', nameAvailable:false, isValid:true}
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange = (text) => {
    this.setState({value: text});
  }

  onPress(event) {

    if(/^[A-Za-z]+$/.test(this.state.value))
  {
    this.setState({nameAvailable:true});

  }
  else
  {
    this.setState({isValid:false});
  }

event.preventDefault();
  }

  render() {

    let returnArray = []
    if(!this.state.nameAvailable) {
      returnArray.push(

      <View key = "1" style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput key = "3" style={styles.textInput} value={this.state.value} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity key = "2" style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
      </View>
    );

    if(!this.state.isValid)
    returnArray.push(
      <Text key = "error" style={styles.error}> Please enter only valid characters such as a - z, A - Z, and not special characters or numbers</Text>
    );
    return returnArray;
    }else {
    return (<View><Text style={styles.right}> Hello! My first user: {this.state.value}</Text></View>);
  }
}
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  error:
  {
color: "red",
margin:30,
height:75,
fontSize:20
  },
  right:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
