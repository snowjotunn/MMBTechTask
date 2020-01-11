import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
