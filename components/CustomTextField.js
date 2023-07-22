import {Component, useState} from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';


export default class CustomTF1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }
  render() {
    
    return (
      <TextInput
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        placeholder={this.state.focused?"":"PlaceHolder"}
        onFocus={()=>{this.setState({focused: true})}}
        onBlur={()=>{this.setState({focused: false})}}
         style={
         {  
            borderColor: this.state.focused == true ? '#37b0f7': '#D9D9D9',
            backgroundColor: this.props.value.length < 1 && !this.state.focused? '#D9D9D9': '#FFFFFF',
            borderWidth: 2,
            paddingLeft:5,
            width:"95%",
            height:35,
            alignSelf:"center",
            borderRadius:6,
            padding:10,
            marginTop:20,
         }}
         />
    );
  }
}

CustomTF1.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  border: PropTypes.object.isRequired,
  onChangeText:PropTypes.func.isRequired,
  value:PropTypes.any.isRequired

};

