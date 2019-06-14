import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const StackNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
}, {
  initialRouteName: 'Home'
});

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
