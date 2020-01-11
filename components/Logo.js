import * as React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

class Logo extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();

    setTimeout(() => {
      this.state.fadeAnim.stopAnimation(({ value }) => {
        this.props.navigation.navigate('SecondScreen');
      });
    }, 1000);
  }

  render() {
    return (
      <Animated.View style={{
        opacity: this.state.fadeAnim,
      }}>
        <Text style={styles.text}>MMB</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default withNavigation(Logo);
