import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';

import Title from '../components/Title';

export default class ThirdScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainContent}>
          <View style={styles.title}>
            <Title text="Что вы хотите сделать сегодня" />
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Стрижка</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Ногти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Макияж</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Уход за кожей</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Депиляция</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Покраска</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Брови, ресницы</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Массаж</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('FourthScreen')}
            >
              <View style={styles.buttonImg}></View>
              <Text style={styles.buttonText}>Другое</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigate('ThirdScreen')}
          >
            <View style={styles.footerButtonImg}></View>
            <Text style={styles.footerButtonText}>Главная</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigate('ThirdScreen')}
          >
            <View style={styles.footerButtonImg}></View>
            <Text style={styles.footerButtonText}>Поиск</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigate('ThirdScreen')}
          >
            <View style={styles.footerButtonImg}></View>
            <Text style={styles.footerButtonText}>Записи</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigate('ThirdScreen')}
          >
            <View style={styles.footerButtonImg}></View>
            <Text style={styles.footerButtonText}>Любимые</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigate('ThirdScreen')}
          >
            <View style={styles.footerButtonImg}></View>
            <Text style={styles.footerButtonText}>Профиль</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    padding: 15,
  },
  title: {
    marginBottom: 10,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: 85,
    marginBottom: 10,
  },
  buttonImg: {
    width: 85,
    height: 85,
    borderRadius: 3,
    backgroundColor: '#d3d3d3',
  },
  buttonText: {
    textAlign: 'center',
  },
  footer: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e3e3e3',
  },
  footerButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonImg: {
    width: 24,
    height: 24,
    borderRadius: 24/2,
    backgroundColor: '#d3d3d3',
  },
  footerButtonText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
