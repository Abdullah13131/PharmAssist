import * as React from 'react';
import { Text,StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <TouchableOpacity style={[styles.button,
      {backgroundColor: this.props.backgroundColor,
      width: (this.props.width == undefined)? 50:this.props.width}]}
      onPress = {this.props.onPress}
      >
        <Text style={{fontWeight: 600, paddingTop: 5, fontSize: 23, color: this.props.color}}>{this.props.title}</Text>
      </TouchableOpacity>
    );

  }
}

Button.propTypes = { 
  title: PropTypes.string.isRequired, 
  onPress: PropTypes.func.isRequired,  
  color: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
  };


const styles = StyleSheet.create({
  button:{ 
      heihgt: 50,
      borderRadius: 25, 
      textAlign:  'center', 
      textAlignVertical:'center',
      fontWeight: '700'
  }
});
