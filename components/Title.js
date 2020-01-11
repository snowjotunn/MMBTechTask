import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <Text style={styles.text}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
