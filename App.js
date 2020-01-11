import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  SecondScreen: {screen: SecondScreen},
  ThirdScreen: {screen: ThirdScreen},
  FourthScreen: {screen: FourthScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
