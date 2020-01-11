import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import Title from '../components/Title';

export default class SecondScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Title text="Выберите ваш пол"/>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Чтобы мы знали, какие салоны вам показывать</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('ThirdScreen')}
        >
          <Text style={styles.textButton}>Мужской</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('ThirdScreen')}
        >
          <Text style={styles.textButton}>Женский</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => navigate('ThirdScreen')}
        >
          <Text style={styles.textButtonGray}>Не важно, покажите все</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  containerTitle: {
    width: '60%',
    marginTop: 10,
    marginBottom: 10,
  },
  containerText: {
    width: '60%',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'rgb(33, 150, 243)',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonGray: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 5,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  textButtonGray: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
  },
});
