import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={{ alignItems: 'center', marginTop: 20}}>
          <AnimatedCircularProgress
            size={200}
            width={7}
            fill={this.props.percent}
            tintColor="#fff"
            startDeg={120}
            endDeg={180}
            duration={2000}
            radius={60}
            backgroundColor="#92EBE9">
            {(fill) => (
              <Image
              resizeMode='stretch'
                source={{ uri: this.props.image }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </AnimatedCircularProgress>

        </View>
      </View>
    );
  }
}

Button.propTypes = {
  percent: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  tex: {
    fontSize: 30,
    alignSelf: 'center',
  },
});
